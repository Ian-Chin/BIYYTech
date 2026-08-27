import { localePath } from '@/lib/routes';
import { SITE_URL } from '@/lib/seo';
import { posts, products } from '@/lib/site';

const BASE = SITE_URL;

/* Locale-independent paths, listed once. Every one of them exists in both
   trees, so each is emitted twice — English at the root, Chinese under /zh —
   with the pair cross-referenced through alternates.languages. Listing only
   one language is the usual reason a translated site never gets indexed. */
const PATHS = [
  { path: '/', priority: 1 },
  { path: '/contact', priority: 0.8 },
  { path: '/blog', priority: 0.7 },
  { path: '/careers', priority: 0.7 },
  { path: '/privacy', priority: 0.3 },
  { path: '/terms', priority: 0.3 },
  { path: '/cookies', priority: 0.3 },
  ...products.map((p) => ({ path: `/products/${p.slug}`, priority: 0.9 })),
  ...posts.map((p) => ({ path: `/blog/${p.slug}`, priority: 0.6, lastModified: p.date })),
];

export default function sitemap() {
  const now = new Date();

  return PATHS.flatMap(({ path, priority, lastModified }) => {
    const languages = {
      'en-MY': `${BASE}${path}`,
      'zh-Hans': `${BASE}${localePath('zh', path)}`,
      'x-default': `${BASE}${path}`,
    };

    return ['en', 'zh'].map((locale) => ({
      url: `${BASE}${localePath(locale, path)}`,
      lastModified: lastModified ? new Date(lastModified) : now,
      priority,
      alternates: { languages },
    }));
  });
}
