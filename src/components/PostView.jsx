'use client';

import Image from 'next/image';
import Link from 'next/link';
import HeroFrame from '@/components/HeroFrame';
import { ClosingCta } from '@/components/Sections';
import { Reveal, SplitWords } from '@/components/motion';
import { bySlug } from '@/lib/content';
import { formatDate, useLocale } from '@/lib/i18n';

/** Body of /blog/[slug]. The route file keeps metadata and structured data. */
export default function PostView({ slug }) {
  const { t, locale, content } = useLocale();
  const { editorialPolicy, posts } = content;
  const post = bySlug(posts, slug);
  if (!post) return null;

  const more = posts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const long = { long: true };

  return (
    <>
      <HeroFrame>
        <div className="absolute inset-0">
          <Image
            src={post.image}
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
          <Reveal className="flex flex-wrap items-center gap-4">
            <Link
              href="/blog"
              className="text-xs uppercase tracking-[0.16em] text-white/45 transition-colors hover:text-white"
            >
              {t('common.blog')}
            </Link>
            <span className="h-px w-8 bg-white/25" />
            <span className="border border-white/20 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-white/60">
              {post.category}
            </span>
          </Reveal>

          <SplitWords
            as="h1"
            text={post.title}
            stagger={32}
            className="display mt-7 block max-w-[22ch] text-[clamp(1.7rem,3.4vw,2.9rem)]"
          />

          <Reveal delay={200}>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/60">{post.excerpt}</p>
          </Reveal>

          <Reveal delay={280}>
            <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/15 pt-6 text-xs text-white/45">
              <span className="text-white/70">{post.author.name}</span>
              <span>{post.author.role}</span>
              <span className="h-1 w-1 bg-white/25" />
              <span>
                {t('post.published')}{' '}
                <time dateTime={post.date}>{formatDate(post.date, locale, long)}</time>
              </span>
              {post.updated ? (
                <span>
                  {t('post.reviewed')}{' '}
                  <time dateTime={post.updated}>{formatDate(post.updated, locale, long)}</time>
                </span>
              ) : null}
              <span className="h-1 w-1 bg-white/25" />
              <span>{t('post.readTime', { time: post.readingTime })}</span>
            </div>
          </Reveal>
        </div>
      </HeroFrame>

      {/* Direct answer + takeaways -------------------------------------- */}
      <section className="relative overflow-hidden bg-paper pt-16 md:pt-20">
        <div className="shell grid gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]">
          <Reveal className="border-l-2 border-ink pl-6 md:pl-8">
            <p className="text-[11px] uppercase tracking-[0.18em] text-ink-faint">
              {t('post.shortAnswer')}
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">{post.answer}</p>
          </Reveal>

          <Reveal delay={140} className="border border-ink/[0.12] bg-white p-7">
            <p className="text-[11px] uppercase tracking-[0.18em] text-ink-faint">
              {t('post.takeaways')}
            </p>
            <ul className="mt-5 space-y-3">
              {post.takeaways.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
                  <span className="mt-[7px] h-1 w-1 shrink-0 bg-ink" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Body ------------------------------------------------------------ */}
      <article className="relative overflow-hidden bg-paper py-16 md:py-24">
        <div className="shell grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,2.1fr)]">
          {/* Contents + author */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <p className="text-[11px] uppercase tracking-[0.18em] text-ink-faint">
                {t('common.contents')}
              </p>
              <ol className="mt-5 space-y-2.5">
                {post.sections.map((s, i) => (
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
              <p className="text-[11px] uppercase tracking-[0.18em] text-ink-faint">
                {t('post.aboutAuthor')}
              </p>
              <div className="mt-5">
                <p className="text-sm font-medium">{post.author.name}</p>
                <p className="mt-0.5 text-xs text-ink-mute">{post.author.role}</p>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-ink-mute">{post.author.credential}</p>
              {post.reviewer ? (
                <p className="mt-4 border-t border-ink/[0.12] pt-4 text-xs leading-relaxed text-ink-faint">
                  {t('post.reviewedBy', { name: post.reviewer.name, role: post.reviewer.role })}
                </p>
              ) : null}
            </Reveal>
          </div>

          {/* Prose */}
          <div className="max-w-[68ch]">
            {post.sections.map((section, si) => (
              <section
                key={section.heading}
                id={`s${si + 1}`}
                className="scroll-mt-28 pt-10 first:pt-0"
              >
                <Reveal>
                  <h2 className="display text-[clamp(1.25rem,2vw,1.65rem)]">{section.heading}</h2>
                </Reveal>
                {section.paragraphs.map((para, pi) => (
                  <Reveal key={para.slice(0, 40)} delay={pi * 50}>
                    <p className="mt-5 text-base leading-relaxed text-ink-soft">{para}</p>
                  </Reveal>
                ))}
              </section>
            ))}

            {/* Post FAQ */}
            <section className="scroll-mt-28 pt-14">
              <Reveal>
                <h2 className="display text-[clamp(1.25rem,2vw,1.65rem)]">{t('post.faqHeading')}</h2>
              </Reveal>
              <dl className="mt-6 border-t border-ink/[0.12]">
                {post.faq.map((item, i) => (
                  <Reveal key={item.q} delay={i * 70} className="border-b border-ink/[0.12] py-5">
                    <dt className="text-base font-medium tracking-tight">{item.q}</dt>
                    <dd className="mt-2.5 text-sm leading-relaxed text-ink-mute">{item.a}</dd>
                  </Reveal>
                ))}
              </dl>
            </section>

            {/* Sources */}
            <Reveal className="mt-14 border border-ink/[0.12] bg-paper-warm p-7">
              <p className="text-[11px] uppercase tracking-[0.18em] text-ink-faint">
                {t('post.sources')}
              </p>
              <ul className="mt-4 space-y-3">
                {post.sources.map((s) => (
                  <li key={s.label} className="text-sm leading-relaxed">
                    <span className="font-medium">{s.label}</span>
                    <span className="block text-xs text-ink-mute">{s.note}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-ink/[0.12] pt-4 text-xs leading-relaxed text-ink-faint">
                {editorialPolicy.summary} {t('post.correctionsBefore')}{' '}
                <a className="link-underline" href={`mailto:${editorialPolicy.contact}`}>
                  {editorialPolicy.contact}
                </a>
                {locale === 'zh' ? '。' : '.'}
              </p>
            </Reveal>
          </div>
        </div>
      </article>

      {/* Related --------------------------------------------------------- */}
      <section className="relative overflow-hidden bg-paper-warm py-20 md:py-28">
        <div className="shell">
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-6 bg-ink/25" />
              {t('post.keepReading')}
            </span>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {more.map((p, i) => (
              <Reveal key={p.slug} delay={i * 90}>
                <Link href={`/blog/${p.slug}`} className="card group flex h-full flex-col">
                  <span className="relative block aspect-[16/10] overflow-hidden">
                    <Image
                      src={p.image}
                      alt=""
                      fill
                      sizes="(min-width: 768px) 30vw, 92vw"
                      className="object-cover transition-transform duration-[1400ms] ease-smooth group-hover:scale-105"
                    />
                  </span>
                  <span className="flex flex-1 flex-col p-6">
                    <span className="text-[10px] uppercase tracking-[0.16em] text-ink-faint">
                      {p.category}
                    </span>
                    <span className="mt-3 block text-base font-semibold leading-snug tracking-tighter">
                      {p.title}
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
