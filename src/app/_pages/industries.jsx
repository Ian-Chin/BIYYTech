import IndustriesView from '@/components/IndustriesView';
import JsonLd from '@/components/JsonLd';
import { crumb, pageCopy } from '@/lib/meta';
import { breadcrumbLd, graph, industryListLd, pageMeta } from '@/lib/seo';

export function meta(locale) {
  return pageMeta({ ...pageCopy('industries', locale), path: '/industries', locale });
}

export function Page({ locale }) {
  return (
    <>
      <JsonLd
        data={graph(
          industryListLd(locale),
          breadcrumbLd(
            [
              { name: crumb('home', locale), path: '/' },
              { name: crumb('industries', locale), path: '/industries' },
            ],
            locale,
          ),
        )}
      />

      <IndustriesView />
    </>
  );
}
