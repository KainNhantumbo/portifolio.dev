import { join } from 'node:path';
import matter from 'gray-matter';
import type { Post } from '@/types';
import { readFileSync, readdirSync } from 'node:fs';

const postsDir = join(process.cwd(), '/src/data/docs');

export function getPost(slug: string): Post {
  const file = readFileSync(join(postsDir, `${slug}.md`));
  const { data, content } = matter(file);
  return { ...data, content, slug } as Post;
}

export function getPosts(): Array<Post> {
  const filesNames: string[] = readdirSync(postsDir);
  return filesNames
    .map((fileName) => {
      const slug: string = fileName.replace('.md', '').toLowerCase();
      const readFiles: Buffer = readFileSync(join(postsDir, fileName));
      const { data } = matter(readFiles);
      return { slug, ...data } as Post;
    })
    .sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
}

export function getPaths(): Array<{ params: { slug: string } }> {
  const files = readdirSync(postsDir);
  return files.map((filename) => ({
    params: { slug: filename.replace('.md', '').toLowerCase() }
  }));
}
