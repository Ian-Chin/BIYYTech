'use client';

/* -------------------------------------------------------------------------- */
/*  Locale context                                                             */
/*                                                                             */
/*  The site is statically generated, so the server has no way of knowing which */
/*  language a visitor wants: there is no cookie read on the server and no      */
/*  /zh URL prefix. The first paint is therefore always English, and the stored */
/*  (or browser-preferred) locale is applied on mount. That is a deliberate     */
/*  trade: switching to server-read cookies would make every page dynamic.      */
/* -------------------------------------------------------------------------- */

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { getContent } from '@/lib/content';
import { ui } from '@/lib/ui';

export const LOCALES = ['en', 'zh'];
export const DEFAULT_LOCALE = 'en';
export const LOCALE_KEY = 'yiy.locale';

/** Short label for the toggle, and the `lang` attribute each locale maps to. */
export const LOCALE_META = {
  en: { short: 'EN', name: 'English', htmlLang: 'en' },
  zh: { short: '中文', name: '中文', htmlLang: 'zh-Hans' },
};

const LocaleContext = createContext(null);

const dig = (key, obj) =>
  key.split('.').reduce((node, part) => (node == null ? undefined : node[part]), obj);

/** Picks a starting locale from the visitor's browser on a first visit. */
function detect() {
  if (typeof navigator === 'undefined') return DEFAULT_LOCALE;
  const tags = navigator.languages?.length ? navigator.languages : [navigator.language || ''];
  return tags.some((tag) => String(tag).toLowerCase().startsWith('zh')) ? 'zh' : DEFAULT_LOCALE;
}

export function LocaleProvider({ children }) {
  const [locale, setStored] = useState(DEFAULT_LOCALE);

  useEffect(() => {
    let saved = null;
    try {
      saved = window.localStorage.getItem(LOCALE_KEY);
    } catch {
      // Private mode or storage disabled. Fall through to detection.
    }
    const next = LOCALES.includes(saved) ? saved : detect();
    if (next !== DEFAULT_LOCALE) setStored(next);
  }, []);

  // The server renders lang="en"; keep the document honest once we know better.
  useEffect(() => {
    document.documentElement.lang = LOCALE_META[locale].htmlLang;
  }, [locale]);

  const setLocale = useCallback((next) => {
    if (!LOCALES.includes(next)) return;
    try {
      window.localStorage.setItem(LOCALE_KEY, next);
    } catch {
      // The choice still applies for this visit; it just will not be remembered.
    }
    setStored(next);
  }, []);

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

    return { locale, setLocale, t, content: getContent(locale) };
  }, [locale, setLocale]);

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
