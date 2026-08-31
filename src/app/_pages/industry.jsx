import { notFound } from 'next/navigation';
import IndustryView from '@/components/IndustryView';
import JsonLd from '@/components/JsonLd';
import { bySlug, getContent } from '@/lib/content';
import { crumb } from '@/lib/meta';
import { breadcrumbLd, faqLd, graph, industryLd, pageMeta } from '@/lib/seo';
import { industries } from '@/lib/site';

export const staticParams = () => industries.map((item) => ({ slug: item.slug }));

export async function meta({ params, locale }) {
  const { slug } = await params;
  const item = bySlug(getContent(locale).industries, slug);
  if (!item) return {};

  return pageMeta({
    // The trade first, because that is what somebody searched for.
    title: locale === 'zh' ? `${item.name} · ${item.product}` : `${item.product} for ${item.name}`,
    description: item.summary,
    path: item.href,
    image: item.hero,
    locale,
  });
}

export async function Page({ params, locale }) {
  const { slug } = await params;
  const item = bySlug(getContent(locale).industries, slug);
  if (!item) notFound();

  return (
    <>
      <JsonLd
        data={graph(
          industryLd(item, locale),
          breadcrumbLd(
            [
              { name: crumb('home', locale), path: '/' },
              { name: crumb('industries', locale), path: '/industries' },
              { name: item.name, path: item.href },
            ],
            locale,
          ),
          faqLd(item.faqs),
        )}
      />

      <IndustryView slug={item.slug} />
    </>
  );
}
