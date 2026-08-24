import JsonLd from '@/components/JsonLd';
import LegalPage from '@/components/LegalPage';
import { breadcrumbLd, graph, pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'Privacy',
  description:
    'What yiy.tech collects, which is almost nothing: no cookies, no analytics, no third-party scripts. How walkthrough enquiries are handled, and your rights under the Malaysian PDPA.',
  path: '/privacy',
});

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={graph(
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: 'Privacy', path: '/privacy' },
          ]),
        )}
      />
      <LegalPage slug="privacy" />
    </>
  );
}
