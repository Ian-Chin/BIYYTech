import { Page, meta } from '@/app/_pages/legal';

export const metadata = meta('terms', 'ms');

export default function Route() {
  return <Page slug="terms" locale='ms' />;
}
