import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { serialize } from 'next-mdx-remote/serialize';

import { MDXRemote } from 'next-mdx-remote';
import { ParsedUrlQuery } from 'querystring';

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync(path.join('data/posts'));
  return {
    paths: files.map((filename) => ({ params: { slug: filename.replace('.mdx', '') } })),
    fallback: false,
  };
};

// TODO: check this
interface Params extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as Params;
  const markdownWithMeta = fs.readFileSync(path.join(
    'data/posts',
    `${slug}.mdx`,
  ), 'utf-8');
  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);
  return {
    props: {
      frontMatter: JSON.parse(JSON.stringify(frontMatter)),
      slug,
      mdxSource,
    },
  };
};

const components = {};

const PostPage = ({ mdxSource }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <div className="flex flex-col gap-3">
    <MDXRemote {...mdxSource} components={components} />
  </div>
);

export default PostPage;
