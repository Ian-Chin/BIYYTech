import { Page, meta } from '@/app/_pages/legal';

export const metadata = meta('terms', 'en');

export default function Route() {
  return <Page slug="terms" locale='en' />;
}
