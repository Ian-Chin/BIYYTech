'use client';

import Image from 'next/image';
import Link from '@/components/Link';
import { Parallax, Reveal, SplitWords } from '@/components/motion';
import { bySlug } from '@/lib/content';
import { useLocale } from '@/lib/i18n';

export default function ProductSection({ slug, flip = false }) {
  const { t, content } = useLocale();
  const product = bySlug(content.products, slug);
  if (!product) return null;
  const soon = Boolean(product.soon);

  return (
    <article
      id={product.slug}
      className={`relative overflow-hidden py-24 md:py-32 ${
        soon ? 'bg-ink text-white' : 'bg-paper'
      }`}
    >
      <div className="shell relative">
        <div
          className={`grid items-center gap-14 lg:grid-cols-2 lg:gap-20 ${
            flip ? 'lg:[&>*:first-child]:order-2' : ''
          }`}
        >
          {/* Copy ------------------------------------------------------- */}
          <div>
            <Reveal className="flex items-center gap-4">
              <span
                className={`font-mono text-xs tracking-[0.2em] ${
                  soon ? 'text-white/35' : 'text-ink-faint'
                }`}
              >
                {product.index}
              </span>
              <span className={`h-px w-10 ${soon ? 'bg-white/20' : 'bg-ink/15'}`} />
              <span
                className={`rounded-full border px-3 py-1 text-[10px] uppercase tracking-[0.16em] ${
                  soon
                    ? 'border-white/20 text-white/55'
                    : 'border-ink/15 bg-white text-ink-mute'
                }`}
              >
                {product.status}
              </span>
            </Reveal>

            <Reveal delay={80} className="mt-7">
              <p
                className={`text-sm font-medium uppercase tracking-[0.16em] ${
                  soon ? 'text-white/45' : 'text-ink-mute'
                }`}
              >
                {product.name}
              </p>
            </Reveal>

            <SplitWords
              as="h2"
              text={product.headline}
              className="display mt-4 block max-w-[19ch] text-[clamp(2rem,4.6vw,3.5rem)]"
              stagger={38}
            />

            <Reveal delay={160}>
              <p
                className={`mt-7 max-w-xl text-base leading-relaxed ${
                  soon ? 'text-white/55' : 'text-ink-mute'
                }`}
              >
                {product.summary}
              </p>
            </Reveal>

            <ul className="mt-9 grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
              {product.bullets.map((b, i) => (
                <Reveal
                  as="li"
                  key={b}
                  delay={220 + i * 55}
                  className="flex items-start gap-3 text-sm leading-relaxed"
                >
                  <span
                    className={`mt-[7px] h-1 w-1 shrink-0 rounded-full ${
                      soon ? 'bg-white/45' : 'bg-ink'
                    }`}
                  />
                  <span className={soon ? 'text-white/65' : 'text-ink-soft'}>{b}</span>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={520} className="mt-10 flex flex-wrap gap-3">
              <Link href={product.href} className={soon ? 'btn-invert' : 'btn-primary'}>
                {soon
                  ? t('common.readRoadmap')
                  : t('common.exploreProduct', { name: product.short })}
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
              <Link href="/contact" className={soon ? 'btn-invert' : 'btn-ghost'}>
                {soon ? t('common.joinBeta') : t('common.walkthrough')}
              </Link>
            </Reveal>
          </div>

          {/* Visual ----------------------------------------------------- */}
          <div className="relative">
            <Reveal blur className="relative">
              <Parallax speed={-46} className="relative">
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl md:aspect-[5/6]">
                  <Image
                    src={product.hero}
                    alt={t('product.inUseAlt', { name: product.name })}
                    fill
                    sizes="(min-width: 1024px) 46vw, 92vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />
                </div>
              </Parallax>

              {/* Floating stat / caption card */}
              <Parallax
                speed={62}
                className={`absolute -bottom-8 ${
                  flip ? 'right-4 md:right-10' : 'left-4 md:-left-10'
                } w-[min(78%,300px)]`}
              >
                <div
                  className={`rounded-2xl border p-5 backdrop-blur-xl ${
                    soon
                      ? 'border-white/15 bg-white/[0.07]'
                      : 'border-ink/10 bg-white/90 shadow-[0_30px_70px_-45px_rgba(11,11,12,0.6)]'
                  }`}
                >
                  <p
                    className={`text-[10px] uppercase tracking-[0.18em] ${
                      soon ? 'text-white/40' : 'text-ink-faint'
                    }`}
                  >
                    {t('common.builtFor')}
                  </p>
                  <p
                    className={`mt-2 text-sm leading-relaxed ${
                      soon ? 'text-white/75' : 'text-ink-soft'
                    }`}
                  >
                    {product.audience}
                  </p>
                  {product.metrics.length ? (
                    <div
                      className={`mt-4 flex items-baseline gap-2 border-t pt-4 ${
                        soon ? 'border-white/10' : 'border-ink/10'
                      }`}
                    >
                      <span className="display text-3xl">
                        {product.metrics[0].value}
                        {product.metrics[0].suffix}
                      </span>
                      <span
                        className={`text-[11px] leading-tight ${
                          soon ? 'text-white/45' : 'text-ink-mute'
                        }`}
                      >
                        {product.metrics[0].label}
                      </span>
                    </div>
                  ) : null}
                </div>
              </Parallax>
            </Reveal>
          </div>
        </div>
      </div>
    </article>
  );
}
