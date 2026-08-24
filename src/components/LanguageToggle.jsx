'use client';

import { LOCALES, LOCALE_META, useLocale } from '@/lib/i18n';

/**
 * Two-state segmented control rather than a dropdown: with exactly two locales
 * a select is a click more expensive and hides the alternative until opened.
 * The pressed state is carried by aria-pressed as well as by weight, so it
 * reads correctly without colour.
 */
export default function LanguageToggle({ tone = 'light', className = '' }) {
  const { locale, setLocale, t } = useLocale();
  const dark = tone === 'dark';

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
            onClick={() => setLocale(code)}
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
