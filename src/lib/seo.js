import { getContent } from '@/lib/content';
import { LOCALES, htmlLang, localePath } from '@/lib/routes';
import { company, editorialPolicy, faqs, products } from '@/lib/site';

/**
 * The canonical origin. Single source of truth: robots.js and sitemap.js import
 * it rather than keeping their own copy, which is how robots.txt ended up
 * advertising a sitemap on a different host from the one serving it.
 *
 * Resolution order:
 *   1. NEXT_PUBLIC_SITE_URL          explicit override, always wins
 *   2. VERCEL_PROJECT_PRODUCTION_URL the project's production domain. Vercel
 *      sets this to the custom domain once one is attached and to the
 *      *.vercel.app host until then, so canonical tags follow the domain
 *      automatically instead of pointing at a host that does not serve yet.
 *   3. localhost                     local dev
 *
 * Only server components, route handlers, sitemap.js and robots.js import this,
 * so a non-NEXT_PUBLIC variable is safe. If you ever need SITE_URL inside a
 * 'use client' component, switch to the NEXT_PUBLIC_ override or it will be
 * undefined in the browser and hydration will mismatch.
 */
const resolveOrigin = () => {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL)
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  return 'http://localhost:3000';
};

export const SITE_URL = resolveOrigin().replace(/\/+$/, '');
export const OG_IMAGE = `${SITE_URL}/brand/og-default.png`;

export const abs = (path = '/') => new URL(path, SITE_URL).toString();

/* -------------------------------------------------------------------------- */
/*  Shared metadata helper                                                    */
/*                                                                            */
/*  Every page gets a canonical URL and an Open Graph block. Search engines    */
/*  need the canonical; answer engines lean on the description, so each one    */
/*  is written to stand alone as a summary of the page.                        */
/* -------------------------------------------------------------------------- */

/**
 * Every page exists once per locale, at `path` for English and `/<code>` +
 * `path` for the rest. Every copy carries the same hreflang set pointing at all
 * of them plus an x-default on the English one, which is what tells a search
 * engine they are translations rather than duplicates competing with each
 * other. Built from LOCALES so a new language is listed automatically.
 */
export const HREFLANG_TAG = { en: 'en-MY', zh: 'zh-Hans', ms: 'ms-MY' };

export const hreflang = (path = '/') => ({
  ...Object.fromEntries(
    LOCALES.map((locale) => [HREFLANG_TAG[locale], abs(localePath(locale, path))]),
  ),
  'x-default': abs(path),
});

const OG_LOCALE = { en: 'en_MY', zh: 'zh_MY', ms: 'ms_MY' };

export function pageMeta({
  title,
  description,
  path = '/',
  image = OG_IMAGE,
  type = 'website',
  locale = 'en',
}) {
  const url = abs(localePath(locale, path));
  return {
    title,
    description,
    alternates: { canonical: url, languages: hreflang(path) },
    openGraph: {
      type,
      url,
      title,
      description,
      siteName: company.name,
      locale: OG_LOCALE[locale] ?? OG_LOCALE.en,
      alternateLocale: LOCALES.filter((l) => l !== locale).map((l) => OG_LOCALE[l]),
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: { card: 'summary_large_image', title, description, images: [image] },
  };
}

/* -------------------------------------------------------------------------- */
/*  Structured data                                                           */
/* -------------------------------------------------------------------------- */

export const organizationLd = () => ({
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: company.legal,
  alternateName: company.name,
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    // White mark, per brand. Note it is transparent-background RGBA, so it
    // disappears against the white surfaces some consumers composite onto
    // (Google's knowledge panel among them). Swap to yiy-mark-black-512.png,
    // or ship a white mark on an ink plate, if that matters more than brand
    // consistency.
    url: abs('/brand/yiy-mark-white-512.png'),
    width: 512,
    height: 512,
  },
  description: company.tagline,
  email: company.email,
  ...(company.phone ? { telephone: company.phone } : {}),
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Kuala Lumpur',
    addressCountry: 'MY',
  },
  areaServed: ['MY', 'SG'],
  knowsAbout: [
    'Business intelligence dashboards',
    'Operational database design',
    'Spreadsheet migration',
    'Data modelling for small business',
    'Retail operations',
    'Wholesale distribution',
    'Small business operations software',
  ],
  publishingPrinciples: abs('/blog'),
});

/* One WebSite node covering every tree: same site, three languages. */
export const websiteLd = () => ({
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: company.name,
  description: company.tagline,
  publisher: { '@id': `${SITE_URL}/#organization` },
  inLanguage: LOCALES.map((locale) => htmlLang(locale)),
});

/* `path` entries are locale-independent, so the trail is resolved into the
   tree the page is actually being rendered for. */
export const breadcrumbLd = (trail, locale = 'en') => ({
  '@type': 'BreadcrumbList',
  itemListElement: trail.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.name,
    item: abs(localePath(locale, item.path)),
  })),
});

export const faqLd = (items) => ({
  '@type': 'FAQPage',
  mainEntity: items.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
});

export const homeFaqLd = (locale = 'en') => faqLd(getContent(locale).faqs);

/* Every node below takes the already-translated entry from getContent(locale)
   and only needs to be told which tree to build URLs in. The @id therefore
   differs per locale, which is correct: they are two pages. */
