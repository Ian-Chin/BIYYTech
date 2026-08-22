'use client';

import { useEffect, useState } from 'react';
import { onScrollFrame } from '@/components/motion';

/** Appears once the visitor is a viewport and a half down the page. */
export default function BackToTop() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    return onScrollFrame((vh) => {
      setShown(document.documentElement.scrollTop > vh * 1.5);
    });
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      tabIndex={shown ? 0 : -1}
      className={`group fixed bottom-[6.25rem] right-5 z-[65] flex h-11 w-11 items-center justify-center border border-ink/10 bg-white shadow-[0_16px_38px_-24px_rgba(11,11,12,0.7)] transition-all duration-500 ease-smooth hover:-translate-y-1 hover:border-ink/30 active:scale-90 md:bottom-[7.75rem] md:right-7 ${
        shown
          ? 'pointer-events-auto translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-3 opacity-0'
      }`}
    >
      <svg
        width="12"
        height="14"
        viewBox="0 0 12 14"
        fill="none"
        aria-hidden="true"
        className="transition-transform duration-500 ease-smooth group-hover:-translate-y-0.5"
      >
        <path
          d="M6 13V1M1 6l5-5 5 5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
