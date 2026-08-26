import JsonLd from '@/components/JsonLd';
import WebsiteView from '@/components/WebsiteView';
import { breadcrumbLd, faqLd, graph, pageMeta, webServiceLd } from '@/lib/seo';
import { webService } from '@/lib/site';

export const metadata = pageMeta({
  title: 'Website & integrations',
  description:
    'YiY Tech builds websites for SMEs and wires them into the operations system behind them: live stock on catalogue pages, real availability on the booking page, enquiries landing on the dashboard. Three weeks, fixed scope, everything in your name.',
  path: '/website',
});

export default function WebsitePage() {
  return (
    <>
      <JsonLd
        data={graph(
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: 'Website & integrations', path: '/website' },
          ]),
          webServiceLd(),
          faqLd(webService.faqs),
        )}
      />

      <WebsiteView />
    </>
  );
}
