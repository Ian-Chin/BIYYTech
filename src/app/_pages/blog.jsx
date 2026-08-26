import BlogIndex from '@/components/BlogIndex';
import JsonLd from '@/components/JsonLd';
import { getContent } from '@/lib/content';
import { crumb, pageCopy } from '@/lib/meta';
import { blogLd, breadcrumbLd, graph, pageMeta } from '@/lib/seo';

export const meta = (locale) => pageMeta({ ...pageCopy('blog', locale), path: '/blog', locale });

export function Page({ locale }) {
  return (
    <>
      <JsonLd
        data={graph(
          blogLd(getContent(locale).posts, locale),
          breadcrumbLd(
            [
              { name: crumb('home', locale), path: '/' },
              { name: crumb('blog', locale), path: '/blog' },
            ],
            locale,
          ),
        )}
      />

      <BlogIndex />
    </>
  );
}
