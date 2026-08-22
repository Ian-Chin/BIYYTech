'use client';

/**
 * The YiY Bot mascot.
 *
 * An original, dependency-free blob: one soft black form whose border-radius,
 * scale and face morph between states. Everything is CSS, so it animates on
 * the compositor and costs nothing at runtime.
 *
 * state: 'idle' | 'thinking' | 'talking' | 'happy' | 'wave'
 */
export default function Mascot({ state = 'idle', size = 44, tone = 'dark', className = '' }) {
  const light = tone === 'light';

  return (
    <span
      className={`mascot mascot--${state} ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <span className={`mascot__body ${light ? 'mascot__body--light' : ''}`}>
        <span className="mascot__eye mascot__eye--l" />
        <span className="mascot__eye mascot__eye--r" />
        <span className="mascot__mouth" />
      </span>
      <span className="mascot__shadow" />
    </span>
  );
}
