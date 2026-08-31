'use client';

import Image from 'next/image';
import Link from '@/components/Link';
import BackgroundVideo from '@/components/BackgroundVideo';
import HeroFrame from '@/components/HeroFrame';
import { ClosingCta, Faq, Process, SectionHead } from '@/components/Sections';
import { Parallax, Reveal, SplitWords } from '@/components/motion';
import { bySlug } from '@/lib/content';
import { useLocale } from '@/lib/i18n';

/**
 * Body of /industries/[slug].
 *
 * Deliberately a different shape from the product page: a product page argues
 * that you should leave spreadsheets, and this one assumes you already agree
 * and asks whether we understand your trade. So it opens on what the day
 * currently looks like (`pains`) before it shows a single panel.
 */
export default function IndustryView({ slug }) {
  const { t, content } = useLocale();
  const item = bySlug(content.industries, slug);
  if (!item) return null;

  const others = content.industries.filter((x) => x.slug !== item.slug).slice(0, 3);

  return (
    <>
      {/* Hero ---------------------------------------------------------- */}
      <HeroFrame innerClassName="min-h-[34rem] md:min-h-[42rem]">
        {/* Poster paints first and is what LCP measures; the clip fades in
            behind it once it has frames. Industries with no footage of their
            own render the still alone. */}
        <BackgroundVideo
          src={item.video}
          poster={item.poster || item.hero}
          priority
          imageClassName={`scale-105 ${item.video ? 'opacity-45' : 'opacity-40'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink/40" />
        <div className="noise absolute inset-0" />

        <div className="shell relative flex min-h-[inherit] flex-col justify-end py-14 md:py-16">
          <Reveal className="flex items-center gap-4">
            <Link
              href="/industries"
              className="text-xs uppercase tracking-[0.16em] text-white/45 transition-colors hover:text-white"
            >
              {t('common.industries')}
            </Link>
            <span className="h-px w-8 bg-white/25" />
            <span className="rounded-full border border-white/20 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-white/60">
              {item.product}
            </span>
          </Reveal>

          <Reveal delay={80} className="mt-8">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-white/45">
              {item.name}
            </p>
          </Reveal>

          <SplitWords
            as="h1"
            text={item.headline}
            stagger={38}
            className="display mt-5 block max-w-[24ch] text-[clamp(1.8rem,3.6vw,3.15rem)]"
          />

          <Reveal delay={220}>
            <p className="mt-7 max-w-3xl text-base leading-relaxed text-white/65 md:text-lg">
              {item.summary}
            </p>
          </Reveal>

          <div className="mt-9 flex flex-wrap gap-3">
            <Reveal delay={340} className="reveal-pop">
              <Link href="/contact" className="btn bg-white text-ink hover:-translate-y-0.5">
                {t('common.walkthrough')}
              </Link>
            </Reveal>
            <Reveal delay={450} className="reveal-pop">
              <Link href="/industries" className="btn-invert">
                {t('common.allIndustries')}
              </Link>
            </Reveal>
          </div>
        </div>
      </HeroFrame>

      {/* What it replaces ----------------------------------------------
          A dark numbered list, because this is the uncomfortable half and it
          should not be dressed up as a feature grid. */}
      <section className="relative overflow-hidden bg-ink py-20 text-white md:py-28">
        <div className="noise absolute inset-0" />
        <div className="shell relative grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHead
            eyebrow={t('industry.painsEyebrow')}
            title={t('industry.painsTitle')}
            body={t('industry.painsBody')}
            tone="dark"
          />

          <ul className="border-t border-white/15">
            {item.pains.map((pain, i) => (
              <Reveal
                as="li"
                key={pain}
                delay={i * 80}
                className="grid grid-cols-[auto_minmax(0,1fr)] items-baseline gap-5 border-b border-white/15 py-6"
              >
                <span className="font-mono text-[10px] tracking-[0.2em] text-white/30">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-sm leading-relaxed text-white/60">{pain}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* The first screen ---------------------------------------------- */}
      <section className="relative overflow-hidden bg-paper py-24 md:py-32">
        <div className="shell relative grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <SectionHead
              eyebrow={t('industry.panelsEyebrow')}
              title={t('industry.panelsTitle')}
              body={t('industry.panelsBody')}
            />

            <ol className="mt-12 border-t border-ink/[0.12]">
              {item.panels.map((panel, i) => (
                <Reveal
                  as="li"
                  key={panel.title}
                  delay={i * 80}
                  className="grid grid-cols-[auto_minmax(0,1fr)] gap-6 border-b border-ink/[0.12] py-7"
                >
                  <span className="display text-[clamp(1.4rem,2.2vw,1.9rem)] leading-none text-ink-faint">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tighter">{panel.title}</h3>
                    <p className="mt-2.5 max-w-[52ch] text-sm leading-relaxed text-ink-mute">
                      {panel.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>

          <Reveal blur delay={140} className="lg:sticky lg:top-28">
            <Parallax speed={-32} className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <Image
                src={item.hero}
                alt={t('industry.heroAlt', { name: item.name.toLowerCase() })}
                fill
                sizes="(min-width: 1024px) 44vw, 92vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/45 to-transparent" />
            </Parallax>
          </Reveal>
        </div>
      </section>

      {/* The rollout is the same for every industry, which is the point. */}
      <Process />

      {/* Other industries ----------------------------------------------- */}
      <section className="relative overflow-hidden bg-paper-warm py-24 md:py-32">
        <div className="shell">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <SectionHead
              eyebrow={t('industry.crossEyebrow')}
              title={t('industry.crossTitle')}
            />
            <Reveal delay={120}>
              <Link
                href="/industries"
                className="inline-flex items-center gap-2 border-b border-ink pb-1 text-sm font-medium"
              >
                {t('common.allIndustries')}
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
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {others.map((other, i) => (
              <Reveal key={other.slug} delay={i * 110}>
                <Link href={other.href} className="card group block h-full">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={other.image}
                      alt=""
                      fill
                      sizes="(min-width: 768px) 31vw, 92vw"
                      className="object-cover transition-transform duration-[1400ms] ease-smooth group-hover:scale-105"
                    />
                  </div>
                  <div className="p-7">
                    <span className="rounded-full border border-ink/15 px-2.5 py-0.5 text-[9px] uppercase tracking-[0.16em] text-ink-mute">
                      {other.product}
                    </span>
                    <h3 className="mt-4 text-xl font-semibold tracking-tighter">{other.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-mute">{other.headline}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Faq
        items={item.faqs}
        eyebrow={t('industry.faqEyebrow')}
        title={t('industry.faqTitle')}
        body={t('industry.faqBody')}
      />
      <ClosingCta />
    </>
  );
}
