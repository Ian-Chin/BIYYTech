import { Page, meta } from '@/app/_pages/legal';

export const metadata = meta('terms', 'zh');

export default function Route() {
  return <Page slug="terms" locale='zh' />;
}
