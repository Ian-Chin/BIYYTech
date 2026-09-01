import { Page, meta, staticParams } from '@/app/_pages/post';

export const generateStaticParams = staticParams;

export const generateMetadata = ({ params }) => meta({ params, locale: 'ms' });

export default function Route({ params }) {
  return <Page params={params} locale='ms' />;
}
