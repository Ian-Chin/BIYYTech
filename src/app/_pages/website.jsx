import JsonLd from '@/components/JsonLd';
import WebsiteView from '@/components/WebsiteView';
import { getContent } from '@/lib/content';
import { crumb, pageCopy } from '@/lib/meta';
import { breadcrumbLd, faqLd, graph, pageMeta, webServiceLd } from '@/lib/seo';

export const meta = (locale) => pageMeta({ ...pageCopy('website', locale), path: '/website', locale });

export function Page({ locale }) {
  const { webService } = getContent(locale);

  return (
    <>
      <JsonLd
        data={graph(
          breadcrumbLd(
            [
              { name: crumb('home', locale), path: '/' },
              { name: crumb('website', locale), path: '/website' },
            ],
            locale,
          ),
          webServiceLd(locale),
          faqLd(webService.faqs),
        )}
      />

      <WebsiteView />
    </>
  );
}
