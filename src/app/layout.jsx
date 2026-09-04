import './globals.css';
import Script from 'next/script';
import JsonLd from '@/components/JsonLd';
import Splash, { LangBoot, SplashBoot } from '@/components/Splash';
import { pageCopy } from '@/lib/meta';
import { OG_IMAGE, SITE_URL, graph, hreflang, organizationLd, websiteLd } from '@/lib/seo';
import { company } from '@/lib/site';

const { title: TITLE, description: DESCRIPTION } = pageCopy('home', 'en');

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: '%s | BIYY Tech' },
  description: DESCRIPTION,
  applicationName: company.name,
  authors: [{ name: company.legal, url: SITE_URL }],
  creator: company.legal,
  publisher: company.legal,
  category: 'Business software',
  keywords: [
    'operations dashboard for small business',
    'replace spreadsheets with a database',
    'custom business dashboard Malaysia',
    'SME database design',
    'spreadsheet to database migration',
    'industry-specific dashboards',
    'business intelligence for SMEs',
    'multi-outlet reporting software',
    'BIYY Tech',
  ],
  alternates: { canonical: SITE_URL, languages: hreflang('/') },
  // Declared here rather than through app/icon.png and app/favicon.ico, because
  // the file conventions advertise a .ico as `sizes="16x16"` and leave the 192px
  // art as the only other candidate — so a browser asking for 32px downscales
  // the big one and the hairline mark turns to mush. Every size a tab actually
  // requests gets an exact match below; see scripts/generate-icons.mjs.
  icons: {
    icon: [
      { url: '/brand/yiy-icon-16.png', type: 'image/png', sizes: '16x16' },
      { url: '/brand/yiy-icon-24.png', type: 'image/png', sizes: '24x24' },
      { url: '/brand/yiy-icon-32.png', type: 'image/png', sizes: '32x32' },
      { url: '/brand/yiy-icon-48.png', type: 'image/png', sizes: '48x48' },
      { url: '/brand/yiy-icon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/favicon.ico', type: 'image/x-icon', sizes: '16x16 24x24 32x32 48x48 64x64' },
    ],
    apple: [{ url: '/brand/apple-touch-icon.png', type: 'image/png', sizes: '180x180' }],
  },
  verification: { google: 'ActlpOrwMMBHiVILbLWf4zDAkoZjjrbg_t94-w0lPME' },
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
        <LangBoot />
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
      {/* One <html> for both language trees, so `lang` is written as English
          here and corrected before paint by the Chinese tree's shell. The
          chrome (nav, footer, assistant, consent) lives in that shell rather
          than here, because it has to be rendered in the page's own language
          on the server. */}
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-EL0RN1R673"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-EL0RN1R673');
          `}
        </Script>
        <Splash />
        {children}
      </body>
    </html>
  );
}
