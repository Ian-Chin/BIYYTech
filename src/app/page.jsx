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
  SectionHead,
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

      <section id="products" className="relative bg-paper pt-24 md:pt-32">
        <div className="shell">
          <SectionHead
            align="center"
            eyebrow="Products"
            title="Two systems live today. A third listening in the background."
            body="Buy one, buy both. They share an account and a login, and once Data & Intelligence lands, one intelligence layer over everything your business does."
          />
        </div>
      </section>

      <ProductSection product={stock} />
      <FeatureStrip product={stock} />

      <ProductSection product={desk} flip />
      <FeatureStrip product={desk} tone="dark" />

      <ProductSection product={signal} />

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
