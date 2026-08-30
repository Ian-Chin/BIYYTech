import { notFound } from 'next/navigation';
import JsonLd from '@/components/JsonLd';
import ProductView from '@/components/ProductView';
import { bySlug, getContent } from '@/lib/content';
import { crumb } from '@/lib/meta';
import { breadcrumbLd, faqLd, graph, pageMeta, productLd } from '@/lib/seo';
import { products } from '@/lib/site';

export const staticParams = () => products.map((p) => ({ slug: p.slug }));

export async function meta({ params, locale }) {
  const { slug } = await params;
  const product = bySlug(getContent(locale).products, slug);
  if (!product) return {};

  return pageMeta({
    // Reads naturally in both: "Dashboards & Databases for SMEs running the
    // business on spreadsheets" and "仪表板与数据库 · 还在用表格跑生意的中小企业".
    title: locale === 'zh'
      ? `${product.name} · ${product.audience}`
      : `${product.name} for ${product.audience}`,
    description: product.summary,
    path: product.href,
    image: product.hero,
    locale,
  });
}

export async function Page({ params, locale }) {
  const { slug } = await params;
  const product = bySlug(getContent(locale).products, slug);
  if (!product) notFound();

  return (
    <>
      <JsonLd
        data={graph(
          productLd(product, locale),
          breadcrumbLd(
            [
              { name: crumb('home', locale), path: '/' },
              { name: crumb('products', locale), path: '/#products' },
              { name: product.name, path: product.href },
            ],
            locale,
          ),
          // Only the products that answer their own questions on the page; the
          // rest render the site-wide set, which the homepage already emits.
          product.faqs ? faqLd(product.faqs) : null,
        )}
      />

      <ProductView slug={product.slug} />
    </>
  );
}
