import { posts, products } from '@/lib/site';

const BASE = 'https://yiy.tech';

export default function sitemap() {
  const now = new Date();
  return [
    { url: `${BASE}/`, lastModified: now, priority: 1 },
    { url: `${BASE}/contact`, lastModified: now, priority: 0.8 },
    { url: `${BASE}/blog`, lastModified: now, priority: 0.7 },
    { url: `${BASE}/careers`, lastModified: now, priority: 0.7 },
    { url: `${BASE}/privacy`, lastModified: now, priority: 0.3 },
    { url: `${BASE}/terms`, lastModified: now, priority: 0.3 },
    ...products.map((p) => ({
      url: `${BASE}/products/${p.slug}`,
      lastModified: now,
      priority: 0.9,
    })),
    ...posts.map((p) => ({
      url: `${BASE}/blog/${p.slug}`,
      lastModified: new Date(p.date),
      priority: 0.6,
    })),
  ];
}
