'use client';

import { usePathname, useRouter } from 'next/navigation';
import { LOCALES, LOCALE_KEY, LOCALE_META, useLocale } from '@/lib/i18n';
import { localePath, stripLocale } from '@/lib/routes';

/**
 * Segmented control rather than a dropdown: at this many locales a select is a
 * click more expensive and hides the alternatives until opened. It renders one
 * button per entry in LOCALES, so adding a language needs nothing here. The
 * pressed state is carried by aria-pressed as well as by weight, so it reads
 * correctly without colour.
 *
 * Switching language is a navigation, not a state change: each language is a
 * real URL, so the toggle moves the same page across trees (/blog/x ⇄
 * /zh/blog/x ⇄ /ms/blog/x) and records the choice so the homepage stops
 * guessing. Watch the width if a fourth locale is ever added — the labels are
 * short codes (EN / 中文 / BM) precisely so the row still fits a phone.
 */
export default function LanguageToggle({ tone = 'light', className = '' }) {
  const { locale, t } = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const dark = tone === 'dark';

  const switchTo = (code) => {
    if (code === locale) return;
    try {
      window.localStorage.setItem(LOCALE_KEY, code);
    } catch {
      // The choice still applies for this visit; it just will not be remembered.
    }
    router.push(localePath(code, stripLocale(pathname)));
  };

  return (
    <div
      role="group"
      aria-label={t('locale.label')}
      className={`inline-flex items-center border ${
        dark ? 'border-white/20' : 'border-ink/[0.14]'
      } ${className}`}
    >
      {LOCALES.map((code) => {
        const on = code === locale;
        return (
          <button
            key={code}
            type="button"
            lang={LOCALE_META[code].htmlLang}
            onClick={() => switchTo(code)}
            aria-pressed={on}
            className={`px-2.5 py-1.5 text-[11px] font-medium leading-none tracking-[0.08em] transition-colors duration-300 ${
              on
                ? dark
                  ? 'bg-white text-ink'
                  : 'bg-ink text-white'
                : dark
                  ? 'text-white/55 hover:text-white'
                  : 'text-ink-mute hover:text-ink'
            }`}
          >
            {LOCALE_META[code].short}
          </button>
        );
      })}
    </div>
  );
}
