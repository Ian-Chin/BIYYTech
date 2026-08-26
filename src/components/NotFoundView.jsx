'use client';

import Link from '@/components/Link';
import { useLocale } from '@/lib/i18n';

export default function NotFoundView() {
  const { t } = useLocale();

  return (
    <section className="relative flex min-h-[70svh] items-center overflow-hidden bg-paper">
      <div className="shell relative py-32">
        <p className="font-mono text-xs tracking-[0.2em] text-ink-faint">404</p>
        <h1 className="display mt-5 max-w-[14ch] text-[clamp(2.2rem,6vw,4.5rem)]">
          {t('notFound.title')}
        </h1>
        <p className="mt-6 max-w-md text-base leading-relaxed text-ink-mute">
          {t('notFound.body')}
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Link href="/" className="btn-primary">
            {t('notFound.home')}
          </Link>
          <Link href="/contact" className="btn-ghost">
            {t('notFound.contact')}
          </Link>
        </div>
      </div>
    </section>
  );
}
