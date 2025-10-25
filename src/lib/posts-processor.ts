import type { Post } from '@/types';
import { readFileSync, readdirSync } from 'fs';
import matter from 'gray-matter';
import path, { join } from 'path';

const postsDir = path.resolve(process.cwd(), 'src', 'data', 'posts');

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

      const result = withContent ? { ...data, slug, content } : { ...data, slug };

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
