import { notFound } from 'next/navigation';
import JsonLd from '@/components/JsonLd';
import PostView from '@/components/PostView';
import { bySlug, getContent } from '@/lib/content';
import { crumb } from '@/lib/meta';
import { articleLd, breadcrumbLd, faqLd, graph, pageMeta } from '@/lib/seo';
import { posts } from '@/lib/site';

/** Slugs are locale-independent: a post keeps its URL in both languages. */
export const staticParams = () => posts.map((p) => ({ slug: p.slug }));

export async function meta({ params, locale }) {
  const { slug } = await params;
  const post = bySlug(getContent(locale).posts, slug);
  if (!post) return {};

  return {
    ...pageMeta({
      title: post.title,
      description: post.excerpt,
      path: `/blog/${post.slug}`,
      image: post.image,
      type: 'article',
      locale,
    }),
    authors: [{ name: post.author.name }],
    other: {
      'article:published_time': post.date,
      'article:modified_time': post.updated || post.date,
    },
  };
}

export async function Page({ params, locale }) {
  const { slug } = await params;
  const post = bySlug(getContent(locale).posts, slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd
        data={graph(
          articleLd(post, locale),
          faqLd(post.faq),
          breadcrumbLd(
            [
              { name: crumb('home', locale), path: '/' },
              { name: crumb('blog', locale), path: '/blog' },
              { name: post.title, path: `/blog/${post.slug}` },
            ],
            locale,
          ),
        )}
      />

      <PostView slug={post.slug} />
    </>
  );
}
