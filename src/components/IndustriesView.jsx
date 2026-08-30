'use client';

import Image from 'next/image';
import Link from '@/components/Link';
import BackgroundVideo from '@/components/BackgroundVideo';
import HeroFrame from '@/components/HeroFrame';
import { ClosingCta, SectionHead } from '@/components/Sections';
import { Reveal, SplitWords } from '@/components/motion';
import { useLocale } from '@/lib/i18n';

/**
 * Body of /industries: the index that the masthead panel and the homepage
 * carousel both point into.
 *
 * A grid rather than the carousel used on the homepage. The carousel is a
 * glance on the way past; this page is the one somebody lands on from a search
 * for their own trade, so every entry has to be readable without interaction.
 */
export default function IndustriesView() {
  const { t, content } = useLocale();
  const { industries } = content;
  // The first entry that has footage carries the hero. Today that is the
  // salon; if a better clip lands later, reordering the data is enough.
  const lead = industries.find((item) => item.video) ?? industries[0];

  return (
    <>
      <HeroFrame innerClassName="min-h-[30rem] md:min-h-[36rem]">
        <BackgroundVideo
          src={lead.video}
          poster={lead.poster || lead.hero}
          priority
          imageClassName="scale-105 opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink/40" />
        <div className="noise absolute inset-0" />

        <div className="shell relative flex min-h-[inherit] flex-col justify-end py-14 md:py-16">
          <Reveal className="flex items-center gap-4">
            <span className="eyebrow text-white/45">
              <span className="h-px w-6 bg-white/30" />
              {t('industryIndex.eyebrow')}
            </span>
          </Reveal>

          <SplitWords
            as="h1"
            text={t('industryIndex.title')}
            stagger={38}
            className="display mt-6 block max-w-[22ch] text-[clamp(1.9rem,3.8vw,3.25rem)]"
          />

          <Reveal delay={220}>
            <p className="mt-7 max-w-3xl text-base leading-relaxed text-white/65 md:text-lg">
              {t('industryIndex.body')}
            </p>
          </Reveal>

          <div className="mt-9 flex flex-wrap gap-3">
            <Reveal delay={340} className="reveal-pop">
              <Link href="/contact" className="btn bg-white text-ink hover:-translate-y-0.5">
                {t('common.walkthrough')}
              </Link>
            </Reveal>
            <Reveal delay={450} className="reveal-pop">
              <Link href="/products/dashboards" className="btn-invert">
                {t('common.seeProducts')}
              </Link>
            </Reveal>
          </div>
        </div>
      </HeroFrame>

      {/* The grid ------------------------------------------------------- */}
      <section className="relative overflow-hidden bg-paper py-24 md:py-32">
        <div className="shell relative">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((item, i) => (
              <Reveal key={item.slug} delay={(i % 3) * 90} blur>
                {/* Flex column so the CTA sits on the baseline of every card
                    regardless of how long the headline runs. */}
                <Link href={item.href} className="card group flex h-full flex-col">
                  <div className="relative aspect-[16/10] shrink-0 overflow-hidden">
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 31vw, (min-width: 640px) 46vw, 92vw"
                      className="object-cover transition-transform duration-[1400ms] ease-smooth group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/55 to-transparent" />
                    <p className="absolute inset-x-0 bottom-0 p-5 text-[10px] uppercase tracking-[0.18em] text-white/70">
                      {item.product}
                    </p>
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <h2 className="text-xl font-semibold tracking-tighter">{item.name}</h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-mute">
                      {item.headline}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 self-start border-b border-ink pb-1 text-sm font-medium">
                      {t('industryIndex.cardCta')}
                      <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
                        <path
                          d="M9 1l4 4-4 4M13 5H1"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Not on the list ------------------------------------------------
          Said plainly rather than hidden in the FAQ: the list is where we have
          built a layout, not where we are willing to work. */}
      <section className="relative overflow-hidden bg-ink py-20 text-white md:py-28">
        <div className="noise absolute inset-0" />
        <div className="shell relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHead
            eyebrow={t('industryIndex.eyebrow')}
            title={t('industryIndex.notListed')}
            tone="dark"
          />
          <Reveal delay={140}>
            <p className="max-w-[58ch] text-base leading-relaxed text-white/60">
              {t('industryIndex.notListedBody')}
            </p>
            <Link href="/contact" className="btn-invert mt-8">
              {t('common.walkthrough')}
            </Link>
          </Reveal>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
