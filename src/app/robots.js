import { SITE_URL } from '@/lib/seo';

/**
 * Preview deployments (Vercel branch and PR URLs) are a full copy of the site
 * on a different host. Left indexable they duplicate every page and compete
 * with the canonical domain, so they are excluded outright and advertise no
 * sitemap. Production points at SITE_URL, which is also what every canonical
 * tag uses, so robots.txt and the sitemap can never disagree about the host.
 */
export default function robots() {
  if (process.env.VERCEL_ENV === 'preview') {
    return { rules: [{ userAgent: '*', disallow: '/' }] };
  }

  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
