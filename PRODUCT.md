# PRODUCT.md

> Derived from the existing codebase (`src/lib/site.js`, `public/llms.txt`, the
> values and editorial-policy blocks) rather than from an interview. Correct
> anything that misreads the intent — this file steers future design work.

## Register

**brand** — this is a marketing site. The design is the product surface. Every
page exists to make an SME owner believe these people have actually sat down
with somebody else's operations spreadsheet open.

## Product purpose

BYIY Tech sells to small and medium businesses in Malaysia and Singapore that
are still running on spreadsheets:

- **Dashboards & Databases** — the core product. A real database designed
  around how the business records work, migrated out of its existing
  spreadsheets, with the dashboard laid out for that industry: retail,
  distribution, clinics, salons, tuition centres, property, e-commerce,
  multi-branch groups.
- **Website & Integrations** — a bespoke website build, wired into the same
  database. Sold as a project, not a seat.

A third, **Data & Intelligence**, is in limited beta and sits on top of
Dashboards & Databases. It is deliberately not sold standalone, because its
output is only as good as the database beneath it.

**Industries** (`/industries`, twelve pages) are not extra products. They are
the same database sold to one trade, and the page exists to prove we know what
that trade decides on a Monday. The pitch is that the schema and the first
screen change while the method does not, so every industry page carries the
same three blocks: what it runs on today, what the first screen opens on, and
the questions that trade actually asks. The list records where a layout already
exists, never where we are willing to work — say that on the page.

Pricing is flat monthly per outlet. No per-transaction charge, no implementation
fee, no annual lock-in. Typical rollout is two weeks.

## Users

Owner-operators and operations leads at businesses with 1–20 outlets. They are
not technical. They are running the business today on spreadsheets, WhatsApp
groups, a whiteboard behind reception, and memory. They have been burned by
either a toy app that broke at the second outlet or an ERP quote with a
consultant attached.

They read on a phone, often mid-shift. They are sceptical of software marketing
and can smell a slide deck through a screen.

## Tone

Blunt, concrete, load-bearing. Short declaratives. Numbers with their method
attached. The site says the unflattering thing on purpose:

- "The first honest report looks bad because it is the first honest
  measurement."
- "We lose money on fast-growing customers under this model."
- "If the estimate is four weeks we say four weeks now, before any money
  changes hands."

Specific physical detail over abstraction: a tab nobody remembers creating,
final_v2.xlsx, 5pm on a Friday. Never "solutions",
"empower", "seamless", "transform".

British spelling (utilisation, recognises, anonymised, centres). Ringgit for
worked examples.

## Strategic principles

1. **Honesty is the differentiator.** Every number carries its sample size,
   method and limits. There is a corrections address. Do not add a claim that
   cannot be sourced.
2. **One product, deeply.** Scope discipline is the pitch. The website build
   exists to extend the database, not to widen the catalogue. Never imply a
   feature that does not exist.
3. **Leaving is easy.** Full export, no exit fee. This is stated repeatedly and
   must stay true in the UI.
4. **Phone-first reality.** Staff use cheap Android handsets one-handed. Touch
   targets and legibility are not negotiable.

## Anti-references

- ERP vendor sites — enterprise stock photography, "digital transformation",
  gated PDFs, a demo request wall.
- Generic SaaS landing pages — gradient hero, three feature cards with pastel
  icons, a logo wall of fake customers, "Trusted by thousands".
- Anything with a chatbot that pretends to be a person. The assistant here is
  labelled "rule-based assistant" on purpose.
- Testimonials with invented headshots and full names. The current ones are
  role-attributed ("Operations lead, nine-outlet retail group") deliberately.

## Constraints

- No backend. The contact form hands off to `mailto:`. Say so honestly in the UI.
- No analytics, no cookies, no third-party scripts, no client storage. This is
  currently true and the privacy policy depends on it staying true.
- Self-hosted fonts only.
- Content is authored in `src/lib/site.js`. Copy changes happen there, not in
  components.
