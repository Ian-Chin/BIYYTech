import Image from 'next/image';
import Link from 'next/link';
import HeroFrame from '@/components/HeroFrame';
import JsonLd from '@/components/JsonLd';
import { ClosingCta, SectionHead } from '@/components/Sections';
import { Parallax, Reveal, SplitWords } from '@/components/motion';
import { breadcrumbLd, graph, pageMeta } from '@/lib/seo';
import { company, roles, values } from '@/lib/site';

export const metadata = pageMeta({
  title: 'Careers',
  description:
    'How the YiY Tech team works, and how to reach us about future roles. No vacancies are open at the moment.',
  path: '/careers',
});

const perks = [
  {
    title: 'Four-day onboarding',
    body: 'Your first week is spent in customer warehouses and front desks, not in a wiki.',
  },
  {
    title: 'Ship in week one',
    body: 'Everyone merges something a customer touches inside their first fortnight.',
  },
  {
    title: 'Hardware you choose',
    body: 'Pick the machine and the phone. We buy the cheap Android too, because customers use those.',
  },
  {
    title: 'Honest hours',
    body: 'No launch-week heroics. Rollouts are planned so nobody has to sleep under a desk.',
  },
];

export default function CareersPage() {
  return (
    <>
      <JsonLd
        data={graph(
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: 'Careers', path: '/careers' },
          ]),
        )}
      />

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
              Careers
            </span>
          </Reveal>

          <SplitWords
            as="h1"
            text="Build the software that runs the shop."
            stagger={38}
            className="display mt-6 block max-w-[17ch] text-[clamp(1.9rem,4vw,3.4rem)]"
          />

          <Reveal delay={220}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-white/60">
              A small team in {company.location}, building two products that small
              businesses depend on every trading day. If the phrase &ldquo;the count is
              wrong again&rdquo; makes you want to fix something, we should talk.
            </p>
          </Reveal>
        </div>
      </HeroFrame>

      {/* Values ---------------------------------------------------------- */}
      <section className="relative overflow-hidden bg-paper py-20 md:py-28">
        <div className="shell grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHead
              eyebrow="How we work"
              title="Four things we actually hold each other to."
              body="Not posters. These are the arguments we have in code review and on customer calls."
            />
          </div>

          <div className="grid gap-px bg-ink/10 sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal
                key={v.title}
                delay={i * 90}
                className="group bg-white p-7 transition-colors duration-700 ease-smooth hover:bg-paper-warm"
              >
                <span className="font-mono text-[10px] tracking-[0.2em] text-ink-faint">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 text-lg font-semibold tracking-tighter">{v.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-mute">{v.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Open roles ------------------------------------------------------ */}
      <section id="roles" className="relative overflow-hidden bg-ink py-20 text-white md:py-28">
        <div className="shell">
          <SectionHead
            eyebrow="Open roles"
            title="No vacancies open right now."
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
                      href={`mailto:${company.email}?subject=${encodeURIComponent(
                        `Application: ${role.title}`,
                      )}`}
                      className="btn-invert shrink-0 self-start"
                    >
                      Apply
                    </a>
                  </div>
                </Reveal>
              ))}
            </ul>
          ) : (
            <Reveal delay={140} className="mt-12 border border-white/15 p-10 md:p-14">
              <p className="max-w-2xl text-base leading-relaxed text-white/65">
                We are not hiring at the moment. When a seat opens it will be listed here
                first, with the salary band, the location and what the first ninety days
                actually look like.
              </p>
              <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/45">
                If you think you should be here anyway, send{' '}
                <a
                  href={`mailto:${company.email}?subject=${encodeURIComponent('Speculative application')}`}
                  className="link-underline text-white/75"
                >
                  {company.email}
                </a>{' '}
                one paragraph on something you built and why it was hard. We read all of
                them, and we keep the good ones on file.
              </p>

              <a
                href={`mailto:${company.email}?subject=${encodeURIComponent('Tell me when a role opens')}`}
                className="btn-invert mt-9"
              >
                Tell me when a role opens
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
          <div className="grid gap-6 sm:grid-cols-2">
            {perks.map((perk, i) => (
              <Reveal key={perk.title} delay={i * 80} className="border-t border-ink/[0.12] pt-6">
                <h3 className="text-base font-semibold tracking-tighter">{perk.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-mute">{perk.body}</p>
              </Reveal>
            ))}
          </div>

          <Reveal blur delay={160}>
            <Parallax speed={-32} className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/media/img/team-office.jpg"
                alt="The YiY Tech team at work"
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
