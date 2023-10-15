import fs from 'node:fs';
import { join } from 'node:path';
import matter from 'gray-matter';
import { Frontmatter, Post } from '@/types';

const postsDir = join(process.cwd(), '/data/docs');

export default class DataProcessor {
  public static post(slug: string): Post {
    const file = fs.readFileSync(join(postsDir, `${slug}.md`));
    const { data, content } = matter(file);
    return { ...data, content, slug } as Post;
  }

  public static posts(): Array<Post> {
    const filesNames: string[] = fs.readdirSync(postsDir);
    return filesNames
      .map((fileName) => {
        const slug: string = fileName.replace('.md', '').toLowerCase();
        const readFiles: Buffer = fs.readFileSync(join(postsDir, fileName));
        const { data } = matter(readFiles);
        data.slug = slug;
        return data as Post;
      })
      .sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
  }

  public static paths(): Array<{ params: { slug: string } }> {
    const files = fs.readdirSync(postsDir);
    return files.map((filename) => ({
      params: { slug: filename.replace('.md', '').toLowerCase() },
    }));
  }
}
