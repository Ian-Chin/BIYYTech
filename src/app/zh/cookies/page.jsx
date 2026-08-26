import { Page, meta } from '@/app/_pages/legal';

export const metadata = meta('cookies', 'zh');

export default function Route() {
  return <Page slug="cookies" locale='zh' />;
}
