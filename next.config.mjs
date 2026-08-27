/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Several lockfiles live above this project; pin tracing to this app.
  outputFileTracingRoot: import.meta.dirname,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  /**
   * Website & integrations used to be a standalone page at /website. It is a
   * product now, so both trees move to /products/website permanently rather
   * than leaving an indexed URL to 404.
   */
  async redirects() {
    return [
      { source: '/website', destination: '/products/website', permanent: true },
      { source: '/zh/website', destination: '/zh/products/website', permanent: true },
    ];
  },
};

export default nextConfig;
