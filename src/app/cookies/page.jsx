import JsonLd from '@/components/JsonLd';
import LegalPage from '@/components/LegalPage';
import { breadcrumbLd, graph, pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'Cookies',
  description:
    'yiy.tech sets no cookies and loads no third-party scripts. What the consent banner stores, what the analytics and marketing categories would cover, and how to change your answer.',
  path: '/cookies',
});

export default function CookiesPage() {
  return (
    <>
      <JsonLd
        data={graph(
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: 'Cookies', path: '/cookies' },
          ]),
        )}
      />
      <LegalPage slug="cookies" />
    </>
  );
}
