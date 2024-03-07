import { Feed } from 'feed';
import { marked } from 'marked';
import { constants } from '../shared/constants';
import { mkdirSync, writeFileSync } from 'node:fs';
import { getPosts } from './posts-processor';

export class FeedGenerator {
  feed: Feed;

  constructor() {
    const { url, title, authorName, authorEmail, locale, description } = constants;

    this.feed = new Feed({
      title: `${title} Feed`,
      description: description,
      id: url,
      link: url,
      language: locale,
      favicon: `${url}/favicon.png`,
      copyright: `Copyright © ${new Date().getFullYear()} ${title} - All rights reserved.`,
      generator: `Feed for ${description}`,
      updated: new Date(),
      feedLinks: {
        json: `${url}/blog/rss/feed.${locale}.json`,
        rss2: `${url}/blog/rss/feed.${locale}.xml`,
        atom: `${url}/blog/rss/feed.${locale}.xml`
      },
      author: { name: authorName, email: authorEmail, link: url }
    });
  }

  generate(): void {
    const posts = getPosts(true);
    const { url, authorName, locale, authorEmail } = constants;

    for (const post of posts) {
      this.feed.addItem({
        title: post.title,
        id: `${url}/blog/post/${post.slug}`,
        link: `${url}/blog/post/${post.slug}`,
        description: marked(post.excerpt),
        content: marked(post.content),
        category: [{ name: post.topic }],
        date: new Date(post.createdAt),
        author: [
          {
            name: authorName,
            email: authorEmail,
            link: url
          }
        ]
      });
    }

    mkdirSync('./public/rss', { recursive: true });
    writeFileSync(`./public/rss/feed.${locale}.json`, this.feed.json1());
    writeFileSync(`./public/rss/feed.${locale}.xml`, this.feed.rss2());
    writeFileSync(`./public/rss/atom.${locale}.xml`, this.feed.atom1());
  }
}
