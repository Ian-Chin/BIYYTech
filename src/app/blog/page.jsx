import BlogIndex from '@/components/BlogIndex';
import JsonLd from '@/components/JsonLd';
import { blogLd, breadcrumbLd, graph, pageMeta } from '@/lib/seo';
import { posts } from '@/lib/site';

export const metadata = pageMeta({
  title: 'Blog',
  description:
    'Field notes on inventory accuracy, booking operations and rolling software into small businesses that cannot afford downtime. Written by the people who run the rollouts.',
  path: '/blog',
});

export default function BlogPage() {
  return (
    <>
      <JsonLd
        data={graph(
          blogLd(posts),
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: 'Blog', path: '/blog' },
          ]),
        )}
      />

      <BlogIndex />
    </>
  );
}
