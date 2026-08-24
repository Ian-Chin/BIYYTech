import CareersView from '@/components/CareersView';
import JsonLd from '@/components/JsonLd';
import { breadcrumbLd, graph, pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'Careers',
  description:
    'How the YiY Tech team works, and how to reach us about future roles. No vacancies are open at the moment.',
  path: '/careers',
});

export default function CareersPage() {
  return (
    <>
      <JsonLd
        data={graph(
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: 'Careers', path: '/careers' },
          ]),
        )}
      />

      <CareersView />
    </>
  );
}
