'use client';

/* -------------------------------------------------------------------------- */
/*  Locale context                                                             */
/*                                                                             */
/*  The locale is decided by the URL, not by the browser: English is served     */
/*  from the root and Chinese from /zh, and each tree is statically generated   */
/*  in its own language. That is what makes the Chinese site visible to         */
/*  crawlers, which it was not while the translation was swapped in on mount.   */
/*                                                                             */
/*  Because the locale is a route prop rather than state, there is no first     */
/*  paint in the wrong language and nothing to hydrate around.                  */
/* -------------------------------------------------------------------------- */

import { createContext, useContext, useMemo } from 'react';
import { getContent } from '@/lib/content';
import { DEFAULT_LOCALE, LOCALES, htmlLang, localePath } from '@/lib/routes';
import { ui } from '@/lib/ui';

export { DEFAULT_LOCALE, LOCALES };

/** Remembers the visitor's explicit choice, so the homepage stops guessing. */
export const LOCALE_KEY = 'yiy.locale';

/** Labels for the toggle. The lang tags come from routes.js, which server code
    can also read — see the note there. */
export const LOCALE_META = {
  en: { short: 'EN', name: 'English', htmlLang: htmlLang('en') },
  zh: { short: '中文', name: '中文', htmlLang: htmlLang('zh') },
};

const LocaleContext = createContext(null);

const dig = (key, obj) =>
  key.split('.').reduce((node, part) => (node == null ? undefined : node[part]), obj);

export function LocaleProvider({ locale = DEFAULT_LOCALE, children }) {
  const value = useMemo(() => {
    const dict = ui[locale] ?? ui[DEFAULT_LOCALE];
    const fallback = ui[DEFAULT_LOCALE];

    const t = (key, vars) => {
      const raw = dig(key, dict) ?? dig(key, fallback) ?? key;
      if (typeof raw !== 'string' || !vars) return raw;
      return raw.replace(/\{(\w+)\}/g, (match, name) =>
        vars[name] === undefined ? match : String(vars[name]),
      );
    };

    return {
      locale,
      t,
      content: getContent(locale),
      // Every internal link goes through this, usually via <Link>.
      path: (to) => localePath(locale, to),
    };
  }, [locale]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error('useLocale must be used inside <LocaleProvider>.');
  return ctx;
}

/**
 * Dates are the one piece of content that is generated rather than authored,
 * so they get their own helper instead of a dictionary entry.
 */
export function formatDate(iso, locale, { long = false } = {}) {
  const tag = locale === 'zh' ? 'zh-CN' : 'en-GB';
  return new Date(iso).toLocaleDateString(tag, {
    day: 'numeric',
    month: long ? 'long' : 'short',
    year: 'numeric',
  });
}
