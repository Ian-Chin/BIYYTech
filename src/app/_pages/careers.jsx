import CareersView from '@/components/CareersView';
import JsonLd from '@/components/JsonLd';
import { crumb, pageCopy } from '@/lib/meta';
import { breadcrumbLd, graph, pageMeta } from '@/lib/seo';

export const meta = (locale) => pageMeta({ ...pageCopy('careers', locale), path: '/careers', locale });

export function Page({ locale }) {
  return (
    <>
      <JsonLd
        data={graph(
          breadcrumbLd(
            [
              { name: crumb('home', locale), path: '/' },
              { name: pageCopy('careers', locale).title, path: '/careers' },
            ],
            locale,
          ),
        )}
      />

      <CareersView />
    </>
  );
}
