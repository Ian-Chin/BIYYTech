'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useLocale } from '@/lib/i18n';

/**
 * Scroll-snap carousel. No dependencies: native horizontal scrolling gives us
 * touch, trackpad and keyboard for free; we only add arrows, dots, autoplay
 * and pointer-dragging on top.
 */
export default function Carousel({
  children,
  ariaLabel = 'Carousel',
  autoplay = 0,
  className = '',
  trackClassName = '',
  tone = 'light',
}) {
  const { t } = useLocale();
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const paused = useRef(false);

  const measure = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const items = Array.from(track.children);
    setCount(items.length);
    // Cards are left-aligned, so the leading card is the one whose left edge
    // is nearest the current scroll offset.
    let best = 0;
    let bestDist = Infinity;
    items.forEach((el, i) => {
      const d = Math.abs(el.offsetLeft - track.scrollLeft - (items[0]?.offsetLeft ?? 0));
      if (d < bestDist) {
        bestDist = d;
        best = i;
      }
    });
    const start = track.scrollLeft <= 4;
    const end = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
    setIndex(best);
    setAtStart(start);
    setAtEnd(end);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;
    measure();
    track.addEventListener('scroll', measure, { passive: true });
    window.addEventListener('resize', measure);
    return () => {
      track.removeEventListener('scroll', measure);
      window.removeEventListener('resize', measure);
    };
  }, [measure]);

  /** Brings item `i` to the left edge of the viewport, clamped to the track. */
  const goTo = useCallback((i) => {
    const track = trackRef.current;
    if (!track) return;
    const items = Array.from(track.children);
    const target = items[Math.max(0, Math.min(items.length - 1, i))];
    if (!target) return;
    const origin = items[0].offsetLeft;
    const max = track.scrollWidth - track.clientWidth;
    const wanted = target.offsetLeft - origin;
    track.scrollTo({ left: Math.max(0, Math.min(max, wanted)), behavior: 'smooth' });
  }, []);

  const step = useCallback(
    (dir) => {
      const track = trackRef.current;
      if (!track) return;
      const items = Array.from(track.children);
      const max = track.scrollWidth - track.clientWidth;

      // Once the track is scrolled to an end, the next press wraps rather than
      // sitting there doing nothing.
      if (dir > 0 && track.scrollLeft >= max - 4) return goTo(0);
      if (dir < 0 && track.scrollLeft <= 4) return goTo(items.length - 1);

      const next = Math.max(0, Math.min(items.length - 1, index + dir));
      return goTo(next);
    },
    [index, goTo],
  );

  useEffect(() => {
    if (!autoplay) return undefined;
    const id = setInterval(() => {
      if (!paused.current) step(1);
    }, autoplay);
    return () => clearInterval(id);
  }, [autoplay, step]);

  // Pointer drag ---------------------------------------------------------
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;
    let down = false;
    let startX = 0;
    let startLeft = 0;

    const onDown = (e) => {
      if (e.pointerType === 'touch') return;
      down = true;
      startX = e.clientX;
      startLeft = track.scrollLeft;
      track.style.cursor = 'grabbing';
      track.style.scrollSnapType = 'none';
    };
    const onMove = (e) => {
      if (!down) return;
      track.scrollLeft = startLeft - (e.clientX - startX);
    };
    const onUp = () => {
      if (!down) return;
      down = false;
      track.style.cursor = '';
      track.style.scrollSnapType = '';
    };

    track.addEventListener('pointerdown', onDown);
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    return () => {
      track.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
    };
  }, []);

  const dark = tone === 'dark';

  return (
    <div
      className={`relative ${className}`}
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      onMouseEnter={() => {
        paused.current = true;
      }}
      onMouseLeave={() => {
        paused.current = false;
      }}
      onFocusCapture={() => {
        paused.current = true;
      }}
      onBlurCapture={() => {
        paused.current = false;
      }}
    >
      <div
        ref={trackRef}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'ArrowRight') {
            e.preventDefault();
            step(1);
          }
          if (e.key === 'ArrowLeft') {
            e.preventDefault();
            step(-1);
          }
        }}
        className={`snap-x-track flex gap-5 overflow-x-auto pb-2 outline-none ${trackClassName}`}
      >
        {children}
      </div>

      {/* Controls sit on the left so the fixed assistant launcher in the
          bottom-right corner can never cover them. */}
      <div className="mt-8 flex flex-row-reverse items-center justify-end gap-6">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              type="button"
              tabIndex={-1}
              onClick={() => goTo(i)}
              className={`h-[3px] transition-all duration-700 ease-smooth hover:scale-y-[2] ${
                i === index
                  ? dark
                    ? 'w-8 bg-white'
                    : 'w-8 bg-ink'
                  : dark
                    ? 'w-3 bg-white/25'
                    : 'w-3 bg-ink/20'
              }`}
            />
          ))}
        </div>

        <div className="flex gap-2">
          {[
            { dir: -1, label: t('carousel.previous'), d: 'M9 1L5 5l4 4', edge: atStart },
            { dir: 1, label: t('carousel.next'), d: 'M5 1l4 4-4 4', edge: atEnd },
          ].map((btn) => (
            <button
              key={btn.label}
              type="button"
              onClick={() => step(btn.dir)}
              aria-label={btn.edge ? t('carousel.wraps', { label: btn.label }) : btn.label}
              className={`group flex h-11 w-11 items-center justify-center border transition-all duration-500 ease-smooth active:scale-90 ${
                dark
                  ? 'border-white/20 text-white hover:border-white/50 hover:bg-white/10'
                  : 'border-ink/15 text-ink hover:border-ink/40 hover:bg-ink hover:text-white'
              }`}
            >
              <svg
                width="14"
                height="10"
                viewBox="0 0 14 10"
                fill="none"
                aria-hidden="true"
                className={`transition-transform duration-500 ease-smooth ${
                  btn.dir > 0 ? 'group-hover:translate-x-1' : 'group-hover:-translate-x-1'
                }`}
              >
                <path
                  d={btn.d}
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
