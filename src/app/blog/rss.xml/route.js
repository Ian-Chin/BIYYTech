import { SITE_URL } from '@/lib/seo';
import { company, posts } from '@/lib/site';

export const dynamic = 'force-static';

const esc = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

/** RSS wants RFC 822. Dates in site.js are plain ISO calendar dates. */
const rfc822 = (iso) => new Date(`${iso}T09:00:00Z`).toUTCString();

export function GET() {
  const latest = posts.reduce((a, p) => (p.updated > a ? p.updated : a), posts[0].date);

  const items = posts
    .map((p) => {
      const url = `${SITE_URL}/blog/${p.slug}`;
      return `    <item>
      <title>${esc(p.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${rfc822(p.date)}</pubDate>
      <category>${esc(p.category)}</category>
      <dc:creator>${esc(p.author.name)}</dc:creator>
      <description>${esc(p.excerpt)}</description>
    </item>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${esc(company.name)} blog</title>
    <link>${SITE_URL}/blog</link>
    <atom:link href="${SITE_URL}/blog/rss.xml" rel="self" type="application/rss+xml" />
    <description>Field notes on inventory accuracy, booking operations and rolling software into small businesses that cannot afford downtime.</description>
    <language>en</language>
    <copyright>${esc(company.legal)}</copyright>
    <lastBuildDate>${rfc822(latest)}</lastBuildDate>
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: {
      'content-type': 'application/rss+xml; charset=utf-8',
      'cache-control': 'public, max-age=3600',
    },
  });
}
