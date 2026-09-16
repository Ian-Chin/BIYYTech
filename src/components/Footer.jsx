'use client';

import Link from '@/components/Link';
import { CookiePreferencesButton } from '@/components/CookieConsent';
import LanguageToggle from '@/components/LanguageToggle';
import Logo, { Mark } from '@/components/Logo';
import { useLocale } from '@/lib/i18n';

/* Brand marks, keyed by the `name` in company.social, each with its own
   viewBox because the official glyphs are not drawn on a shared grid. Inline
   rather than an icon package: three marks do not justify a dependency, and
   these have to inherit the footer's text colour on hover. */
const ICONS = {
  Instagram: (
    <svg viewBox="0 0 24 24" className="h-[17px] w-[17px]" aria-hidden="true">
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="12" r="4.1" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.3" cy="6.7" r="1.25" fill="currentColor" />
    </svg>
  ),
  TikTok: (
    <svg viewBox="0 0 24 24" className="h-[17px] w-[17px]" fill="currentColor" aria-hidden="true">
      <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.03 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07Z" />
    </svg>
  ),
  X: (
    <svg viewBox="0 0 24 24" className="h-[15px] w-[15px]" fill="currentColor" aria-hidden="true">
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
  ),
};

export default function Footer() {
  const { t, content } = useLocale();
  const { company, products, industries } = content;

  const columns = [
    {
      title: t('common.products'),
      links: [
        ...products.map((p) => ({ label: p.name, href: p.href })),
        { label: t('footer.rollout'), href: '/#process' },
        { label: t('footer.faqLink'), href: '/#faq' },
      ],
    },
    {
      /* Six of the twelve, then the index. A footer that lists every industry
         buries the company column on a phone, and the panel and /industries
         both carry the full set. */
      title: t('common.industries'),
      links: [
        ...industries.slice(0, 6).map((i) => ({ label: i.name, href: i.href })),
        { label: t('common.allIndustries'), href: '/industries' },
      ],
    },
    {
      title: t('footer.companyTitle'),
      links: [
        { label: t('common.blog'), href: '/blog' },
        { label: t('common.careers'), href: '/careers' },
        { label: t('footer.whyYiy'), href: '/#why' },
        { label: t('common.contact'), href: '/contact' },
        { label: t('footer.support'), href: `mailto:${company.email}` },
      ],
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-ink text-white">

      {/* Oversized watermark mark */}
      <div className="pointer-events-none absolute -bottom-24 -right-16 opacity-[0.05]">
        <Mark variant="dark" size={460} />
      </div>

      <div className="shell relative py-20">
        <div className="grid gap-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo variant="dark" size={30} label={t('common.logoHome')} />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/55">
              {company.tagline}
            </p>
            {/* <address> rather than a <div> of <p>s: it is the element a
                parser looks for when asking where a site's owner is, and the
                country is spelled out in the line under it so the answer does
                not depend on knowing that Kuala Lumpur is in Malaysia. */}
            <address className="mt-7 space-y-1.5 text-sm not-italic text-white/45">
              <p>{company.location}</p>
              <a
                href={`mailto:${company.email}`}
                className="block transition-colors duration-300 hover:text-white"
              >
                {company.email}
              </a>
            </address>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/35">
              {t('footer.serving')}
            </p>
            {/* Same URLs the Organization JSON-LD declares in `sameAs`, read
                from the one array in site.js, so a profile cannot appear in
                the page without also appearing in the structured data.
                rel="me" states the same link in the markup itself, which is
                what the profiles' own back-links are checked against. */}
            <div className="mt-8">
              <p className="text-[11px] font-medium tracking-[0.01em] text-white/35">
                {t('footer.follow')}
              </p>
              <ul className="mt-4 flex items-center gap-2.5">
                {company.social.map((s) => (
                  <li key={s.name}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="me noopener noreferrer"
                      aria-label={`${s.name} (${s.handle})`}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/55 transition-colors duration-300 hover:border-white/30 hover:text-white"
                    >
                      {ICONS[s.name]}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Repeated here because the masthead toggle scrolls away, and the
                footer is where visitors look for site-wide settings. */}
            <LanguageToggle tone="dark" className="mt-8" />
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-[11px] font-medium tracking-[0.01em] text-white/35">
                {col.title}
              </p>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-1.5 text-sm text-white/60 transition-colors duration-300 hover:text-white"
                    >
                      <span className="h-px w-0 bg-white transition-all duration-500 ease-smooth group-hover:w-3" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-7 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>{t('footer.rights', { year: new Date().getFullYear(), legal: company.legal })}</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="transition-colors hover:text-white/70">
              {t('footer.privacy')}
            </Link>
            <Link href="/terms" className="transition-colors hover:text-white/70">
              {t('footer.terms')}
            </Link>
            <Link href="/cookies" className="transition-colors hover:text-white/70">
              {t('footer.cookies')}
            </Link>
            <CookiePreferencesButton className="transition-colors hover:text-white/70" />
            <span>{t('footer.photography')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
