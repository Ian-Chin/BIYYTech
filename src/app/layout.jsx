import './globals.css';
import BackToTop from '@/components/BackToTop';
import Chatbot from '@/components/Chatbot';
import CookieConsent from '@/components/CookieConsent';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import Nav from '@/components/Nav';
import Splash, { SplashBoot } from '@/components/Splash';
import { LocaleProvider } from '@/lib/i18n';
import { OG_IMAGE, SITE_URL, graph, organizationLd, websiteLd } from '@/lib/seo';
import { company } from '@/lib/site';

const TITLE = 'YiY Tech: inventory and booking software for SMEs';
const DESCRIPTION =
  'YiY Tech builds live inventory and stock management for retail and wholesale SMEs, and a booking and operations dashboard for clinics, salons, tuition centres and property teams. Flat monthly pricing per outlet, live in two weeks.';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: '%s | YiY Tech' },
  description: DESCRIPTION,
  applicationName: company.name,
  authors: [{ name: company.legal, url: SITE_URL }],
  creator: company.legal,
  publisher: company.legal,
  category: 'Business software',
  keywords: [
    'inventory management software',
    'stock management software for SMEs',
    'multi-outlet stock control',
    'booking system for clinics',
    'salon booking software',
    'tuition centre management software',
    'appointment scheduling software Malaysia',
    'operations dashboard for small business',
    'YiY Tech',
  ],
  alternates: { canonical: SITE_URL },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: company.name,
    locale: 'en_MY',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: company.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
};

export const viewport = {
  themeColor: '#0B0B0C',
};

export default function RootLayout({ children }) {
  // suppressHydrationWarning: the splash boot script writes data-splash on
  // <html> before React hydrates, which is a deliberate mismatch. The flag is
  // scoped to this element's own attributes and nothing else.
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Must run before the first paint: it decides whether the splash is
            shown at all, and nothing below should render over a bare page. */}
        <SplashBoot />
        <link
          rel="preload"
          href="/fonts/GeneralSans-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/GeneralSans-Semibold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* Points model crawlers at a plain-text summary of the site, and at
            the full corpus behind it. */}
        <link rel="llms" type="text/plain" href="/llms.txt" />
        <link rel="alternate" type="text/plain" title="Full site content" href="/llms-full.txt" />
        <link
          rel="alternate"
          type="application/rss+xml"
          title={`${company.name} blog`}
          href="/blog/rss.xml"
        />
        <JsonLd data={graph(organizationLd(), websiteLd())} />
      </head>
      {/* The pages are statically generated, so `lang` starts as English and is
          corrected on the client once the stored locale is known. */}
      <body>
        <Splash />
        <LocaleProvider>
          <Nav />
          <main>{children}</main>
          <Footer />
          <BackToTop />
          <Chatbot />
          <CookieConsent />
        </LocaleProvider>
      </body>
    </html>
  );
}
