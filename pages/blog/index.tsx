import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { InferGetStaticPropsType } from 'next';

import Head from 'next/head';
import UnderlinedLink from 'components/UnderlinedLink';
import formatDate from 'utils/formatDate';

type UnsortedPost = {
  title: string,
  date: Date,
  slug: string
}

type Post = {
  title: string,
  date: string,
  slug: string
}

export const getStaticProps = async () => {
  const filenames = fs.readdirSync(path.join('data/posts'));
  const unsortedPosts: UnsortedPost[] = [];
  filenames.forEach((filename) => {
    const markdownWithMeta = fs.readFileSync(path.join(
      'data/posts',
      filename,
    ), 'utf-8');
    const { data: frontMatter } = matter(markdownWithMeta);
    unsortedPosts.push({
      title: frontMatter.title,
      date: frontMatter.date,
      slug: filename.replace('.mdx', ''),
    });
  });
  const posts: Post[] = JSON.parse(JSON.stringify(
    unsortedPosts.sort((a, b) => b.date.getTime() - a.date.getTime()),
  ));
  return { props: { posts } };
};

const BlogHomePage = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <>
    <Head>
      <title>Blog - Patrick Carneiro - Software Developer</title>
    </Head>
    <div className="flex flex-col items-start gap-4">
      <h1>Blog</h1>
      <p>Dummy posts, for now :)</p>
      <ul>
        {posts.map(({ title, slug, date }) => (
          <li key={slug}>
            <UnderlinedLink href={`/blog/${slug}`}>
              {formatDate(date)}
              {' - '}
              {title}
            </UnderlinedLink>
          </li>
        ))}
      </ul>
    </div>
  </>
);

export default BlogHomePage;
