import { notFound } from 'next/navigation';
import JsonLd from '@/components/JsonLd';
import PostView from '@/components/PostView';
import { articleLd, breadcrumbLd, faqLd, graph, pageMeta } from '@/lib/seo';
import { posts } from '@/lib/site';

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    ...pageMeta({
      title: post.title,
      description: post.excerpt,
      path: `/blog/${post.slug}`,
      image: post.image,
      type: 'article',
    }),
    authors: [{ name: post.author.name }],
    other: {
      'article:published_time': post.date,
      'article:modified_time': post.updated || post.date,
    },
  };
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd
        data={graph(
          articleLd(post),
          faqLd(post.faq),
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: 'Blog', path: '/blog' },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
        )}
      />

      <PostView slug={post.slug} />
    </>
  );
}
