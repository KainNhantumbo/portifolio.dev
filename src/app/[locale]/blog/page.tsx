import { FeedGenerator } from '@/lib/feed-generator';
import { getPosts } from '@/lib/posts-processor';
import type { PageParams } from '@/types';
import { setStaticParamsLocale } from 'next-international/server';
import { BlogHero } from './_components/hero';
import { PostCard } from './_components/post-card';

export default async function Page(props: PageParams) {
  const { locale } = await props.params;
  const posts = getPosts();

  // Set locale for static params
  setStaticParamsLocale(locale);

  // Generate RSS feed
  const feed = new FeedGenerator();
  feed.generate();

  return (
    <section className='flex w-full flex-col gap-24'>
      <BlogHero />

      <article className='relative mx-auto flex min-h-screen w-full max-w-[1280px] flex-col items-center gap-3 pt-5'>
        <section className='grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
          {posts.map((post, index) => (
            <PostCard key={index} post={post} locale={locale} />
          ))}
        </section>
      </article>
    </section>
  );
}
