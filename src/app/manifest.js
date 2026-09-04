import { company } from '@/lib/site';

/**
 * Emits /manifest.webmanifest and the <link rel="manifest"> that goes with it.
 * The icons here are the same accent tiles as favicon.ico, at the two sizes
 * Android installs expect; they live in /public so their URLs are stable across
 * builds rather than carrying a content hash. background_color stays ink: the
 * splash is the site's surface, and the blue tile is meant to sit on it rather
 * than fill it.
 */
export default function manifest() {
  return {
    name: `${company.name} — ${company.tagline}`,
    short_name: company.name,
    description: company.tagline,
    start_url: '/',
    display: 'standalone',
    background_color: '#0B0B0C',
    theme_color: '#0B0B0C',
    icons: [
      { src: '/brand/biyy-icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/brand/biyy-icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
    ],
  };
}
