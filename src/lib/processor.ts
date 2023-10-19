import { join } from 'node:path';
import matter from 'gray-matter';
import type { Post } from '@/types';
import { readFileSync, readdirSync } from 'node:fs';
import remarkToc from 'remark-toc';
import { remark } from 'remark';

const postsDir = join(process.cwd(), '/src/data/posts');

export async function generateTableOfContents(slug: string) {
  try {
    const { content } = getPost(slug);
    const file = await remark()
      .use(remarkToc, { tight: true, heading: 'Table of Contents' })
      .process(readFileSync(join(postsDir, `${slug.replaceAll('-', ' ')}.md`)));

    return String(file);
  } catch (error) {
    Promise.reject(error);
  }
}

export function getPost(slug: string): Post {
  const file = readFileSync(join(postsDir, `${slug.replaceAll('-', ' ')}.md`));
  const { data, content } = matter(file);
  return { ...data, content, slug } as Post;
}

export function getPosts(withContent?: boolean): Array<Post> {
  const filesNames: string[] = readdirSync(postsDir);
  return filesNames
    .map((fileName) => {
      const slug: string = fileName.replace('.md', '').replaceAll(' ', '-');

      const readFiles: Buffer = readFileSync(join(postsDir, fileName));
      const { data, content } = matter(readFiles);

      const result = withContent
        ? { slug, ...data, content }
        : { slug, ...data };
      
        return result as Post;
    })
    .sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
}

export function getPaths(): Array<{ params: { slug: string } }> {
  const files = readdirSync(postsDir);
  return files.map((filename) => ({
    params: {
      slug: filename.replace('.md', '').replaceAll(' ', '-')
    }
  }));
}
