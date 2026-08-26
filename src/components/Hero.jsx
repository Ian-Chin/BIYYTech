'use client';

import Image from 'next/image';
import Link from '@/components/Link';
import { useEffect, useRef, useState } from 'react';
import HeroFrame from '@/components/HeroFrame';
import { Reveal, SplitWords, onScrollFrame, prefersReducedMotion } from '@/components/motion';
import { useLocale } from '@/lib/i18n';

// Only the current scene is mounted as a <video>; the rest stay as poster
// stills until they are about to play, so the page loads one clip, not three.
const SCENES = [
  { src: '/media/video/warehouse-aisle.mp4', poster: '/media/img/inventory-shelves.jpg' },
  { src: '/media/video/salon-color.mp4', poster: '/media/img/salon-interior.jpg' },
  { src: '/media/video/warehouse-work.mp4', poster: '/media/img/inventory-aisle.jpg' },
];

export default function Hero() {
  const { t } = useLocale();
  const [scene, setScene] = useState(0);
  // Starts empty so the first paint is the poster still, not a 12MB download.
  // Scene 0's clip is mounted once the browser is idle, and reduced-motion
  // visitors never mount one at all.
  const [mounted, setMounted] = useState(() => new Set());
  const veilRef = useRef(null);
  const contentRef = useRef(null);

  const show = (i) => {
    setScene(i);
    setMounted((prev) => (prev.has(i) ? prev : new Set(prev).add(i)));
  };

  useEffect(() => {
    if (prefersReducedMotion()) return undefined;
    const idle =
      typeof window.requestIdleCallback === 'function'
        ? window.requestIdleCallback(() => setMounted((prev) => new Set(prev).add(0)), {
            timeout: 2500,
          })
        : setTimeout(() => setMounted((prev) => new Set(prev).add(0)), 1200);
    return () => {
      if (typeof window.cancelIdleCallback === 'function') window.cancelIdleCallback(idle);
      else clearTimeout(idle);
    };
  }, []);

  // Cross-fade the background footage. An auto-rotating background is motion,
  // so reduced-motion visitors keep whichever still they land on.
  useEffect(() => {
    if (prefersReducedMotion()) return undefined;
    const id = setInterval(() => {
      setScene((s) => {
        const next = (s + 1) % SCENES.length;
        setMounted((prev) => (prev.has(next) ? prev : new Set(prev).add(next)));
        return next;
      });
    }, 9000);
    return () => clearInterval(id);
  }, []);

  // Scroll-linked veil + content lift.
  useEffect(() => {
    return onScrollFrame((vh) => {
      const p = Math.min(1, Math.max(0, window.scrollY / vh));
      if (veilRef.current) veilRef.current.style.opacity = String(0.76 + p * 0.24);
      if (contentRef.current) {
        contentRef.current.style.transform = `translate3d(0, ${p * -60}px, 0)`;
        contentRef.current.style.opacity = String(Math.max(0, 1 - p * 1.25));
      }
    });
  }, []);

  return (
    <HeroFrame fullHeight>
      {/* Footage stack */}
      <div className="absolute inset-0">
        {SCENES.map((s, i) =>
          s.src && mounted.has(i) ? (
            <video
              key={s.poster}
              src={s.src}
              poster={s.poster}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover saturate-[0.55] transition-opacity duration-[2000ms] ease-smooth"
              style={{ opacity: scene === i ? 1 : 0, transform: 'scale(1.08)' }}
            />
          ) : (
            <Image
              key={s.poster}
              src={s.poster}
              alt=""
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover saturate-[0.55] transition-opacity duration-[2000ms] ease-smooth"
              style={{ opacity: scene === i ? 1 : 0, transform: 'scale(1.08)' }}
            />
          ),
        )}
      </div>

      {/* Veils */}
      <div
        ref={veilRef}
        className="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/80 to-ink"
        style={{ opacity: 0.76 }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(120%_85%_at_60%_10%,rgba(11,11,12,0.2),rgba(11,11,12,0.88))]" />
      <div className="noise absolute inset-0" />

      {/* Content */}
      <div className="shell relative flex min-h-[inherit] flex-col items-center justify-center py-24 text-center">
        <div ref={contentRef} className="w-full will-change-transform">
          <Reveal className="mb-7 flex justify-center">
            <span className="eyebrow text-white/55">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-pulseRing rounded-full bg-white" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white" />
              </span>
              {t('hero.eyebrow')}
            </span>
          </Reveal>

          <h1 className="display mx-auto max-w-[16ch] text-[clamp(2.15rem,5.4vw,4.5rem)]">
            <SplitWords text={t('hero.line1')} />
            <br />
            <SplitWords text={t('hero.line2')} delay={120} className="text-white/45" />
            <br />
            <SplitWords text={t('hero.line3')} delay={240} />
          </h1>

          <Reveal delay={420}>
            <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-white/60">
              {t('hero.body')}
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Link href="/contact" className="btn bg-white text-ink hover:-translate-y-0.5">
                {t('common.walkthrough')}
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
                  <path
                    d="M9 1l4 4-4 4M13 5H1"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <Link href="/#products" className="btn-invert">
                {t('common.seeProducts')}
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Scene dots */}
        <div className="mt-9 flex items-center justify-center gap-1">
          {SCENES.map((s, i) => (
            // Padded to a 44px-tall hit area; the visible rule stays 3px.
            <button
              key={s.poster}
              type="button"
              onClick={() => show(i)}
              aria-label={t('hero.sceneLabel', { n: i + 1 })}
              aria-current={scene === i}
              className="group flex h-11 items-center px-1"
            >
              <span
                className={`block h-[3px] rounded-full transition-all duration-700 ease-smooth ${
                  scene === i ? 'w-9 bg-white' : 'w-4 bg-white/25 group-hover:bg-white/50'
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </HeroFrame>
  );
}
