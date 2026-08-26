'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import BackgroundVideo from '@/components/BackgroundVideo';
import Carousel from '@/components/Carousel';
import { Mark } from '@/components/Logo';
import { CountUp, Parallax, Reveal, SplitWords, onScrollFrame } from '@/components/motion';
import { bySlug } from '@/lib/content';
import { useLocale } from '@/lib/i18n';

/* -------------------------------------------------------------------------- */
/*  Section heading                                                           */
/* -------------------------------------------------------------------------- */

export function SectionHead({ eyebrow, title, body, align = 'left', tone = 'light' }) {
  const dark = tone === 'dark';
  const centred = align === 'center';

  return (
    <div className={centred ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'}>
      <Reveal className={centred ? 'flex justify-center' : undefined}>
        <span className={`eyebrow ${dark ? 'text-white/45' : ''}`}>
          <span className={`h-px w-6 ${dark ? 'bg-white/30' : 'bg-ink/25'}`} />
          {eyebrow}
        </span>
      </Reveal>
      <SplitWords
        as="h2"
        text={title}
        stagger={34}
        className="display mt-5 block text-[clamp(1.9rem,4.2vw,3.25rem)]"
      />
      {body ? (
        <Reveal delay={140}>
          <p
            className={`mt-5 text-base leading-relaxed ${
              dark ? 'text-white/55' : 'text-ink-mute'
            }`}
          >
            {body}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Home products intro                                                       */
/* -------------------------------------------------------------------------- */

export function ProductsIntro() {
  const { t } = useLocale();

  return (
    <section id="products" className="relative bg-paper pt-24 md:pt-32">
      <div className="shell">
        <SectionHead
          align="center"
          eyebrow={t('home.productsEyebrow')}
          title={t('home.productsTitle')}
          body={t('home.productsBody')}
        />
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Stats band                                                                */
/* -------------------------------------------------------------------------- */

export function StatsBand() {
  const { t, content } = useLocale();
  const { stats } = content;

  return (
    <section id="results" className="relative overflow-hidden bg-ink py-20 text-white md:py-24">
      <Parallax speed={70} className="pointer-events-none absolute -right-24 -top-24 opacity-[0.06]">
        <Mark variant="dark" size={420} />
      </Parallax>

      <div className="shell relative">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 110}>
              <div className="border-t border-white/15 pt-6">
                <p className="display text-[clamp(2.6rem,5vw,4rem)]">
                  <CountUp value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-3 max-w-[22ch] text-sm leading-relaxed text-white/50">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={520}>
          <p className="mt-12 max-w-2xl text-xs leading-relaxed text-white/30">
            {t('stats.note')}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Why YiY pillar grid                                                     */
/* -------------------------------------------------------------------------- */

export function Pillars() {
  const { t, content } = useLocale();
  const { pillars } = content;

  return (
    <section id="why" className="relative overflow-hidden bg-paper-warm py-24 md:py-32">
      <div className="shell relative">
        <SectionHead
          eyebrow={t('pillars.eyebrow')}
          title={t('pillars.title')}
          body={t('pillars.body')}
        />

        {/* Numbered editorial list, not a card grid. Six boxes of identical
            weight said nothing about which of these matters most; hairlines and
            a large numeral give the eye somewhere to start. */}
        <div className="mt-16 grid md:grid-cols-2 md:gap-x-16">
          {pillars.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 70}
              className="group grid grid-cols-[auto_minmax(0,1fr)] items-baseline gap-6 border-t border-ink/[0.12] py-7"
            >
              <span className="display text-[clamp(1.5rem,2.2vw,2rem)] text-ink-faint transition-colors duration-700 ease-smooth group-hover:text-ink">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span>
                <h3 className="text-lg font-semibold tracking-tighter">{p.title}</h3>
                <p className="mt-2.5 max-w-[46ch] text-sm leading-relaxed text-ink-mute">
                  {p.body}
                </p>
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Industries carousel                                                       */
/* -------------------------------------------------------------------------- */

export function Industries() {
  const { t, content } = useLocale();
  const { industries } = content;

  return (
    <section className="relative overflow-hidden bg-paper py-24 md:py-32">
      <div className="shell relative">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHead
            eyebrow={t('industries.eyebrow')}
            title={t('industries.title')}
            body={t('industries.body')}
          />
        </div>

        <Carousel
          ariaLabel={t('industries.carouselLabel')}
          autoplay={4200}
          className="mt-14"
          trackClassName="px-1"
        >
          {industries.map((item) => (
            <div
              key={item.name}
              className="snap-item group relative aspect-[3/4] w-[74vw] shrink-0 overflow-hidden rounded-2xl sm:w-[46vw] lg:w-[300px]"
            >
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="(min-width: 1024px) 300px, 74vw"
                className="object-cover transition-transform duration-[1400ms] ease-smooth group-hover:scale-[1.07]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent opacity-85" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <p className="text-[10px] uppercase tracking-[0.18em] text-white/50">
                  {item.product}
                </p>
                <p className="mt-2 text-lg font-semibold tracking-tighter">{item.name}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Feature strip, sticky scroll storytelling                                */
/* -------------------------------------------------------------------------- */

export function FeatureStrip({ slug, tone = 'light' }) {
  const { t, content } = useLocale();
  const product = bySlug(content.products, slug);
  const dark = tone === 'dark';
  // The first capability carries the section; the other three support it. A
  // 2x2 grid of equal cards claimed they all mattered the same amount.
  const [lead, ...rest] = product?.features ?? [];
  if (!lead) return null;
  const shell = dark ? 'border-white/10 bg-white/[0.03]' : 'border-ink/10 bg-white';
  const body = dark ? 'text-white/55' : 'text-ink-mute';
  const index = dark ? 'text-white/35' : 'text-ink-faint';

  return (
    <section
      className={`relative overflow-hidden py-24 md:py-32 ${dark ? 'bg-ink text-white' : 'bg-paper-warm'}`}
    >
      <div className="shell relative">
        <SectionHead
          eyebrow={t('features.eyebrow', { name: product.short })}
          title={t('features.title')}
          tone={tone}
        />

        {/* Lead capability, full width and side by side. */}
        <Reveal blur className="mt-16">
          <div
            className={`group grid overflow-hidden rounded-2xl border lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] ${shell} transition-all duration-700 ease-smooth hover:-translate-y-1`}
          >
            <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:min-h-[22rem]">
              <Image
                src={lead.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 52vw, 92vw"
                className="object-cover transition-transform duration-[1400ms] ease-smooth group-hover:scale-105"
              />
              <div
                className={`absolute inset-0 ${
                  dark
                    ? 'bg-gradient-to-t from-ink/70 to-transparent'
                    : 'bg-gradient-to-t from-white/25 to-transparent'
                }`}
              />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-11">
              <span className={`font-mono text-[10px] tracking-[0.2em] ${index}`}>01</span>
              <h3 className="display mt-5 text-[clamp(1.35rem,2.2vw,1.9rem)]">{lead.title}</h3>
              <p className={`mt-4 max-w-[42ch] text-base leading-relaxed ${body}`}>{lead.body}</p>
            </div>
          </div>
        </Reveal>

        {/* The supporting cards, lighter and narrower. Three sit in a row; four
            fall back to 2x2 rather than leaving an orphan on the second row. */}
        <div
          className={`mt-6 grid gap-6 sm:grid-cols-2 ${
            rest.length === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-2'
          }`}
        >
          {rest.map((f, i) => (
            <Reveal key={f.title} delay={i * 90} blur>
              <div
                className={`group h-full overflow-hidden rounded-2xl border ${shell} transition-all duration-700 ease-smooth hover:-translate-y-1`}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={f.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 46vw, 92vw"
                    className="object-cover transition-transform duration-[1400ms] ease-smooth group-hover:scale-105"
                  />
                  <div
                    className={`absolute inset-0 ${
                      dark
                        ? 'bg-gradient-to-t from-ink/80 to-transparent'
                        : 'bg-gradient-to-t from-white/25 to-transparent'
                    }`}
                  />
                </div>
                <div className="p-7">
                  <span className={`font-mono text-[10px] tracking-[0.2em] ${index}`}>
                    {String(i + 2).padStart(2, '0')}
                  </span>
                  <h3 className="mt-4 text-base font-semibold tracking-tighter">{f.title}</h3>
                  <p className={`mt-2.5 text-sm leading-relaxed ${body}`}>{f.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Testimonials                                                              */
/* -------------------------------------------------------------------------- */

export function Testimonials() {
  const { t, content } = useLocale();
  const { testimonials } = content;

  return (
    <section className="relative overflow-hidden bg-ink py-24 text-white md:py-32">
      <div className="shell relative">
        <SectionHead
          eyebrow={t('testimonials.eyebrow')}
          title={t('testimonials.title')}
          tone="dark"
        />

        <Carousel
          ariaLabel={t('testimonials.carouselLabel')}
          autoplay={6500}
          tone="dark"
          className="mt-14"
        >
          {testimonials.map((t) => (
            <figure
              key={t.quote}
              className="snap-item flex w-[86vw] shrink-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] md:w-[560px] md:flex-row"
            >
              <div className="relative h-48 shrink-0 md:h-auto md:w-44">
                <Image
                  src={t.image}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 176px, 86vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-ink/25" />
              </div>
              <div className="flex flex-1 flex-col justify-between p-7">
                <blockquote className="text-[15px] leading-relaxed text-white/80">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 border-t border-white/10 pt-4">
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="mt-0.5 text-xs text-white/45">{t.role}</p>
                </figcaption>
              </div>
            </figure>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Comparison                                                                */
/* -------------------------------------------------------------------------- */

export function Comparison() {
  const { t, content } = useLocale();
  const { comparison } = content;

  return (
    <section className="relative overflow-hidden bg-paper py-24 md:py-32">
      <div className="shell relative">
        <SectionHead eyebrow={t('comparison.eyebrow')} title={t('comparison.title')} />

        <Reveal delay={120} className="mt-14 overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse text-left">
            <thead>
              <tr className="border-b border-ink/15">
                {[
                  t('comparison.headApproach'),
                  t('comparison.headCost'),
                  t('comparison.headSpeed'),
                  t('comparison.headVerdict'),
                ].map((h) => (
                  <th
                    key={h}
                    scope="col"
                    className="pb-4 text-[11px] font-medium uppercase tracking-[0.16em] text-ink-faint"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparison.map((row) => (
                <tr
                  key={row.option}
                  className={`border-b border-ink/10 transition-colors duration-500 ${
                    row.highlight ? 'bg-ink text-white' : 'hover:bg-paper-warm'
                  }`}
                >
                  <th
                    scope="row"
                    className={`py-5 pr-6 align-top text-sm font-semibold tracking-tight ${
                      row.highlight ? 'pl-5' : ''
                    }`}
                  >
                    {row.option}
                  </th>
                  <td
                    className={`py-5 pr-6 align-top text-sm ${
                      row.highlight ? 'text-white/70' : 'text-ink-mute'
                    }`}
                  >
                    {row.cost}
                  </td>
                  <td
                    className={`py-5 pr-6 align-top text-sm ${
                      row.highlight ? 'text-white/70' : 'text-ink-mute'
                    }`}
                  >
                    {row.speed}
                  </td>
                  <td
                    className={`py-5 align-top text-sm ${
                      row.highlight ? 'pr-5 text-white/70' : 'text-ink-mute'
                    }`}
                  >
                    {row.verdict}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Rollout process                                                           */
/* -------------------------------------------------------------------------- */

export function Process() {
  const { t, content } = useLocale();
  const { rollout } = content;
  const [step, setStep] = useState(0);
  const railRef = useRef(null);

  // The rail fills as the section crosses the viewport.
  useEffect(() => {
    const node = railRef.current;
    if (!node) return undefined;
    return onScrollFrame((vh) => {
      const rect = node.getBoundingClientRect();
      const p = Math.max(0, Math.min(1, (vh * 0.78 - rect.top) / (rect.height || 1)));
      node.style.setProperty('--fill', `${(p * 100).toFixed(2)}%`);
    });
  }, []);

  return (
    <section id="process" className="relative overflow-hidden bg-ink py-24 text-white md:py-32">
      <div className="shell relative">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHead
            eyebrow={t('process.eyebrow')}
            title={t('process.title')}
            body={t('process.body')}
            tone="dark"
          />

          <Reveal delay={200} className="shrink-0">
            <div className="flex items-baseline gap-3 border border-white/15 px-6 py-4">
              <span className="display text-4xl">14</span>
              <span className="max-w-[12ch] text-xs leading-tight text-white/45">
                {t('process.badge')}
              </span>
            </div>
          </Reveal>
        </div>

        {/* Scroll-filled rail */}
        <div
          ref={railRef}
          className="relative mt-16 h-px w-full bg-white/15"
          style={{ ['--fill']: '0%' }}
          aria-hidden="true"
        >
          <span
            className="absolute inset-y-0 left-0 bg-white transition-[width] duration-300 ease-out"
            style={{ width: 'var(--fill)' }}
          />
        </div>

        <ol className="grid gap-px bg-white/[0.12] md:grid-cols-2 lg:grid-cols-4">
          {rollout.map((p, i) => {
            const on = step === i;
            return (
              <Reveal
                as="li"
                key={p.step}
                delay={i * 110}
                // Hover only, and deliberately so: the ghost image is pure
                // decoration and every card reads completely without it. The
                // onFocus that used to sit here could never fire, because
                // nothing inside the <li> is focusable.
                onMouseEnter={() => setStep(i)}
                className="group relative cursor-default overflow-hidden bg-ink p-7"
              >
                {/* Ghost image + wash that surface on hover */}
                <span
                  className={`pointer-events-none absolute inset-0 transition-opacity duration-700 ease-smooth ${
                    on ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <Image
                    src={p.image}
                    alt=""
                    fill
                    sizes="25vw"
                    className="scale-105 object-cover opacity-[0.18] transition-transform duration-[1600ms] ease-smooth group-hover:scale-110"
                  />
                  <span className="absolute inset-0 bg-white/[0.05]" />
                </span>

                <span className="relative flex items-center justify-between">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-white/40">
                    {p.step}
                  </span>
                  <span className="border border-white/15 px-2 py-0.5 text-[9px] uppercase tracking-[0.16em] text-white/50">
                    {p.when}
                  </span>
                </span>

                <span
                  className={`relative mt-6 block h-2 w-2 transition-all duration-700 ease-smooth ${
                    on ? 'scale-150 bg-white' : 'bg-white/35'
                  }`}
                />

                <h3 className="relative mt-6 text-lg font-semibold tracking-tighter">{p.title}</h3>
                <p className="relative mt-3 text-sm leading-relaxed text-white/55">{p.body}</p>
                <p className="relative mt-6 border-t border-white/10 pt-4 text-[11px] uppercase tracking-[0.14em] text-white/35">
                  {p.owner}
                </p>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  FAQ                                                                       */
/* -------------------------------------------------------------------------- */

/**
 * Defaults to the site-wide questions. A page with its own set (the website
 * service, which is asked entirely different things) passes `items` and its own
 * heading rather than forking the accordion.
 */
export function Faq({ items, eyebrow, title, body }) {
  const { t, content } = useLocale();
  const faqs = items ?? content.faqs;
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="relative overflow-hidden bg-paper py-24 md:py-32">
      <div className="shell relative grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <SectionHead
          eyebrow={eyebrow ?? t('faq.eyebrow')}
          title={title ?? t('faq.title')}
          body={body ?? t('faq.body')}
        />

        <div className="border-t border-ink/[0.12]">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={i * 60} className="border-b border-ink/[0.12]">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="group flex w-full items-start justify-between gap-6 py-6 text-left"
                >
                  <span
                    className={`text-base font-medium tracking-tight transition-colors duration-500 ${
                      isOpen ? 'text-ink' : 'text-ink-soft group-hover:text-ink'
                    }`}
                  >
                    {item.q}
                  </span>
                  <span className="relative mt-1.5 block h-3 w-3 shrink-0">
                    <span className="absolute left-0 top-1/2 h-px w-3 -translate-y-1/2 bg-ink" />
                    <span
                      className={`absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 bg-ink transition-transform duration-500 ease-smooth ${
                        isOpen ? 'scale-y-0' : 'scale-y-100'
                      }`}
                    />
                  </span>
                </button>
                <div
                  className="grid transition-all duration-700 ease-smooth"
                  style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                >
                  <div className="overflow-hidden">
                    <p className="pb-7 pr-10 text-sm leading-relaxed text-ink-mute">{item.a}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Closing CTA                                                               */
/* -------------------------------------------------------------------------- */

export function ClosingCta() {
  const { t } = useLocale();

  return (
    <section className="relative isolate overflow-hidden bg-ink text-white">
      {/* Below the fold on every page, so the clip only loads if you get here. */}
      <BackgroundVideo
        src="/media/video/warehouse-work.mp4"
        poster="/media/img/inventory-aisle.jpg"
        imageClassName="opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/80 to-ink" />
      <div className="noise absolute inset-0" />

      <div className="shell relative py-28 text-center md:py-36">
        <Reveal className="mx-auto">
          <Parallax speed={-26} className="mx-auto w-fit">
            <Mark variant="dark" size={64} className="opacity-80" />
          </Parallax>
        </Reveal>

        <SplitWords
          as="h2"
          text={t('cta.title')}
          stagger={34}
          className="display mx-auto mt-8 block max-w-[18ch] text-[clamp(2.1rem,5.4vw,4.25rem)]"
        />

        <Reveal delay={280}>
          <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-white/55">
            {t('cta.body')}
          </p>
        </Reveal>

        <Reveal delay={400} className="mt-10 flex flex-wrap justify-center gap-3">
          <Link href="/contact" className="btn bg-white text-ink hover:-translate-y-0.5">
            {t('common.walkthrough')}
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
              <path
                d="M9 1l4 4-4 4M13 5H1"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <Link href="/#products" className="btn-invert">
            {t('common.compareProducts')}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
