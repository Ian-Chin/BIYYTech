import { Page, meta } from '@/app/_pages/legal';

export const metadata = meta('privacy', 'en');

export default function Route() {
  return <Page slug="privacy" locale='en' />;
}
