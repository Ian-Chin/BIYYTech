import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import BackgroundVideo from '@/components/BackgroundVideo';
import HeroFrame from '@/components/HeroFrame';
import JsonLd from '@/components/JsonLd';
import { breadcrumbLd, graph, pageMeta, productLd } from '@/lib/seo';
import { ClosingCta, Faq, FeatureStrip, Process, SectionHead } from '@/components/Sections';
import { Parallax, Reveal, SplitWords } from '@/components/motion';
import { products } from '@/lib/site';

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};
  return pageMeta({
    title: `${product.name} for ${product.audience}`,
    description: product.summary,
    path: product.href,
    image: product.hero,
  });
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const soon = product.status === 'Coming soon';
  const others = products.filter((p) => p.slug !== product.slug);

  return (
    <>
      <JsonLd
        data={graph(
          productLd(product),
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: 'Products', path: '/#products' },
            { name: product.name, path: product.href },
          ]),
        )}
      />

      {/* Hero ---------------------------------------------------------- */}
      {/* Copy sits at the bottom-left of the footage box, so the box carries an
          explicit height rather than being sized by its content. Shorter than
          it was: the KPI row that used to close the hero now lives further
          down the page. */}
      <HeroFrame innerClassName="min-h-[38rem] md:min-h-[46rem]">
        {/* Poster paints first and is what LCP measures; the clip fades in
            behind it once it has frames. */}
        <BackgroundVideo
          src={product.video}
          poster={product.poster || product.hero}
          priority
          imageClassName={`scale-105 ${product.video ? 'opacity-45' : 'opacity-40'}`}
        />
        {/* Weighted to the bottom now that the copy is, so the type keeps its
            contrast and the top of the footage stays visible. */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink/40" />
        <div className="noise absolute inset-0" />

        <div className="shell relative flex min-h-[inherit] flex-col justify-end py-14 md:py-16">
          <Reveal className="flex items-center gap-4">
            <Link
              href="/#products"
              className="text-xs uppercase tracking-[0.16em] text-white/45 transition-colors hover:text-white"
            >
              Products
            </Link>
            <span className="h-px w-8 bg-white/25" />
            <span className="rounded-full border border-white/20 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-white/60">
              {product.status}
            </span>
          </Reveal>

          <Reveal delay={80} className="mt-8">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-white/45">
              {product.name}
            </p>
          </Reveal>

          <SplitWords
            as="h1"
            text={product.headline}
            stagger={38}
            className="display mt-5 block max-w-[26ch] text-[clamp(1.8rem,3.6vw,3.15rem)]"
          />

          <Reveal delay={220}>
            <p className="mt-7 max-w-4xl text-base leading-relaxed text-white/65 md:text-lg">
              {product.summary}
            </p>
          </Reveal>

          {/* Each button reveals on its own so they land one after the other
              instead of the pair sliding up as a single block. */}
          <div className="mt-9 flex flex-wrap gap-3">
            <Reveal delay={340} className="reveal-pop">
              <Link href="/contact" className="btn bg-white text-ink hover:-translate-y-0.5">
                {soon ? 'Join the beta list' : 'Book a walkthrough'}
              </Link>
            </Reveal>
            <Reveal delay={450} className="reveal-pop">
              <Link href="/#products" className="btn-invert">
                See all products
              </Link>
            </Reveal>
          </div>
        </div>
      </HeroFrame>

      {/* Capability list ------------------------------------------------ */}
      <section className="relative overflow-hidden bg-paper py-24 md:py-32">
        <div className="shell relative grid gap-16 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <SectionHead
              eyebrow="What you get"
              title={`Everything ${product.short} does on day one.`}
              body={`Built for ${product.audience.toLowerCase()}, configured to your outlets, roles and approval rules during onboarding.`}
            />

            <ul className="mt-10 border-t border-ink/[0.12]">
              {product.bullets.map((b, i) => (
                <Reveal
                  as="li"
                  key={b}
                  delay={i * 70}
                  className="flex items-baseline gap-5 border-b border-ink/[0.12] py-4"
                >
                  <span className="font-mono text-[10px] tracking-[0.2em] text-ink-faint">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-sm leading-relaxed text-ink-soft">{b}</span>
                </Reveal>
              ))}
            </ul>
          </div>

          <Reveal blur delay={140}>
            <Parallax speed={-40} className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <Image
                src={product.hero}
                alt={`${product.name} in a working environment`}
                fill
                sizes="(min-width: 1024px) 46vw, 92vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
            </Parallax>
          </Reveal>
        </div>
      </section>

      <FeatureStrip product={product} tone={soon ? 'dark' : 'light'} />

      {!soon ? <Process /> : null}

      {/* Cross-sell ----------------------------------------------------- */}
      <section className="relative overflow-hidden bg-paper-warm py-24 md:py-32">
        <div className="shell">
          <SectionHead eyebrow="Also from YiY" title="The rest of the operations layer." />

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {others.map((other, i) => (
              <Reveal key={other.slug} delay={i * 110}>
                <Link href={other.href} className="card group block h-full">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={other.hero}
                      alt=""
                      fill
                      sizes="(min-width: 768px) 46vw, 92vw"
                      className="object-cover transition-transform duration-[1400ms] ease-smooth group-hover:scale-105"
                    />
                  </div>
                  <div className="p-7">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[10px] tracking-[0.2em] text-ink-faint">
                        {other.index}
                      </span>
                      <span className="rounded-full border border-ink/15 px-2.5 py-0.5 text-[9px] uppercase tracking-[0.16em] text-ink-mute">
                        {other.status}
                      </span>
                    </div>
                    <h3 className="mt-4 text-xl font-semibold tracking-tighter">
                      {other.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-mute">{other.tagline}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Faq />
      <ClosingCta />
    </>
  );
}
