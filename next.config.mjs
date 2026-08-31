/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Several lockfiles live above this project; pin tracing to this app.
  outputFileTracingRoot: import.meta.dirname,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  /**
   * Every URL this site has ever published and then moved, kept alive.
   *
   * `/website` was a standalone page before it became a product. The inventory
   * and booking products, and the four posts written about them, were retired
   * when the catalogue collapsed onto Dashboards & Databases; their URLs are
   * indexed, so they land on the nearest surviving page rather than a 404.
   * Each entry is mirrored into the /zh tree, because both were published.
   */
  async redirects() {
    const moved = [
      ['/website', '/products/website'],

      // Retired products.
      ['/products/inventory', '/products/dashboards'],
      ['/products/booking', '/products/dashboards'],

      // Retired posts, pointed at the piece that replaced each argument.
      ['/blog/how-to-improve-stock-accuracy', '/blog/when-a-spreadsheet-stops-being-enough'],
      ['/blog/true-cost-of-no-shows', '/blog/what-a-broken-spreadsheet-costs'],
      [
        '/blog/multi-resource-scheduling-explained',
        '/blog/industry-dashboards-versus-generic-ones',
      ],
      ['/blog/two-week-erp-rollout-plan', '/blog/two-week-rollout-plan'],
    ];

    return moved.flatMap(([source, destination]) => [
      { source, destination, permanent: true },
      { source: `/zh${source}`, destination: `/zh${destination}`, permanent: true },
    ]);
  },
};

export default nextConfig;
