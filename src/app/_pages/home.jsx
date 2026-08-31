import Hero from '@/components/Hero';
import JsonLd from '@/components/JsonLd';
import LocaleNudge from '@/components/LocaleNudge';
import ProductSection from '@/components/ProductSection';
import {
  ClosingCta,
  Comparison,
  Faq,
  FeatureStrip,
  Industries,
  Pillars,
  Process,
  ProductsIntro,
  StatsBand,
  Testimonials,
} from '@/components/Sections';
import { pageCopy } from '@/lib/meta';
import { graph, homeFaqLd, pageMeta, productListLd } from '@/lib/seo';
import { products } from '@/lib/site';

/* -------------------------------------------------------------------------- */
/*  One page, two routes                                                       */
/*                                                                             */
/*  Each page in this folder is defined once and mounted twice, by a two-line   */
/*  route file in (en)/ and another in zh/. The alternative was eighteen        */
/*  near-identical route files drifting apart one edit at a time.               */
/*  Underscore-prefixed, so Next never routes it directly.                      */
/* -------------------------------------------------------------------------- */

export function meta(locale) {
  const copy = pageCopy('home', locale);
  return {
    ...pageMeta({ ...copy, path: '/', locale }),
    // The site name is already in the headline title, so it must not also be
    // appended by the root template.
    title: { absolute: copy.title },
  };
}

export function Page({ locale }) {
  const [dash, web, signal] = products;

  return (
    <>
      <JsonLd data={graph(productListLd(locale), homeFaqLd(locale))} />
      {locale === 'en' ? <LocaleNudge /> : null}

      <Hero />

      <ProductsIntro />

      <ProductSection slug={dash.slug} />
      <FeatureStrip slug={dash.slug} />

      <ProductSection slug={web.slug} flip />
      <FeatureStrip slug={web.slug} tone="dark" />

      {/* The roadmap product carries no feature strip of its own: the page has
          made its case by here, and it closes the run on ink. */}
      <ProductSection slug={signal.slug} />

      <StatsBand />
      <Pillars />
      <Industries />
      <Testimonials />
      <Comparison />
      <Process />
      <Faq />
      <ClosingCta />
    </>
  );
}
