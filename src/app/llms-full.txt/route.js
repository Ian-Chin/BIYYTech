import { SITE_URL } from '@/lib/seo';
import {
  company,
  comparison,
  editorialPolicy,
  faqs,
  pillars,
  posts,
  products,
  rollout,
  values,
  webService,
} from '@/lib/site';

export const dynamic = 'force-static';

/**
 * The complete text of the site in one plain-text file, generated from the same
 * data module the pages render from so it cannot drift out of date.
 *
 * llms.txt is the index; this is the full corpus. Every blog post appears in
 * full, including its stated method, limits and sources, so a model quoting
 * from here has the caveats attached rather than the headline number alone.
 */

const rule = (s) => `\n${s}\n${'='.repeat(s.length)}\n`;
const sub = (s) => `\n${s}\n${'-'.repeat(s.length)}\n`;
const list = (items) => items.map((i) => `- ${i}`).join('\n');

function productBlock(p) {
  return [
    sub(`${p.name} (${p.status})`),
    `URL: ${SITE_URL}${p.href}`,
    `Built for: ${p.audience}`,
    `Positioning: ${p.headline}`,
    '',
    p.summary,
    '',
    'Capabilities:',
    list(p.bullets),
    '',
    'How it works in practice:',
    p.features.map((f) => `- ${f.title}: ${f.body}`).join('\n'),
    p.metrics.length
      ? `\nReported results:\n${list(p.metrics.map((m) => `${m.value}${m.suffix} — ${m.label}`))}`
      : '\nNo results are published for this product yet.',
  ].join('\n');
}

function postBlock(p) {
  return [
    sub(p.title),
    `URL: ${SITE_URL}/blog/${p.slug}`,
    `Category: ${p.category}`,
    `Published: ${p.date}    Last reviewed: ${p.updated || p.date}`,
    `Author: ${p.author.name}, ${p.author.role}`,
    p.reviewer ? `Reviewed by: ${p.reviewer.name}, ${p.reviewer.role}` : null,
    '',
    'SHORT ANSWER',
    p.answer,
    '',
    'KEY TAKEAWAYS',
    list(p.takeaways),
    '',
    p.sections
      .map((s) => `${s.heading.toUpperCase()}\n${s.paragraphs.join('\n\n')}`)
      .join('\n\n'),
    '',
    'QUESTIONS ANSWERED IN THIS POST',
    p.faq.map((f) => `Q: ${f.q}\nA: ${f.a}`).join('\n\n'),
    '',
    'SOURCES',
    p.sources.map((s) => `- ${s.label}: ${s.note}`).join('\n'),
  ]
    .filter(Boolean)
    .join('\n');
}

export function GET() {
  const text = [
    `${company.name} — full site content`,
    `${SITE_URL}`,
    `Generated from the site's own content module. Index version: ${SITE_URL}/llms.txt`,
    '',
    company.tagline,
    `${company.legal}. ${company.location}. Serves Malaysia and Singapore.`,
    `Contact: ${company.email}. Corrections: ${editorialPolicy.contact}.`,

    rule('PRODUCTS'),
    products.map(productBlock).join('\n\n'),

    rule('WEBSITE & INTEGRATIONS (SERVICE)'),
    `URL: ${SITE_URL}${webService.href}`,
    'A website build wired into the YiY operations layer. Three weeks, fixed scope,',
    'quoted as a flat project fee after a content session. No per-transaction charge',
    'and no percentage of sales. Domain, DNS, repository and hosting are in the',
    "customer's name from the first day of the build.",
    '',
    'What a build includes:',
    webService.build.map((b) => `- ${b.term}: ${b.detail}`).join('\n'),
    '',
    'What the site reads from YiY, and what it writes back:',
    webService.connections
      .map(
        (c) =>
          `- ${c.surface}\n  Reads: ${c.reads || 'nothing'}\n  Writes back: ${c.writes || 'nothing'}`,
      )
      .join('\n'),
    '',
    'Integration depth by platform, for businesses that already have a site:',
    webService.platforms.map((p) => `- ${p.name} (${p.depth}): ${p.body}`).join('\n'),
    '',
    'Stages:',
    webService.stages
      .map((s) => `- ${s.step} ${s.when}, ${s.title} (${s.owner}): ${s.body}`)
      .join('\n'),
    '',
    'Explicitly out of scope:',
    list(webService.limits),
    '',
    'Questions answered on this page:',
    webService.faqs.map((f) => `Q: ${f.q}\nA: ${f.a}`).join('\n\n'),

    rule('WHY YIY'),
    pillars.map((p) => `- ${p.title}: ${p.body}`).join('\n'),

    rule('HOW YIY COMPARES'),
    comparison
      .map(
        (c) =>
          `- ${c.option}\n  Cost: ${c.cost}\n  Time to value: ${c.speed}\n  Where it lands: ${c.verdict}`,
      )
      .join('\n'),

    rule('ROLLOUT'),
    rollout
      .map((r) => `- ${r.step} ${r.when}, ${r.title} (${r.owner}): ${r.body}`)
      .join('\n'),

    rule('FREQUENTLY ASKED QUESTIONS'),
    faqs.map((f) => `Q: ${f.q}\nA: ${f.a}`).join('\n\n'),

    rule('HOW THIS COMPANY WORKS'),
    values.map((v) => `- ${v.title}: ${v.body}`).join('\n'),

    rule('EDITORIAL POLICY'),
    editorialPolicy.summary,
    `Corrections: ${editorialPolicy.contact}`,

    rule('BLOG, IN FULL'),
    posts.map(postBlock).join('\n\n\n'),
  ].join('\n');

  return new Response(text, {
    headers: {
      'content-type': 'text/plain; charset=utf-8',
      'cache-control': 'public, max-age=3600',
    },
  });
}
