/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Several lockfiles live above this project; pin tracing to this app.
  outputFileTracingRoot: import.meta.dirname,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
