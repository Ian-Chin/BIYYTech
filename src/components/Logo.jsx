import Image from 'next/image';
import Link from 'next/link';

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

export default function Logo({ variant = 'light', size = 30, withWordmark = true, className = '' }) {
  const tone = variant === 'dark' ? 'text-white' : 'text-ink';

  return (
    <Link
      href="/"
      aria-label="YiY Tech home"
      className={`group inline-flex items-center gap-2.5 ${tone} ${className}`}
    >
      <span className="relative inline-flex transition-transform duration-700 ease-smooth group-hover:rotate-[-8deg] group-hover:scale-105">
        <Mark variant={variant} size={size} priority />
      </span>
      {withWordmark ? (
        <span className="flex items-baseline gap-1.5 text-[17px] font-semibold tracking-tighter">
          YiY
          <span className="text-[11px] font-medium uppercase tracking-[0.22em] opacity-55">
            Tech
          </span>
        </span>
      ) : null}
    </Link>
  );
}
