'use client';

import Image from 'next/image';
import Link from 'next/link';
import HeroFrame from '@/components/HeroFrame';
import { ClosingCta, Faq, SectionHead } from '@/components/Sections';
import { Parallax, Reveal, SplitWords } from '@/components/motion';
import { useLocale } from '@/lib/i18n';

/**
 * Body of /website. The route file keeps metadata and structured data.
 *
 * Each section is deliberately given a different treatment — spec rows, a
 * three-column table, a hairline grid, a numbered rail, a dark list — because
 * the page is one argument told six ways and six identical card grids would
 * flatten it.
 */
export default function WebsiteView() {
  const { t, content } = useLocale();
  const { webService: web } = content;

  return (
    <>
      {/* Hero -------------------------------------------------------------- */}
      <HeroFrame innerClassName="min-h-[32rem] md:min-h-[40rem]">
        <div className="absolute inset-0">
          <Image
            src={web.hero}
            alt=""
            fill
            priority
            sizes="100vw"
            className="scale-105 object-cover opacity-30"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink/60" />
        <div className="noise absolute inset-0" />

        <div className="shell relative flex min-h-[inherit] flex-col justify-end py-16 md:py-20">
          <Reveal>
            <span className="eyebrow text-white/45">
              <span className="h-px w-6 bg-white/30" />
              {t('web.eyebrow')}
            </span>
          </Reveal>

          <SplitWords
            as="h1"
            text={t('web.title')}
            stagger={34}
            className="display mt-6 block max-w-[19ch] text-[clamp(1.9rem,4.4vw,3.6rem)]"
          />

          <Reveal delay={220}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-white/60">
              {t('web.body')}
            </p>
          </Reveal>

          <Reveal delay={340} className="mt-9 flex flex-wrap gap-3">
            <Link href="/contact" className="btn bg-white text-ink hover:-translate-y-0.5">
              {t('web.cta')}
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
              {t('web.seeProducts')}
            </Link>
          </Reveal>
        </div>
      </HeroFrame>

      {/* Scope ------------------------------------------------------------- */}
      <section className="relative overflow-hidden bg-paper py-24 md:py-32">
        <div className="shell grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHead
              eyebrow={t('web.buildEyebrow')}
              title={t('web.buildTitle')}
              body={t('web.buildBody')}
            />

            <Reveal blur delay={180} className="mt-12 hidden lg:block">
              <Parallax speed={-30} className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={web.aside}
                  alt={t('web.asideAlt')}
                  fill
                  sizes="40vw"
                  className="object-cover"
                />
              </Parallax>
            </Reveal>
          </div>

          {/* Spec sheet: term left, detail right. Same rhythm as the careers
              page, because both are a contract being stated plainly. */}
          <dl>
            {web.build.map((row, i) => (
              <Reveal
                key={row.term}
                delay={i * 70}
                className="grid gap-1.5 border-t border-ink/[0.12] py-6 sm:grid-cols-[minmax(0,0.5fr)_minmax(0,1.6fr)] sm:gap-8"
              >
                <dt className="text-sm font-semibold tracking-tighter">{row.term}</dt>
                <dd className="text-sm leading-relaxed text-ink-mute">{row.detail}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* The wiring -------------------------------------------------------- */}
      <section className="relative overflow-hidden bg-ink py-24 text-white md:py-32">
        <div className="noise absolute inset-0" />

        <div className="shell relative">
          <SectionHead
            eyebrow={t('web.connectEyebrow')}
            title={t('web.connectTitle')}
            body={t('web.connectBody')}
            tone="dark"
          />

          <Reveal delay={120} className="mt-14 overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left">
              <thead>
                <tr className="border-b border-white/20">
                  {[t('web.headSurface'), t('web.headReads'), t('web.headWrites')].map((h) => (
                    <th
                      key={h}
                      scope="col"
                      className="pb-4 text-[11px] font-medium uppercase tracking-[0.16em] text-white/40"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {web.connections.map((row, i) => (
                  <tr
                    key={row.surface}
                    className="group border-b border-white/10 transition-colors duration-500 hover:bg-white/[0.04]"
                  >
                    <th scope="row" className="py-5 pr-6 align-top">
                      <span className="flex items-baseline gap-3">
                        <span className="font-mono text-[10px] tracking-[0.2em] text-white/30">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className="text-sm font-semibold tracking-tight">{row.surface}</span>
                      </span>
                    </th>
                    <td
                      className={`py-5 pr-6 align-top text-sm leading-relaxed ${
                        row.reads ? 'text-white/65' : 'text-white/25'
                      }`}
                    >
                      {row.reads ?? t('web.none')}
                    </td>
                    <td
                      className={`py-5 align-top text-sm leading-relaxed ${
                        row.writes ? 'text-white/65' : 'text-white/25'
                      }`}
                    >
                      {row.writes ?? t('web.none')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      {/* Existing sites ---------------------------------------------------- */}
      <section className="relative overflow-hidden bg-paper-warm py-24 md:py-32">
        <div className="shell">
          <SectionHead
            eyebrow={t('web.platformsEyebrow')}
            title={t('web.platformsTitle')}
            body={t('web.platformsBody')}
          />

          {/* Hairline grid: the gap-px parent draws the rules, the cells sit on
              paper-warm's lighter cousin so the seams read as a spec table. */}
          <Reveal delay={120} className="mt-14 grid gap-px bg-ink/10 sm:grid-cols-2">
            {web.platforms.map((p) => (
              <div key={p.name} className="bg-paper-warm p-8 md:p-10">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-lg font-semibold tracking-tighter">{p.name}</h3>
                  <span className="border border-ink/15 px-2 py-0.5 text-[9px] uppercase tracking-[0.16em] text-ink-mute">
                    {p.depth}
                  </span>
                </div>
                <p className="mt-4 max-w-[46ch] text-sm leading-relaxed text-ink-mute">{p.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Full-bleed band --------------------------------------------------
          A breath between the platform grid and the timeline, and the only
          place on the page a photograph runs edge to edge. The inner box is
          taller than the frame so there is something for the parallax to move
          without exposing an edge. */}
      <section className="relative h-[34vh] min-h-[13rem] overflow-hidden bg-ink md:h-[46vh]">
        <Parallax speed={52} className="absolute -bottom-16 -top-16 left-0 right-0">
          <Image
            src={web.band}
            alt={t('web.bandAlt')}
            fill
            sizes="100vw"
            className="object-cover"
          />
        </Parallax>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/45 to-transparent" />
      </section>

      {/* Stages ------------------------------------------------------------ */}
      <section className="relative overflow-hidden bg-paper py-24 md:py-32">
        <div className="shell">
          <SectionHead
            eyebrow={t('web.stagesEyebrow')}
            title={t('web.stagesTitle')}
            body={t('web.stagesBody')}
          />

          <ol className="mt-16 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
            {web.stages.map((s, i) => (
              <Reveal as="li" key={s.step} delay={i * 100} className="border-t border-ink/[0.12] pt-6">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="display text-[clamp(1.6rem,2.4vw,2.1rem)] text-ink-faint">
                    {s.step}
                  </span>
                  <span className="border border-ink/15 px-2 py-0.5 text-[9px] uppercase tracking-[0.16em] text-ink-mute">
                    {s.when}
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-semibold tracking-tighter">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-mute">{s.body}</p>
                <p className="mt-6 border-t border-ink/[0.12] pt-4 text-[11px] uppercase tracking-[0.14em] text-ink-faint">
                  {s.owner}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Limits ------------------------------------------------------------ */}
      <section className="relative overflow-hidden bg-ink py-20 text-white md:py-28">
        <div className="noise absolute inset-0" />

        <div className="shell relative grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHead
            eyebrow={t('web.limitsEyebrow')}
            title={t('web.limitsTitle')}
            body={t('web.limitsBody')}
            tone="dark"
          />

          <ul className="border-t border-white/15">
            {web.limits.map((item, i) => (
              <Reveal
                as="li"
                key={item}
                delay={i * 80}
                className="grid grid-cols-[auto_minmax(0,1fr)] items-baseline gap-5 border-b border-white/15 py-6"
              >
                <span className="font-mono text-[10px] tracking-[0.2em] text-white/30">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-sm leading-relaxed text-white/60">{item}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <Faq
        items={web.faqs}
        eyebrow={t('web.faqEyebrow')}
        title={t('web.faqTitle')}
        body={t('web.faqBody')}
      />

      <ClosingCta />
    </>
  );
}
