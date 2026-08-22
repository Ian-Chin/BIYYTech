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

export function pageMeta({ title, description, path = '/', image = OG_IMAGE, type = 'website' }) {
  const url = abs(path);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type,
      url,
      title,
      description,
      siteName: company.name,
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
    'Inventory management',
    'Stock control',
    'Appointment scheduling',
    'Multi-resource scheduling',
    'Retail operations',
    'Wholesale distribution',
    'Small business operations software',
  ],
  publishingPrinciples: abs('/blog'),
});

export const websiteLd = () => ({
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: company.name,
  description: company.tagline,
  publisher: { '@id': `${SITE_URL}/#organization` },
  inLanguage: 'en',
});

export const breadcrumbLd = (trail) => ({
  '@type': 'BreadcrumbList',
  itemListElement: trail.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.name,
    item: abs(item.path),
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

export const homeFaqLd = () => faqLd(faqs);

export const productLd = (product) => ({
  '@type': 'SoftwareApplication',
  '@id': abs(`${product.href}#software`),
  name: `${company.name} ${product.name}`,
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: product.slug === 'booking' ? 'Scheduling' : 'Inventory management',
  operatingSystem: 'Web, iOS, Android',
  url: abs(product.href),
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
      product.status === 'Coming soon'
        ? 'https://schema.org/PreOrder'
        : 'https://schema.org/InStock',
  },
});

export const productListLd = () => ({
  '@type': 'ItemList',
  name: `${company.name} products`,
  itemListElement: products.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: p.name,
    url: abs(p.href),
    description: p.summary,
  })),
});

export const articleLd = (post) => ({
  '@type': 'BlogPosting',
  '@id': abs(`/blog/${post.slug}#article`),
  headline: post.title,
  description: post.excerpt,
  abstract: post.answer,
  url: abs(`/blog/${post.slug}`),
  mainEntityOfPage: { '@type': 'WebPage', '@id': abs(`/blog/${post.slug}`) },
  datePublished: post.date,
  dateModified: post.updated || post.date,
  articleSection: post.category,
  inLanguage: 'en',
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
  publishingPrinciples: abs('/blog#editorial'),
  ...(editorialPolicy ? { copyrightHolder: { '@id': `${SITE_URL}/#organization` } } : {}),
});

export const blogLd = (posts) => ({
  '@type': 'Blog',
  '@id': `${SITE_URL}/blog#blog`,
  name: `${company.name} blog`,
  description:
    'Field notes on inventory accuracy, booking operations and rolling software into small businesses.',
  url: abs('/blog'),
  publisher: { '@id': `${SITE_URL}/#organization` },
  blogPost: posts.map((p) => ({
    '@type': 'BlogPosting',
    headline: p.title,
    url: abs(`/blog/${p.slug}`),
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
