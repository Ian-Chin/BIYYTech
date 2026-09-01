import Image from 'next/image';
import Link from '@/components/Link';

const MARKS = {
  dark: '/brand/yiy-mark-white-512.png',
  light: '/brand/yiy-mark-black-512.png',
};

export function Mark({ variant = 'light', size = 30, className = '', priority = false }) {
  return (
    <Image
      src={MARKS[variant]}
      alt=""
      width={size}
      height={size}
      priority={priority}
      className={className}
      aria-hidden="true"
    />
  );
}

/**
 * `priority` is opt-in. Only the masthead logo is above the fold and worth
 * pre-loading; the footer copy of the same mark is a screen or more down and
 * should lazy-load like everything else.
 */
export default function Logo({
  variant = 'light',
  size = 30,
  withWordmark = true,
  className = '',
  priority = false,
  // Passed in rather than read from context so this stays a server component.
  label = 'BIYY Tech home',
}) {
  const tone = variant === 'dark' ? 'text-white' : 'text-ink';

  return (
    <Link
      href="/"
      aria-label={label}
      className={`group inline-flex items-center gap-2.5 ${tone} ${className}`}
    >
      <span className="relative inline-flex transition-transform duration-700 ease-smooth group-hover:rotate-[-8deg] group-hover:scale-105">
        <Mark variant={variant} size={size} priority={priority} />
      </span>
      {withWordmark ? (
        <span className="flex items-baseline gap-1.5 text-[17px] font-semibold tracking-tighter">
          BIYY
          <span className="text-[11px] font-medium uppercase tracking-[0.22em] opacity-55">
            Tech
          </span>
        </span>
      ) : null}
    </Link>
  );
}
