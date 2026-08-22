import ContactForm from '@/components/ContactForm';
import JsonLd from '@/components/JsonLd';
import { SITE_URL, breadcrumbLd, graph, pageMeta } from '@/lib/seo';
import { company } from '@/lib/site';

export const metadata = pageMeta({
  title: 'Book a walkthrough',
  description:
    'Thirty minutes on your floor or front desk. We map how stock and bookings move today and tell you straight whether YiY Tech is worth it.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={graph(
          {
            '@type': 'ContactPage',
            '@id': `${SITE_URL}/contact#page`,
            name: 'Book a walkthrough',
            url: `${SITE_URL}/contact`,
            about: { '@id': `${SITE_URL}/#organization` },
            mainEntity: {
              '@type': 'Organization',
              '@id': `${SITE_URL}/#organization`,
              email: company.email,
              ...(company.phone ? { telephone: company.phone } : {}),
            },
          },
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: 'Contact', path: '/contact' },
          ]),
        )}
      />
      <ContactForm />
    </>
  );
}
