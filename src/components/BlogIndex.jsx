'use client';

import Image from 'next/image';
import Link from '@/components/Link';
import HeroFrame from '@/components/HeroFrame';
import { ClosingCta } from '@/components/Sections';
import { Reveal, SplitWords } from '@/components/motion';
import { formatDate, useLocale } from '@/lib/i18n';

/** Body of /blog. The route file keeps metadata and structured data. */
export default function BlogIndex() {
  const { t, locale, content } = useLocale();
  const { editorialPolicy, posts } = content;
  const [lead, ...rest] = posts;

  return (
    <>
      <HeroFrame>
        <div className="absolute inset-0">
          <Image
            src="/media/img/data-office.jpg"
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
              {t('blog.eyebrow')}
            </span>
          </Reveal>

          <SplitWords
            as="h1"
            text={t('blog.title')}
            stagger={38}
            className="display mt-6 block max-w-[17ch] text-[clamp(1.9rem,4vw,3.4rem)]"
          />

          <Reveal delay={220}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-white/60">
              {t('blog.body')}
            </p>
          </Reveal>
        </div>
      </HeroFrame>

      {/* Lead article ---------------------------------------------------- */}
      <section className="relative overflow-hidden bg-paper py-20 md:py-28">
        <div className="shell">
          <Reveal>
            <Link
              href={`/blog/${lead.slug}`}
              className="group grid gap-10 lg:grid-cols-2 lg:items-center"
            >
              <span className="relative block aspect-[16/11] overflow-hidden">
                <Image
                  src={lead.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 46vw, 92vw"
                  className="object-cover transition-transform duration-[1400ms] ease-smooth group-hover:scale-105"
                />
              </span>

              <span className="block">
                <span className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.16em] text-ink-faint">
                  <span className="border border-ink/15 px-2 py-0.5">{lead.category}</span>
                  {formatDate(lead.date, locale)}
                  <span className="h-1 w-1 bg-ink/25" />
                  {lead.readingTime}
                </span>
                <span className="display mt-5 block max-w-[20ch] text-[clamp(1.6rem,2.8vw,2.4rem)]">
                  {lead.title}
                </span>
                <span className="mt-5 block max-w-xl text-base leading-relaxed text-ink-mute">
                  {lead.excerpt}
                </span>
                <span className="mt-6 block text-xs text-ink-faint">
                  {lead.author.name}, {lead.author.role}
                </span>
                <span className="lead-arrow mt-6 inline-flex items-center gap-2 border-b border-ink pb-1 text-sm font-medium">
                  {t('blog.readPiece')}
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
              </span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Everything else -------------------------------------------------- */}
      <section className="relative overflow-hidden bg-paper-warm py-20 md:py-28">
        <div className="shell">
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-6 bg-ink/25" />
              {t('blog.moreWriting')}
            </span>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, i) => (
              <Reveal key={post.slug} delay={i * 90} blur>
                <Link href={`/blog/${post.slug}`} className="card group flex h-full flex-col">
                  <span className="relative block aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 30vw, 92vw"
                      className="object-cover transition-transform duration-[1400ms] ease-smooth group-hover:scale-105"
                    />
                  </span>
                  <span className="flex flex-1 flex-col p-7">
                    <span className="flex flex-wrap items-center gap-3 text-[10px] uppercase tracking-[0.16em] text-ink-faint">
                      <span className="border border-ink/15 px-2 py-0.5">{post.category}</span>
                      {formatDate(post.date, locale)}
                    </span>
                    <span className="mt-4 block text-lg font-semibold leading-snug tracking-tighter">
                      {post.title}
                    </span>
                    <span className="mt-3 block flex-1 text-sm leading-relaxed text-ink-mute">
                      {post.excerpt}
                    </span>
                    <span className="mt-6 flex items-center justify-between text-[11px] uppercase tracking-[0.14em] text-ink-faint">
                      {post.readingTime}
                      <svg
                        width="14"
                        height="10"
                        viewBox="0 0 14 10"
                        fill="none"
                        aria-hidden="true"
                        className="transition-transform duration-500 ease-smooth group-hover:translate-x-1"
                      >
                        <path
                          d="M9 1l4 4-4 4M13 5H1"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>

          {/* Editorial policy: an E-E-A-T signal and a real commitment. */}
          <Reveal
            id="editorial"
            delay={200}
            className="mt-16 scroll-mt-28 border border-ink/[0.12] bg-white p-8 md:p-10"
          >
            <p className="text-[11px] uppercase tracking-[0.18em] text-ink-faint">
              {t('blog.policyTitle')}
            </p>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-soft">
              {editorialPolicy.summary}
            </p>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-mute">
              {t('blog.policyBody')}{' '}
              <a className="link-underline" href={`mailto:${editorialPolicy.contact}`}>
                {editorialPolicy.contact}
              </a>
              {t('blog.policyBodyAfter')}
            </p>
          </Reveal>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
