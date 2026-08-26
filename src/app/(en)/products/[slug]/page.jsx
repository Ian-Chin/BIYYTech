import { Page, meta, staticParams } from '@/app/_pages/product';

export const generateStaticParams = staticParams;

export const generateMetadata = ({ params }) => meta({ params, locale: 'en' });

export default function Route({ params }) {
  return <Page params={params} locale='en' />;
}
