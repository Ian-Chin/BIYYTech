import { Page, meta } from '@/app/_pages/legal';

export const metadata = meta('privacy', 'ms');

export default function Route() {
  return <Page slug="privacy" locale='ms' />;
}
