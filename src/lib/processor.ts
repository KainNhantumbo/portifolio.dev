import fs from 'node:fs';
import { join } from 'node:path';
import matter from 'gray-matter';

const postsDir = join(process.cwd(), '/data/docs');

export default class DataProcessor {
  public static post(slug: string) {
    const mdFile: Buffer = fs.readFileSync(join(postsDir, `${slug}.md`));
    const { data: frontMatter, content } = matter(mdFile);
    return { frontMatter, content, slug };
  }

  // reads all markdown files on posts folder
  public static posts() {
    const files: string[] = fs.readdirSync(postsDir);
    return files.map((filename) => {
      const slug: string = filename.replace('.md', '').toLowerCase();
      const readFiles: Buffer = fs.readFileSync(join(postsDir, filename));
      const { data } = matter(readFiles);
      data.slug = slug;
      return data;
    });
  }

  public static paths() {
    const files = fs.readdirSync(postsDir);
    return files.map((filename) => ({
      params: { slug: filename.replace('.md', '').toLowerCase() },
    }));
  }
}
