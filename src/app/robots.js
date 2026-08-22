export default function robots() {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: 'https://yiy.tech/sitemap.xml',
  };
}
