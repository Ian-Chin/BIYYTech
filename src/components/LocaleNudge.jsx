'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { LOCALE_KEY } from '@/lib/i18n';

/**
 * Sends a Chinese-reading first-time visitor from / to /zh.
 *
 * Mounted on the English homepage only, and only after hydration, so the page
 * a crawler fetches is unambiguously the English one with hreflang pointing at
 * its translation. A visitor who has ever used the language toggle has a stored
 * preference and is left alone — the URL they chose wins over the browser's
 * opinion of what they read.
 */
export default function LocaleNudge() {
  const router = useRouter();

  useEffect(() => {
    let stored = null;
    try {
      stored = window.localStorage.getItem(LOCALE_KEY);
    } catch {
      // Storage blocked. Treat it as no preference and still honour the browser.
    }
    if (stored) return;

    const tags = navigator.languages?.length ? navigator.languages : [navigator.language || ''];
    if (tags.some((tag) => String(tag).toLowerCase().startsWith('zh'))) router.replace('/zh');
  }, [router]);

  return null;
}
