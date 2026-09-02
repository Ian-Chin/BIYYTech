import { company } from '@/lib/site';

/**
 * Emits /manifest.webmanifest and the <link rel="manifest"> that goes with it.
 * The icons here are the same near-black tiles as favicon.ico and icon.png, at
 * the two sizes Android installs expect; they live in /public so their URLs are
 * stable across builds rather than carrying a content hash.
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
      { src: '/brand/yiy-icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/brand/yiy-icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
    ],
  };
}