export const productLd = (product, locale = 'en') => {
  const url = abs(localePath(locale, product.href));

  /**
   * A product marked `service` is delivered as a project rather than licensed
   * per seat, so it is a `Service` and not a `SoftwareApplication`. It also
   * carries no Offer node: the fee is quoted per project after the content
   * session, and inventing a price here would put a number on the page that
   * nobody at BIYY has agreed to.
   */
  if (product.service) {
    return {
      '@type': 'Service',
      '@id': `${url}#service`,
      name: `${company.name} ${product.name}`,
      serviceType:
        product.serviceType ??
        'Website design, development and operations-database integration',
      url,
      description: product.summary,
      provider: { '@id': `${SITE_URL}/#organization` },
      areaServed: ['MY', 'SG'],
      audience: { '@type': 'BusinessAudience', audienceType: product.audience },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'What a build includes',
        itemListElement: product.bullets.map((item, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: item,
        })),
      },
    };
  }

  return {
    '@type': 'SoftwareApplication',
    '@id': `${url}#software`,
    name: `${company.name} ${product.name}`,
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'Business intelligence and database',
    operatingSystem: 'Web, iOS, Android',
    url,
    description: product.summary,
    audience: { '@type': 'BusinessAudience', audienceType: product.audience },
    featureList: product.bullets,
    provider: { '@id': `${SITE_URL}/#organization` },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'MYR',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '0',
        priceCurrency: 'MYR',
        unitText: 'per outlet, per month',
        valueAddedTaxIncluded: false,
        description:
          'Flat monthly price per outlet. Quoted during the walkthrough based on outlet count and products.',
      },
      availability:
        product.soon ? 'https://schema.org/PreOrder' : 'https://schema.org/InStock',
    },
  };
};

/* -------------------------------------------------------------------------- */
/*  Industries                                                                */
/*                                                                            */
/*  An industry page sells a configuration of Dashboards & Databases to one   */
/*  trade, so it is a Service with an audience rather than a second product.  */
/*  No Offer node: the price is the product's flat per-outlet fee, quoted on   */
/*  the walkthrough, and repeating it here would put a number on the page      */
/*  that the pricing page does not commit to.                                  */
/* -------------------------------------------------------------------------- */

export const industryLd = (item, locale = 'en') => {
  const url = abs(localePath(locale, item.href));

  return {
    '@type': 'Service',
    '@id': `${url}#service`,
    name: `${company.name} ${item.product}`,
    serviceType: 'Operational database and business intelligence dashboard',
    url,
    description: item.summary,
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: ['MY', 'SG'],
    audience: { '@type': 'BusinessAudience', audienceType: item.name },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'What the dashboard opens on',
      itemListElement: item.panels.map((panel, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: panel.title,
        description: panel.body,
      })),
    },
  };
};

export const industryListLd = (locale = 'en') => ({
  '@type': 'ItemList',
  name: `${company.name} industries`,
  itemListElement: getContent(locale).industries.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.name,
    url: abs(localePath(locale, item.href)),
    description: item.summary,
  })),
});

export const productListLd = (locale = 'en') => ({
  '@type': 'ItemList',
  name: `${company.name} products`,
  itemListElement: getContent(locale).products.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: p.name,
    url: abs(localePath(locale, p.href)),
    description: p.summary,
  })),
});

export const articleLd = (post, locale = 'en') => ({
  '@type': 'BlogPosting',
  '@id': abs(`${localePath(locale, `/blog/${post.slug}`)}#article`),
  headline: post.title,
  description: post.excerpt,
  abstract: post.answer,
  url: abs(localePath(locale, `/blog/${post.slug}`)),
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': abs(localePath(locale, `/blog/${post.slug}`)),
  },
  datePublished: post.date,
  dateModified: post.updated || post.date,
  articleSection: post.category,
  inLanguage: htmlLang(locale),
  image: [abs(post.image)],
  wordCount: post.sections.reduce(
    (n, s) => n + s.paragraphs.join(' ').split(/\s+/).length,
    0,
  ),
  author: {
    '@type': 'Person',
    name: post.author.name,
    jobTitle: post.author.role,
    description: post.author.credential,
    worksFor: { '@id': `${SITE_URL}/#organization` },
  },
  ...(post.reviewer
    ? {
        reviewedBy: {
          '@type': 'Person',
          name: post.reviewer.name,
          jobTitle: post.reviewer.role,
        },
      }
    : {}),
  publisher: { '@id': `${SITE_URL}/#organization` },
  isAccessibleForFree: true,
  creativeWorkStatus: 'Published',
  citation: post.sources.map((s) => s.label),
  publishingPrinciples: abs(localePath(locale, '/blog#editorial')),
  ...(editorialPolicy ? { copyrightHolder: { '@id': `${SITE_URL}/#organization` } } : {}),
});

export const blogLd = (posts, locale = 'en') => ({
  '@type': 'Blog',
  '@id': `${SITE_URL}${localePath(locale, '/blog')}#blog`,
  name: `${company.name} blog`,
  description:
    'Field notes on leaving spreadsheets, designing an operational database and rolling software into small businesses.',
  url: abs(localePath(locale, '/blog')),
  inLanguage: htmlLang(locale),
  publisher: { '@id': `${SITE_URL}/#organization` },
  blogPost: posts.map((p) => ({
    '@type': 'BlogPosting',
    headline: p.title,
    url: abs(localePath(locale, `/blog/${p.slug}`)),
    datePublished: p.date,
    dateModified: p.updated || p.date,
    author: { '@type': 'Person', name: p.author.name },
  })),
});

/** Wraps one or more nodes in a single @graph document. */
export const graph = (...nodes) => ({
  '@context': 'https://schema.org',
  '@graph': nodes.flat().filter(Boolean),
});
