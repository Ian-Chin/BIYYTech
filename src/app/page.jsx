import Hero from '@/components/Hero';
import JsonLd from '@/components/JsonLd';
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
import { graph, homeFaqLd, productListLd } from '@/lib/seo';
import { products } from '@/lib/site';

export default function HomePage() {
  const [stock, desk, signal] = products;

  return (
    <>
      <JsonLd data={graph(productListLd(), homeFaqLd())} />

      <Hero />

      <ProductsIntro />

      <ProductSection slug={stock.slug} />
      <FeatureStrip slug={stock.slug} />

      <ProductSection slug={desk.slug} flip />
      <FeatureStrip slug={desk.slug} tone="dark" />

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
