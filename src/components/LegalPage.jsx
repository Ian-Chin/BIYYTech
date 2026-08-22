import HeroFrame from '@/components/HeroFrame';
import { ClosingCta } from '@/components/Sections';
import { Reveal, SplitWords } from '@/components/motion';
import { LEGAL_UPDATED } from '@/lib/legal';
import { company, editorialPolicy } from '@/lib/site';

const fmt = (iso) =>
  new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

/**
 * Shared shell for /privacy and /terms. Deliberately plainer than the rest of
 * the site: no imagery, no parallax, no cards. A legal page that tries to be
 * interesting is a legal page nobody trusts.
 */
export default function LegalPage({ doc }) {
  return (
    <>
      <HeroFrame>
        <div className="noise absolute inset-0" />

        <div className="shell relative py-20 md:py-28">
          <Reveal>
            <span className="eyebrow text-white/45">
              <span className="h-px w-6 bg-white/30" />
              {doc.title}
            </span>
          </Reveal>

          <SplitWords
            as="h1"
            text={doc.headline}
            stagger={38}
            className="display mt-6 block max-w-[20ch] text-[clamp(1.9rem,4vw,3.4rem)]"
          />

          <Reveal delay={220}>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/60">{doc.intro}</p>
          </Reveal>

          <Reveal delay={300}>
            <p className="mt-9 border-t border-white/15 pt-6 text-xs text-white/45">
              Last updated <time dateTime={LEGAL_UPDATED}>{fmt(LEGAL_UPDATED)}</time>
            </p>
          </Reveal>
        </div>
      </HeroFrame>

      <section className="relative overflow-hidden bg-paper py-16 md:py-24">
        <div className="shell grid gap-14 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,2fr)]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <p className="text-[11px] uppercase tracking-[0.18em] text-ink-faint">Contents</p>
              <ol className="mt-5 space-y-2.5">
                {doc.sections.map((s, i) => (
                  <li key={s.heading}>
                    <a
                      href={`#s${i + 1}`}
                      className="link-underline text-sm leading-snug text-ink-mute transition-colors hover:text-ink"
                    >
                      {s.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal delay={160} className="mt-10 border-t border-ink/[0.12] pt-7">
              <p className="text-[11px] uppercase tracking-[0.18em] text-ink-faint">Ask us</p>
              <div className="mt-4 space-y-1.5 text-sm">
                <a className="link-underline block" href={`mailto:${company.email}`}>
                  {company.email}
                </a>
                <a
                  className="link-underline block text-ink-mute"
                  href={`mailto:${editorialPolicy.contact}`}
                >
                  {editorialPolicy.contact}
                </a>
                <p className="text-ink-mute">{company.location}</p>
              </div>
            </Reveal>
          </div>

          <div className="max-w-[68ch]">
            {doc.sections.map((section, si) => (
              <section
                key={section.heading}
                id={`s${si + 1}`}
                className="scroll-mt-28 border-t border-ink/[0.12] pt-8 first:border-t-0 first:pt-0"
              >
                <Reveal className="flex items-baseline gap-5">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-ink-faint">
                    {String(si + 1).padStart(2, '0')}
                  </span>
                  <h2 className="display text-[clamp(1.2rem,1.9vw,1.55rem)]">{section.heading}</h2>
                </Reveal>
                {section.paragraphs.map((para, pi) => (
                  <Reveal key={para.slice(0, 40)} delay={pi * 50}>
                    <p className="mt-5 text-base leading-relaxed text-ink-soft lg:pl-10">{para}</p>
                  </Reveal>
                ))}
                <div className="pb-10" />
              </section>
            ))}
          </div>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
