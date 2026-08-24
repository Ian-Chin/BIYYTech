import JsonLd from '@/components/JsonLd';
import LegalPage from '@/components/LegalPage';
import { breadcrumbLd, graph, pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'Terms',
  description:
    'Terms of use for yiy.tech, how to read the figures quoted on this site, and the limits of what a marketing page promises. The software itself is governed by a separate service agreement.',
  path: '/terms',
});

export default function TermsPage() {
  return (
    <>
      <JsonLd
        data={graph(
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: 'Terms', path: '/terms' },
          ]),
        )}
      />
      <LegalPage slug="terms" />
    </>
  );
}
