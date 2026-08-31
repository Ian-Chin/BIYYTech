/* -------------------------------------------------------------------------- */
/*  Locale-prefixed URLs                                                       */
/*                                                                             */
/*  English is served from the root and Chinese from /zh, so the English URLs   */
/*  that are already indexed never move. Deliberately dependency-free: this is  */
/*  imported by client components as well as by the metadata builders, and      */
/*  seo.js cannot be pulled into the browser (it reads server-only env).        */
/* -------------------------------------------------------------------------- */

export const LOCALES = ['en', 'zh'];
export const DEFAULT_LOCALE = 'en';

/**
 * The BCP 47 tag each locale maps to, for <html lang> and for the language
 * fields in structured data.
 *
 * It lives here rather than beside the rest of the locale metadata in i18n.jsx
 * because that module is 'use client': a server component importing a plain
 * object from it receives a client reference, not the object, and every lookup
 * quietly returns undefined. Server code needs this, so it cannot live there.
 */
export const HTML_LANG = { en: 'en', zh: 'zh-Hans' };

export const htmlLang = (locale) => HTML_LANG[locale] ?? HTML_LANG[DEFAULT_LOCALE];

/** The URL prefix a locale lives under. English has none, by design. */
export const localeBase = (locale) => (locale === 'zh' ? '/zh' : '');

/**
 * Turns a locale-independent path from the content files (`/products/dashboards`,
 * `/#products`) into a real URL for one locale.
 *
 *   localePath('zh', '/contact')   → '/zh/contact'
 *   localePath('zh', '/')          → '/zh'
 *   localePath('en', '/contact')   → '/contact'
 *   localePath('zh', 'mailto:…')   → 'mailto:…'   (left alone)
 */
export function localePath(locale, path = '/') {
  if (typeof path !== 'string' || !path.startsWith('/')) return path;
  const base = localeBase(locale);
  if (!base) return path;
  return path === '/' ? base : `${base}${path}`;
}

/** Strips the locale prefix back off, so a URL can be moved between trees. */
export function stripLocale(pathname = '/') {
  for (const locale of LOCALES) {
    const base = localeBase(locale);
    if (!base) continue;
    if (pathname === base) return '/';
    if (pathname.startsWith(`${base}/`)) return pathname.slice(base.length);
  }
  return pathname || '/';
}

/** Which tree a pathname belongs to. Used by the language toggle. */
export function localeFromPath(pathname = '/') {
  return pathname === '/zh' || pathname.startsWith('/zh/') ? 'zh' : 'en';
}
