'use client';

import NextLink from 'next/link';
import { useLocale } from '@/lib/i18n';

/**
 * next/link with the locale prefix applied.
 *
 * Every internal href in this codebase is written locale-independently
 * (`/contact`, `/products/booking`, `/#products`) because those paths live in
 * the content files and are shared by both languages. This wraps the one place
 * that has to know which tree it is rendering in, so no component has to
 * remember. Anything that is not a site-root path — mailto:, tel:, http(s), a
 * bare #anchor — is passed through untouched.
 *
 * Components import this instead of next/link. That is the whole difference.
 */
export default function Link({ href, ...rest }) {
  const { path } = useLocale();
  return <NextLink href={path(href)} {...rest} />;
}
