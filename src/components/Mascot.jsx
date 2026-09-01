'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * The BIYY Bot mascot.
 *
 * One perfect circle in a design system where every other radius is 2px — it
 * is the only round thing on the site, which is what makes it read as a
 * character instead of a widget. Body, eyes, lids, pupils, mouth and blush are
 * plain elements; each expression is a different arrangement of the same six
 * parts, so states cross-fade into one another instead of cutting.
 *
 * It is also alive when nobody asked it to be: it follows the pointer, widens
 * on hover, squashes when pressed, throws sparks when released, startles at a
 * fast approach, blinks on an irregular human rhythm and nods off after a
 * while of no pointer at all.
 *
 * `state` is the conversation-driven mood the chat panel owns:
 *   'idle' | 'thinking' | 'talking' | 'happy' | 'wave' | 'shock' | 'sad'
 * Local reactions (curious, excited, startled, sleepy) are resolved here and
 * layered on top, so the caller never has to know about them.
 */

/** How long each self-clearing reaction holds before the mascot settles. */
const BURST_MS = { excited: 900, shock: 820 };

/** No pointer for this long and it dozes off. */
const SLEEP_AFTER = 15000;

const SPARKS = [-52, -18, 16, 50, 96, -96];

const clamp1 = (n) => (n < -1 ? -1 : n > 1 ? 1 : n);

export default function Mascot({
  state = 'idle',
  size = 44,
  tone = 'dark',
  interactive = true,
  className = '',
  onPoke,
}) {
  const rootRef = useRef(null);
  const [hover, setHover] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [burst, setBurst] = useState(null);
  const [beat, setBeat] = useState(0);
  const [blinking, setBlinking] = useState(false);
  const [asleep, setAsleep] = useState(false);

  // Mirrors `asleep` so the pointermove handler can check it without a render
  // on every single mouse move.
  const asleepRef = useRef(false);
  const burstTimer = useRef(null);

  /** Play a one-shot reaction. Re-firing the same one restarts its animation. */
  const fire = useCallback((kind) => {
    clearTimeout(burstTimer.current);
    setBurst(null);
    setBeat((b) => b + 1);
    requestAnimationFrame(() => {
      setBurst(kind);
      burstTimer.current = setTimeout(() => setBurst(null), BURST_MS[kind] ?? 800);
    });
  }, []);

  useEffect(() => () => clearTimeout(burstTimer.current), []);

  // Pointer following, startle and sleep ---------------------------------
  useEffect(() => {
    if (!interactive) return undefined;
    const el = rootRef.current;
    if (!el) return undefined;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches) return undefined;

    let raf = 0;
    let toX = 0;
    let toY = 0;
    let atX = 0;
    let atY = 0;
    let prev = null;
    let lastStartle = -Infinity;
    let sleepTimer = 0;

    // The eyes lag the cursor slightly. Chasing it exactly looks mechanical;
    // easing towards it looks like something deciding to look.
    const tick = () => {
      atX += (toX - atX) * 0.16;
      atY += (toY - atY) * 0.16;
      el.style.setProperty('--mx', atX.toFixed(3));
      el.style.setProperty('--my', atY.toFixed(3));
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const doze = () => {
      asleepRef.current = true;
      setAsleep(true);
    };
    sleepTimer = setTimeout(doze, SLEEP_AFTER);

    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const reach = Math.max(r.width * 6, 320);
      toX = clamp1((e.clientX - cx) / reach);
      toY = clamp1((e.clientY - cy) / reach);

      // A hand thrown at it startles it: fast pointer, close range, and not
      // more than once every few seconds or the joke wears out.
      if (prev) {
        const dt = e.timeStamp - prev.t;
        if (dt > 0 && dt < 120) {
          const speed = Math.hypot(e.clientX - prev.x, e.clientY - prev.y) / dt;
          const near = Math.hypot(e.clientX - cx, e.clientY - cy) < r.width * 3;
          if (speed > 2.6 && near && e.timeStamp - lastStartle > 5000) {
            lastStartle = e.timeStamp;
            fire('shock');
          }
        }
      }
      prev = { x: e.clientX, y: e.clientY, t: e.timeStamp };

      if (asleepRef.current) {
        asleepRef.current = false;
        setAsleep(false);
      }
      clearTimeout(sleepTimer);
      sleepTimer = setTimeout(doze, SLEEP_AFTER);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', onMove);
      cancelAnimationFrame(raf);
      clearTimeout(sleepTimer);
    };
  }, [interactive, fire]);

  // Blinking -------------------------------------------------------------
  // Irregular, and every so often a double blink, because a metronome blink
  // is the single fastest way to make a face look dead.
  useEffect(() => {
    const timers = [];
    const wait = (ms, fn) => timers.push(setTimeout(fn, ms));

    const schedule = () => {
      wait(1800 + Math.random() * 4200, () => {
        setBlinking(true);
        wait(110, () => {
          setBlinking(false);
          if (Math.random() < 0.28) {
            wait(140, () => {
              setBlinking(true);
              wait(90, () => {
                setBlinking(false);
                schedule();
              });
            });
          } else {
            schedule();
          }
        });
      });
    };

    schedule();
    return () => timers.forEach(clearTimeout);
  }, []);

  const conversational = state && state !== 'idle' ? state : null;
  // Direct pokes beat the chat's mood, which beats hover, which beats sleep.
  const expression =
    burst ?? conversational ?? (hover || pressed ? 'curious' : asleep ? 'sleepy' : 'idle');

  const bind = interactive
    ? {
        onPointerEnter: () => setHover(true),
        onPointerLeave: () => {
          setHover(false);
          setPressed(false);
        },
        onPointerDown: () => setPressed(true),
        onPointerUp: () => {
          setPressed(false);
          fire('excited');
          onPoke?.();
        },
        onPointerCancel: () => setPressed(false),
        onDoubleClick: () => fire('shock'),
      }
    : {};

  return (
    <span
      ref={rootRef}
      className={[
        'mascot',
        `mascot--${expression}`,
        `mascot--tone-${tone}`,
        blinking && !asleep ? 'is-blinking' : '',
        pressed ? 'is-pressed' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={{ width: size, height: size, '--size': `${size}px` }}
      aria-hidden="true"
      {...bind}
    >
      <span className="mascot__shadow" />

      {burst === 'excited' ? (
        <span key={beat} className="mascot__burst">
          <span className="mascot__ring" />
          {SPARKS.map((a) => (
            <span key={a} className="mascot__spark" style={{ '--a': `${a}deg` }} />
          ))}
        </span>
      ) : null}

      <span className="mascot__body">
        <span className="mascot__gloss" />
        <span className="mascot__face">
          <span className="mascot__eye mascot__eye--l">
            <span className="mascot__pupil" />
            <span className="mascot__lid" />
          </span>
          <span className="mascot__eye mascot__eye--r">
            <span className="mascot__pupil" />
            <span className="mascot__lid" />
          </span>
          <span className="mascot__blush mascot__blush--l" />
          <span className="mascot__blush mascot__blush--r" />
          <span className="mascot__mouth">
            <span className="mascot__tongue" />
          </span>
        </span>
      </span>

      <span className="mascot__hand" />
      <span className="mascot__zzz mascot__zzz--a">z</span>
      <span className="mascot__zzz mascot__zzz--b">z</span>
    </span>
  );
}
