/* -------------------------------------------------------------------------- */
/*  Locale-aware content selector                                              */
/*                                                                             */
/*  One place that answers "what does this site say in locale X". Components    */
/*  reach it through `useLocale().content` rather than importing site.js        */
/*  directly, which is what keeps a page from rendering half in each language.  */
/* -------------------------------------------------------------------------- */

import * as enLegal from '@/lib/legal';
import * as zhLegal from '@/lib/legal.zh';
import * as enSite from '@/lib/site';
import * as zhSite from '@/lib/site.zh';

const build = (site, legal) => ({
  company: site.company,
  nav: site.nav,
  products: site.products,
  webService: site.webService,
  industries: site.industries,
  pillars: site.pillars,
  stats: site.stats,
  comparison: site.comparison,
  testimonials: site.testimonials,
  rollout: site.rollout,
  faqs: site.faqs,
  authors: site.authors,
  editorialPolicy: site.editorialPolicy,
  posts: site.posts,
  roles: site.roles,
  values: site.values,
  legal: {
    updated: enLegal.LEGAL_UPDATED,
    privacy: legal.privacy,
    terms: legal.terms,
    cookies: legal.cookies,
  },
});

const CONTENT = {
  en: build(enSite, enLegal),
  zh: build(zhSite, zhLegal),
};

export function getContent(locale) {
  return CONTENT[locale] ?? CONTENT.en;
}

/** Resolves one legal document by its slug, e.g. `legalDoc('privacy', 'zh')`. */
export function legalDoc(slug, locale) {
  return getContent(locale).legal[slug];
}

/**
 * Server pages know which product or post they are rendering, but not which
 * language the visitor reads. They pass the slug down and the client view looks
 * the entry up here, so the two locales stay a single source of truth.
 */
export const bySlug = (list, slug) => list.find((item) => item.slug === slug);
