'use client';

import Link from '@/components/Link';
import { CookiePreferencesButton } from '@/components/CookieConsent';
import LanguageToggle from '@/components/LanguageToggle';
import Logo, { Mark } from '@/components/Logo';
import { useLocale } from '@/lib/i18n';

export default function Footer() {
  const { t, content } = useLocale();
  const { company, products, industries } = content;

  const columns = [
    {
      title: t('common.products'),
      links: [
        ...products.map((p) => ({ label: p.name, href: p.href })),
        { label: t('footer.results'), href: '/#results' },
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
            <div className="mt-7 space-y-1.5 text-sm text-white/45">
              <p>{company.location}</p>
              <a
                href={`mailto:${company.email}`}
                className="block transition-colors duration-300 hover:text-white"
              >
                {company.email}
              </a>
            </div>
            {/* Repeated here because the masthead toggle scrolls away, and the
                footer is where visitors look for site-wide settings. */}
            <LanguageToggle tone="dark" className="mt-7" />
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/35">
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
