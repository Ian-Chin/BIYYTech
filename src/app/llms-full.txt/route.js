import { SITE_URL } from '@/lib/seo';
import {
  company,
  comparison,
  editorialPolicy,
  faqs,
  industries,
  pillars,
  posts,
  products,
  rollout,
  values,
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

    /* Only the website product carries the blocks below. They are the answers
       people ask for by name, so they belong in the corpus rather than only in
       the rendered page. */
    p.value
      ? `\nWhat it changes for the customer:\n${p.value
          .map((v) => `- ${v.title}: ${v.body}`)
          .join('\n')}`
      : null,
    p.connections
      ? `\nWhat the site reads from BIYY, and what it writes back:\n${p.connections
          .map(
            (c) =>
              `- ${c.surface}\n  Reads: ${c.reads || 'nothing'}\n  Writes back: ${c.writes || 'nothing'}`,
          )
          .join('\n')}`
      : null,
    p.platforms
      ? `\nIntegration depth by platform, for businesses that already have a site:\n${p.platforms
          .map((x) => `- ${x.name} (${x.depth}): ${x.body}`)
          .join('\n')}`
      : null,
    p.stages
      ? `\nStages:\n${p.stages
          .map((s) => `- ${s.step} ${s.when}, ${s.title} (${s.owner}): ${s.body}`)
          .join('\n')}`
      : null,
    p.limits ? `\nExplicitly out of scope:\n${list(p.limits)}` : null,
    p.faqs
      ? `\nQuestions answered on this page:\n${p.faqs.map((f) => `Q: ${f.q}\nA: ${f.a}`).join('\n\n')}`
      : null,
  ]
    .filter((line) => line !== null)
    .join('\n');
}

/* One industry page. The same database sold to one trade, so the block leads
   with what that trade runs on today and what its first screen answers. */
function industryBlock(item) {
  return [
    sub(`${item.name} — ${item.product}`),
    `URL: ${SITE_URL}${item.href}`,
    `Positioning: ${item.headline}`,
    '',
    item.summary,
    '',
    'What it usually replaces:',
    list(item.pains),
    '',
    'What the dashboard opens on:',
    item.panels.map((panel) => `- ${panel.title}: ${panel.body}`).join('\n'),
    '',
    'Questions answered on this page:',
    item.faqs.map((f) => `Q: ${f.q}\nA: ${f.a}`).join('\n\n'),
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

    rule('INDUSTRIES'),
    'The database and the rollout are identical across these. What changes is the first screen of the dashboard, because the weekly decisions differ by trade and those decisions need different underlying tables rather than different charts. An industry without a page below is a walkthrough rather than a refusal.',
    industries.map(industryBlock).join('\n\n'),

    rule('WHY BIYY'),
    pillars.map((p) => `- ${p.title}: ${p.body}`).join('\n'),

    rule('HOW BIYY COMPARES'),
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
