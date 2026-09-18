'use client';

import Link from '@/components/Link';
import { useLocale } from '@/lib/i18n';

const Arrow = () => (
  <svg width="12" height="9" viewBox="0 0 14 10" fill="none" aria-hidden="true">
    <path
      d="M9 1l4 4-4 4M13 5H1"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * The offer strip above the bar.
 *
 * It renders inside <header> rather than before it: the header is fixed, and a
 * second fixed element would mean two offsets to keep in step. One fixed box
 * with the strip stacked on the bar keeps the chrome a single height, which
 * `--banner-h` + `--nav-h` describe for everything that has to clear it.
 *
 * The whole strip is the link, so the tap target is the full width rather than
 * the few characters at the end of the sentence.
 */
export default function CtaBanner() {
  const { t } = useLocale();

  return (
    <Link
      href="/contact"
      className="group flex w-full items-center justify-center gap-2 bg-accent px-5 text-white md:gap-3"
      style={{ height: 'var(--banner-h)' }}
    >
      <span className="text-[12px] font-medium leading-none tracking-tight md:text-[13px]">
        {t('banner.text')}
      </span>

      {/* The specific half of the offer. First thing to go when the bar runs
          out of room, because the sentence above still reads without it. */}
      <span className="hidden text-[12px] leading-none text-white/60 md:inline">
        {t('banner.note')}
      </span>

      <span className="inline-flex items-center gap-1.5 text-[12px] font-medium leading-none md:text-[13px]">
        <span className="hidden border-b border-white/40 pb-0.5 transition-colors duration-300 group-hover:border-white sm:inline">
          {t('banner.cta')}
        </span>
        <span className="transition-transform duration-500 ease-smooth group-hover:translate-x-0.5">
          <Arrow />
        </span>
      </span>
    </Link>
  );
}
