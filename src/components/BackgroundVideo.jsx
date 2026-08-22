'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { prefersReducedMotion } from '@/components/motion';

/**
 * Poster-first background footage.
 *
 * The clips in /public/media/video are 3-12MB each, and the closing CTA sits
 * below the fold on every page. Mounting a <video> there unconditionally meant
 * every page paid for footage most visitors never scrolled to.
 *
 * So: the poster image renders immediately and is what LCP measures, and the
 * <video> is only mounted once the section is near the viewport. It fades in
 * when it actually has frames, so there is no flash of black between the two.
 * Reduced-motion visitors keep the still and never download the clip.
 */
export default function BackgroundVideo({
  src,
  poster,
  className = '',
  imageClassName = '',
  priority = false,
  sizes = '100vw',
  rootMargin = '300px',
}) {
  const hostRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const node = hostRef.current;
    if (!node || !src) return undefined;
    if (prefersReducedMotion()) return undefined;

    if (typeof IntersectionObserver === 'undefined') {
      setMounted(true);
      return undefined;
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setMounted(true);
          io.disconnect();
        }
      },
      { rootMargin },
    );

    io.observe(node);
    return () => io.disconnect();
  }, [src, rootMargin]);

  return (
    <div ref={hostRef} className={`absolute inset-0 ${className}`}>
      <Image
        src={poster}
        alt=""
        fill
        priority={priority}
        sizes={sizes}
        className={`object-cover ${imageClassName}`}
      />

      {mounted ? (
        <video
          src={src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          onPlaying={() => setPlaying(true)}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-smooth ${imageClassName}`}
          style={{ opacity: playing ? 1 : 0 }}
        />
      ) : null}
    </div>
  );
}
