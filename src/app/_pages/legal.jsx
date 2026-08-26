import JsonLd from '@/components/JsonLd';
import LegalPage from '@/components/LegalPage';
import { crumb, pageCopy } from '@/lib/meta';
import { breadcrumbLd, graph, pageMeta } from '@/lib/seo';

/** Privacy, terms and cookies differ only by slug, so they share one module. */
export const meta = (slug, locale) =>
  pageMeta({ ...pageCopy(slug, locale), path: `/${slug}`, locale });

export function Page({ slug, locale }) {
  return (
    <>
      <JsonLd
        data={graph(
          breadcrumbLd(
            [
              { name: crumb('home', locale), path: '/' },
              { name: pageCopy(slug, locale).title, path: `/${slug}` },
            ],
            locale,
          ),
        )}
      />
      <LegalPage slug={slug} />
    </>
  );
}
