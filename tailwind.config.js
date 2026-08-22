/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0B0B0C',
          soft: '#16171A',
          mute: '#5B5F66',
          faint: '#8A8F98',
        },
        paper: {
          DEFAULT: '#FFFFFF',
          warm: '#F6F6F4',
          dim: '#EDEDEA',
        },
        accent: {
          DEFAULT: '#1B4DE4',
          soft: '#4C79F2',
          deep: '#0E2E9B',
        },
      },
      fontFamily: {
        sans: ['Aeonik', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      // Single sharp radius across the whole system.
      borderRadius: {
        none: '0px',
        sm: '2px',
        DEFAULT: '2px',
        md: '2px',
        lg: '2px',
        xl: '2px',
        '2xl': '2px',
        '3xl': '2px',
        full: '2px',
      },
      letterSpacing: {
        tightest: '-0.045em',
        tighter: '-0.03em',
      },
      maxWidth: {
        shell: '1520px',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        sheen: {
          '0%': { transform: 'translateX(-120%) skewX(-18deg)' },
          '100%': { transform: 'translateX(220%) skewX(-18deg)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.85)', opacity: '0.55' },
          '100%': { transform: 'scale(1.6)', opacity: '0' },
        },
      },
      animation: {
        marquee: 'marquee 38s linear infinite',
        floaty: 'floaty 7s ease-in-out infinite',
        sheen: 'sheen 1.1s ease-out',
        pulseRing: 'pulseRing 2.6s ease-out infinite',
      },
    },
  },
  plugins: [],
};
