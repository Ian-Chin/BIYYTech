'use client';

import { useEffect } from 'react';

/**
 * Keeps <html lang> honest.
 *
 * There is one <html> element for the whole site, owned by the root layout, so
 * its lang attribute cannot be static: a visitor can move between the English
 * and Chinese trees without a document load. The shell renders an inline script
 * for the server-rendered first paint; this covers every client navigation
 * after it, including the trip back to English.
 */
export default function HtmlLang({ lang }) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return null;
}
