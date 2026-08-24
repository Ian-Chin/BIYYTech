'use client';

import { useEffect, useRef, useState } from 'react';

/* ---------------------------------------------------------------------------
   Shared scroll engine
   One rAF loop and one passive scroll listener for the whole page. Parallax
   layers subscribe; each gets the viewport-relative progress of its own host
   element so nothing has to measure the document.
--------------------------------------------------------------------------- */

const subscribers = new Set();
let running = false;
let queued = false;

function frame() {
  queued = false;
  const vh = window.innerHeight || 1;
  subscribers.forEach((fn) => fn(vh));
}

function schedule() {
  if (queued) return;
  queued = true;
  requestAnimationFrame(frame);
}

function subscribe(fn) {
  subscribers.add(fn);
  if (!running) {
    running = true;
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
  }
  schedule();
  return () => {
    subscribers.delete(fn);
    if (subscribers.size === 0) {
      running = false;
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    }
  };
}

function prefersReducedMotion() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/* ---------------------------------------------------------------------------
   useInView: one-shot (or repeating) visibility flag
--------------------------------------------------------------------------- */

export function useInView({ threshold = 0.18, rootMargin = '0px 0px -8% 0px', once = true } = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return undefined;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) io.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold, rootMargin },
    );

    io.observe(node);
    return () => io.disconnect();
  }, [threshold, rootMargin, once]);

  return [ref, visible];
}

/* ---------------------------------------------------------------------------
   Reveal: fade + rise (optionally blur) when scrolled into view
--------------------------------------------------------------------------- */

export function Reveal({
  as: Tag = 'div',
  children,
  delay = 0,
  blur = false,
  className = '',
  threshold,
  ...rest
}) {
  const [ref, visible] = useInView(threshold ? { threshold } : undefined);

  return (
    <Tag
      ref={ref}
      data-visible={visible ? 'true' : 'false'}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${blur ? 'reveal-blur' : ''} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/* ---------------------------------------------------------------------------
   SplitWords: headline that assembles word by word
--------------------------------------------------------------------------- */

// Every token is an inline-block, which is also what keeps a token from
// wrapping mid-word. Chinese has no spaces, so splitting on them would produce
// a single token for the whole headline and overflow the container. CJK is
// therefore split per character, with Latin runs inside it kept whole.
const CJK = /[　-〿㐀-鿿＀-￯]/;
// A normal space would let the browser break between token and space, which is
// why the English path has always joined words with a non-breaking one.
const NBSP = ' ';

function tokenize(text) {
  const source = String(text);

  if (!CJK.test(source)) {
    const words = source.split(' ');
    return words.map((word, i) => (i < words.length - 1 ? word + NBSP : word));
  }

  const tokens = [];
  let latin = '';

  const flush = () => {
    if (latin) {
      tokens.push(latin);
      latin = '';
    }
  };

  for (const char of source) {
    if (CJK.test(char)) {
      flush();
      tokens.push(char);
    } else if (char === ' ') {
      // A space belongs to whatever preceded it, so it never becomes a token
      // of its own and never starts a line.
      if (latin) {
        tokens.push(latin + NBSP);
        latin = '';
      } else if (tokens.length) {
        tokens[tokens.length - 1] += NBSP;
      }
    } else {
      latin += char;
    }
  }

  flush();
  return tokens;
}

export function SplitWords({ text, className = '', stagger = 55, delay = 0, as: Tag = 'span' }) {
  const [ref, visible] = useInView({ threshold: 0.25 });
  const words = tokenize(text);

  return (
    <Tag ref={ref} data-visible={visible ? 'true' : 'false'} className={className}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block">
          <span className="word" style={{ transitionDelay: `${delay + i * stagger}ms` }}>
            {word}
          </span>
        </span>
      ))}
    </Tag>
  );
}

/* ---------------------------------------------------------------------------
   Parallax: translates (and optionally scales) with scroll progress
   `speed` is the total travel in pixels across a full viewport of scroll.
--------------------------------------------------------------------------- */

export function Parallax({
  children,
  speed = 90,
  axis = 'y',
  scaleFrom = 1,
  scaleTo = 1,
  className = '',
  as: Tag = 'div',
  ...rest
}) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || prefersReducedMotion()) return undefined;

    return subscribe((vh) => {
      const rect = node.getBoundingClientRect();
      // -1 when the element sits just below the fold, 1 when just above it.
      const centre = rect.top + rect.height / 2;
      const progress = Math.max(-1.5, Math.min(1.5, (centre - vh / 2) / vh));
      const shift = progress * speed;
      const t = Math.max(0, Math.min(1, 1 - Math.abs(progress)));
      const scale = scaleFrom + (scaleTo - scaleFrom) * t;
      const translate = axis === 'x' ? `translate3d(${shift}px,0,0)` : `translate3d(0,${shift}px,0)`;
      node.style.transform = `${translate} scale(${scale.toFixed(4)})`;
    });
  }, [speed, axis, scaleFrom, scaleTo]);

  return (
    <Tag ref={ref} data-parallax className={className} style={{ willChange: 'transform' }} {...rest}>
      {children}
    </Tag>
  );
}

/* ---------------------------------------------------------------------------
   CountUp: animates a number once it enters the viewport
--------------------------------------------------------------------------- */

export function CountUp({ value, suffix = '', prefix = '', duration = 1600, className = '' }) {
  const [ref, visible] = useInView({ threshold: 0.4 });
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (!visible) return undefined;
    if (prefersReducedMotion()) {
      setShown(value);
      return undefined;
    }

    let raf = 0;
    const start = performance.now();

    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 4);
      setShown(value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [visible, value, duration]);

  const decimals = Number.isInteger(value) ? 0 : 1;

  return (
    <span ref={ref} className={className}>
      {prefix}
      {shown.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export { subscribe as onScrollFrame, prefersReducedMotion };
