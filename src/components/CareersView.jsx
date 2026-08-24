'use client';

import Image from 'next/image';
import HeroFrame from '@/components/HeroFrame';
import { ClosingCta, SectionHead } from '@/components/Sections';
import { Parallax, Reveal, SplitWords } from '@/components/motion';
import { useLocale } from '@/lib/i18n';

/** Body of /careers. The route file keeps metadata and structured data. */
export default function CareersView() {
  const { t, content } = useLocale();
  const { company, roles, values } = content;
  const perks = t('careers.perks');
  const mailto = (subject) => `mailto:${company.email}?subject=${encodeURIComponent(subject)}`;

  return (
    <>
      <HeroFrame>
        <div className="absolute inset-0">
          <Image
            src="/media/img/team-meeting.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="scale-105 object-cover opacity-30"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-ink/90 via-ink/80 to-ink" />
        <div className="noise absolute inset-0" />

        <div className="shell relative py-20 md:py-28">
          <Reveal>
            <span className="eyebrow text-white/45">
              <span className="h-px w-6 bg-white/30" />
              {t('careers.eyebrow')}
            </span>
          </Reveal>

          <SplitWords
            as="h1"
            text={t('careers.title')}
            stagger={38}
            className="display mt-6 block max-w-[17ch] text-[clamp(1.9rem,4vw,3.4rem)]"
          />

          <Reveal delay={220}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-white/60">
              {t('careers.body', { location: company.location })}
            </p>
          </Reveal>
        </div>
      </HeroFrame>

      {/* Values ---------------------------------------------------------- */}
      <section className="relative overflow-hidden bg-paper py-20 md:py-28">
        <div className="shell grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHead
              eyebrow={t('careers.valuesEyebrow')}
              title={t('careers.valuesTitle')}
              body={t('careers.valuesBody')}
            />
          </div>

          {/* Read as a manifesto, not a feature grid: display-weight titles,
              hairline rules, no boxes and no numbering. */}
          <div>
            {values.map((v, i) => (
              <Reveal
                key={v.title}
                delay={i * 90}
                className="border-t border-ink/[0.12] py-7 first:border-t-0 first:pt-0"
              >
                <h3 className="display text-[clamp(1.25rem,1.9vw,1.6rem)]">{v.title}</h3>
                <p className="mt-3 max-w-[52ch] text-sm leading-relaxed text-ink-mute">{v.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Open roles ------------------------------------------------------ */}
      <section id="roles" className="relative overflow-hidden bg-ink py-20 text-white md:py-28">
        <div className="shell">
          <SectionHead
            eyebrow={t('careers.rolesEyebrow')}
            title={t('careers.rolesTitle')}
            tone="dark"
          />

          {roles.length ? (
            <ul className="mt-14 border-t border-white/15">
              {roles.map((role, i) => (
                <Reveal
                  as="li"
                  key={role.slug}
                  delay={i * 90}
                  className="group border-b border-white/15"
                >
                  <div className="grid gap-6 py-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)_auto] lg:items-start">
                    <div>
                      <h3 className="text-xl font-semibold tracking-tighter">{role.title}</h3>
                      <p className="mt-3 flex flex-wrap items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-white/40">
                        <span className="border border-white/20 px-2 py-0.5">{role.team}</span>
                        <span className="border border-white/20 px-2 py-0.5">{role.type}</span>
                        <span>{role.location}</span>
                      </p>
                    </div>

                    <div>
                      <p className="text-sm leading-relaxed text-white/60">{role.blurb}</p>
                      <ul className="mt-4 space-y-2">
                        {role.wants.map((w) => (
                          <li key={w} className="flex gap-3 text-xs leading-relaxed text-white/45">
                            <span className="mt-[6px] h-1 w-1 shrink-0 bg-white/50" />
                            {w}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href={mailto(t('careers.applicationSubject', { role: role.title }))}
                      className="btn-invert shrink-0 self-start"
                    >
                      {t('careers.apply')}
                    </a>
                  </div>
                </Reveal>
              ))}
            </ul>
          ) : (
            <Reveal delay={140} className="mt-12 border border-white/15 p-10 md:p-14">
              <p className="max-w-2xl text-base leading-relaxed text-white/65">
                {t('careers.noRoles')}
              </p>
              <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/45">
                {t('careers.speculativeBefore')}{' '}
                <a
                  href={mailto(t('careers.speculativeSubject'))}
                  className="link-underline text-white/75"
                >
                  {company.email}
                </a>
                {t('careers.speculativeAfter')}
              </p>

              <a href={mailto(t('careers.notifyMe'))} className="btn-invert mt-9">
                {t('careers.notifyMe')}
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
                  <path
                    d="M9 1l4 4-4 4M13 5H1"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </Reveal>
          )}
        </div>
      </section>

      {/* Perks ----------------------------------------------------------- */}
      <section className="relative overflow-hidden bg-paper-warm py-20 md:py-28">
        <div className="shell grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          {/* Spec-sheet rows: term on the left, detail on the right. */}
          <dl>
            {perks.map((perk, i) => (
              <Reveal
                key={perk.title}
                delay={i * 80}
                className="grid gap-1.5 border-t border-ink/[0.12] py-5 sm:grid-cols-[minmax(0,0.75fr)_minmax(0,1.35fr)] sm:gap-8"
              >
                <dt className="text-sm font-semibold tracking-tighter">{perk.title}</dt>
                <dd className="text-sm leading-relaxed text-ink-mute">{perk.body}</dd>
              </Reveal>
            ))}
          </dl>

          <Reveal blur delay={160}>
            <Parallax speed={-32} className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/media/img/team-office.jpg"
                alt={t('careers.teamAlt')}
                fill
                sizes="(min-width: 1024px) 40vw, 92vw"
                className="object-cover"
              />
            </Parallax>
          </Reveal>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
