import { notFound } from 'next/navigation';
import JsonLd from '@/components/JsonLd';
import ProductView from '@/components/ProductView';
import { breadcrumbLd, graph, pageMeta, productLd } from '@/lib/seo';
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

/**
 * Metadata and structured data stay English and server-rendered; the readable
 * page is a client view so it can follow the visitor's chosen locale.
 */
export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

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

      <ProductView slug={product.slug} />
    </>
  );
}
