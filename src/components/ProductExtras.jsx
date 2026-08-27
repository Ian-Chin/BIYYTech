'use client';

import Image from 'next/image';
import { SectionHead } from '@/components/Sections';
import { Parallax, Reveal } from '@/components/motion';
import { useLocale } from '@/lib/i18n';

/**
 * The sections a product only gets if it carries the data for them.
 *
 * Website & Integrations is the one that does: it is sold as a project rather
 * than a seat, so the questions it gets asked (what does the site read, how
 * deep can you go on Shopify, what will you not do) have no equivalent on
 * Inventory or Booking. Each block below returns null when its field is
 * missing, so the other products render the standard page and nothing else.
 *
 * Each section is deliberately given a different treatment — a three-column
 * table, a hairline grid, a numbered rail, a dark list — because this is one
 * argument told four ways and four identical card grids would flatten it.
 */
export default function ProductExtras({ product }) {
  const { t } = useLocale();
  const { value, connections, platforms, stages, limits, band } = product;

  if (!value && !connections && !platforms && !stages && !limits) return null;

  return (
    <>
      {/* What it is worth --------------------------------------------------
          Oversized numerals carrying the text rather than boxing it: this is
          the argument for buying, and a grid of bordered cards would file it
          alongside the spec tables further down. */}
      {value ? (
        <section className="relative overflow-hidden bg-paper py-24 md:py-32">
          <div className="shell">
            <SectionHead
              eyebrow={t('web.valueEyebrow')}
              title={t('web.valueTitle')}
              body={t('web.valueBody')}
            />

            <ol className="mt-16 grid gap-x-14 gap-y-10 lg:grid-cols-2">
              {value.map((item, i) => (
                <Reveal
                  as="li"
                  key={item.title}
                  delay={i * 80}
                  className="grid grid-cols-[auto_minmax(0,1fr)] gap-6 border-t border-ink/[0.12] pt-6"
                >
                  <span className="display text-[clamp(1.6rem,2.4vw,2.1rem)] leading-none text-ink-faint">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tighter">{item.title}</h3>
                    <p className="mt-3 max-w-[52ch] text-sm leading-relaxed text-ink-mute">
                      {item.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>
      ) : null}

      {/* The wiring -------------------------------------------------------- */}
      {connections ? (
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
                  {connections.map((row, i) => (
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
      ) : null}

      {/* Existing sites ---------------------------------------------------- */}
      {platforms ? (
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
              {platforms.map((p) => (
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
      ) : null}

      {/* Full-bleed band --------------------------------------------------
          A breath between the platform grid and the timeline, and the only
          place on the page a photograph runs edge to edge. The inner box is
          taller than the frame so there is something for the parallax to move
          without exposing an edge. */}
      {band ? (
        <section className="relative h-[34vh] min-h-[13rem] overflow-hidden bg-ink md:h-[46vh]">
          <Parallax speed={52} className="absolute -bottom-16 -top-16 left-0 right-0">
            <Image src={band} alt={t('web.bandAlt')} fill sizes="100vw" className="object-cover" />
          </Parallax>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/45 to-transparent" />
        </section>
      ) : null}

      {/* Stages ------------------------------------------------------------
          Replaces the shared two-week Process section rather than sitting
          beside it: a build runs three weeks on its own timeline. */}
      {stages ? (
        <section className="relative overflow-hidden bg-paper py-24 md:py-32">
          <div className="shell">
            <SectionHead
              eyebrow={t('web.stagesEyebrow')}
              title={t('web.stagesTitle')}
              body={t('web.stagesBody')}
            />

            <ol className="mt-16 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
              {stages.map((s, i) => (
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
      ) : null}

      {/* Limits ------------------------------------------------------------ */}
      {limits ? (
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
              {limits.map((item, i) => (
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
      ) : null}
    </>
  );
}
