import { FeedGenerator } from '@/lib/feed-generator';
import { getPosts } from '@/lib/posts-processor';
import type { PageParams } from '@/types';
import { setStaticParamsLocale } from 'next-international/server';
import BlogHero from './_components/hero';
import PostList from './_components/post-list';

export default async function Page(props: PageParams) {
  const { locale } = await props.params;
  const posts = getPosts();

  // Set locale for static params
  setStaticParamsLocale(locale);

  // Generate RSS feed
  const feed = new FeedGenerator();
  feed.generate();

  return (
    <main className='flex w-full flex-col gap-24'>
      <BlogHero />
      <PostList locale={locale} posts={posts} />
    </main>
  );
}
