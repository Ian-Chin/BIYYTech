'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { LOCALE_KEY } from '@/lib/i18n';

/**
 * Sends a first-time visitor from / to the tree their browser reads: /zh for
 * Chinese, /ms for Malay.
 *
 * Mounted on the English homepage only, and only after hydration, so the page
 * a crawler fetches is unambiguously the English one with hreflang pointing at
 * its translations. A visitor who has ever used the language toggle has a
 * stored preference and is left alone — the URL they chose wins over the
 * browser's opinion of what they read.
 *
 * Malay is matched on `ms` and on `id`: Indonesian readers are close enough
 * that the Malay tree serves them better than English, and no `id` tree exists
 * to send them to.
 */
const MATCH = [
  { prefixes: ['zh'], to: '/zh' },
  { prefixes: ['ms', 'id'], to: '/ms' },
];
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
    // First tag wins, so a browser listing ms before zh lands on /ms rather
    // than on whichever rule happens to be checked first.
    for (const tag of tags) {
      const code = String(tag).toLowerCase();
      const hit = MATCH.find(({ prefixes }) => prefixes.some((p) => code.startsWith(p)));
      if (hit) {
        router.replace(hit.to);
        return;
      }
    }
  }, [router]);

  return null;
}
