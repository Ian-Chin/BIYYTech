import Link from 'next/link';
import Logo, { Mark } from '@/components/Logo';
import { company, products } from '@/lib/site';

const columns = [
  {
    title: 'Products',
    links: products.map((p) => ({ label: p.name, href: p.href })),
  },
  {
    title: 'Company',
    links: [
      { label: 'Blog', href: '/blog' },
      { label: 'Careers', href: '/careers' },
      { label: 'Why YiY', href: '/#why' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Results', href: '/#results' },
      { label: 'How rollout works', href: '/#process' },
      { label: 'FAQ', href: '/#faq' },
      { label: 'Support', href: `mailto:${company.email}` },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">

      {/* Oversized watermark mark */}
      <div className="pointer-events-none absolute -bottom-24 -right-16 opacity-[0.05]">
        <Mark variant="dark" size={460} />
      </div>

      <div className="shell relative py-20">
        <div className="grid gap-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo variant="dark" size={30} />
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
          <p>
            © {new Date().getFullYear()} {company.legal}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="transition-colors hover:text-white/70">
              Privacy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-white/70">
              Terms
            </Link>
            <span>Photography via Pexels</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
