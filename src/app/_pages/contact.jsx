import ContactForm from '@/components/ContactForm';
import JsonLd from '@/components/JsonLd';
import { crumb, pageCopy } from '@/lib/meta';
import { SITE_URL, breadcrumbLd, graph, pageMeta } from '@/lib/seo';
import { localePath } from '@/lib/routes';
import { company } from '@/lib/site';

export const meta = (locale) => pageMeta({ ...pageCopy('contact', locale), path: '/contact', locale });

export function Page({ locale }) {
  const url = `${SITE_URL}${localePath(locale, '/contact')}`;
  const copy = pageCopy('contact', locale);

  return (
    <>
      <JsonLd
        data={graph(
          {
            '@type': 'ContactPage',
            '@id': `${url}#page`,
            name: copy.title,
            url,
            inLanguage: locale === 'zh' ? 'zh-Hans' : 'en',
            about: { '@id': `${SITE_URL}/#organization` },
            mainEntity: {
              '@type': 'Organization',
              '@id': `${SITE_URL}/#organization`,
              email: company.email,
              ...(company.phone ? { telephone: company.phone } : {}),
            },
          },
          breadcrumbLd(
            [
              { name: crumb('home', locale), path: '/' },
              { name: copy.title, path: '/contact' },
            ],
            locale,
          ),
        )}
      />
      <ContactForm />
    </>
  );
}
