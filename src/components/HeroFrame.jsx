'use client';

import { useEffect, useRef } from 'react';
import { onScrollFrame, prefersReducedMotion } from '@/components/motion';

const NAV_H = 72;
const RADIUS = 10;

/**
 * The hero opens as an inset card, media and copy inside a 10px-radius box
 * floating on the ink background, and unfolds to full bleed as you scroll.
 *
 * Padding and radius are driven from the shared scroll loop and written
 * straight to style, so no React re-render happens while scrolling. The
 * pre-hydration state comes from the Tailwind classes below, which match the
 * p = 0 values.
 */
export default function HeroFrame({
  children,
  fullHeight = false,
  range = 0.62,
  className = '',
  innerClassName = '',
}) {
  const outerRef = useRef(null);
  const innerRef = useRef(null);

  useEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return undefined;

    if (prefersReducedMotion()) {
      outer.style.padding = '0px';
      inner.style.borderRadius = '0px';
      if (fullHeight) inner.style.minHeight = '100svh';
      return undefined;
    }

    return onScrollFrame((vh) => {
      const p = Math.min(1, Math.max(0, window.scrollY / (vh * range)));
      const eased = 1 - Math.pow(1 - p, 3);
      const side = (1 - eased) * (window.innerWidth < 768 ? 10 : 26);
      const top = (1 - eased) * (NAV_H + (window.innerWidth < 768 ? 6 : 14));

      outer.style.paddingLeft = `${side}px`;
      outer.style.paddingRight = `${side}px`;
      outer.style.paddingBottom = `${side}px`;
      outer.style.paddingTop = `${top}px`;
      inner.style.borderRadius = `${(1 - eased) * RADIUS}px`;

      if (fullHeight) inner.style.minHeight = `calc(100svh - ${top + side}px)`;
    });
  }, [fullHeight, range]);

  return (
    <section
      ref={outerRef}
      className={`relative bg-paper pb-[10px] pl-[10px] pr-[10px] pt-[78px] md:pb-[26px] md:pl-[26px] md:pr-[26px] md:pt-[86px] ${className}`}
    >
      <div
        ref={innerRef}
        className={`relative isolate overflow-hidden bg-ink text-white ${
          fullHeight ? 'min-h-[calc(100svh-88px)] md:min-h-[calc(100svh-112px)]' : ''
        } ${innerClassName}`}
        style={{ borderRadius: `${RADIUS}px` }}
      >
        {children}
      </div>
    </section>
  );
}
