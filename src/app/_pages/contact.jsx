import ContactForm from '@/components/ContactForm';
import JsonLd from '@/components/JsonLd';
import { crumb, pageCopy } from '@/lib/meta';
import {
  AREA_SERVED,
  SITE_URL,
  breadcrumbLd,
  geoMeta,
  graph,
  pageMeta,
  postalAddressLd,
} from '@/lib/seo';
import { htmlLang, localePath } from '@/lib/routes';
import { company } from '@/lib/site';

/* The contact page is the one a local-intent search lands on, so it repeats the
   geo meta rather than relying on the root layout's copy alone. */
export const meta = (locale) => ({
  ...pageMeta({ ...pageCopy('contact', locale), path: '/contact', locale }),
  other: geoMeta,
});

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
            inLanguage: htmlLang(locale),
            about: { '@id': `${SITE_URL}/#organization` },
            mainEntity: {
              '@type': 'Organization',
              '@id': `${SITE_URL}/#organization`,
              email: company.email,
              ...(company.phone ? { telephone: company.phone } : {}),
              address: postalAddressLd(),
              areaServed: AREA_SERVED,
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
