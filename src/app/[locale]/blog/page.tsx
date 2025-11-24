import { FeedGenerator } from '@/lib/feed-generator';
import { getPosts } from '@/lib/posts-processor';
import type { PageParams } from '@/types';
import { RssIcon } from 'lucide-react';
import { setStaticParamsLocale } from 'next-international/server';
import { PostCard } from './_components/post-card';

export default async function Page(props: PageParams) {
  const params = await props.params;

  const { locale } = params;

  setStaticParamsLocale(locale);

  new FeedGenerator().generate();
  const posts = getPosts();

  return (
    <section className='relative z-50 mx-auto mb-12 mt-12 flex w-full max-w-[780px] flex-col gap-3 border-t-font/10 bg-background/50 p-5 px-2 font-sans backdrop-blur-sm after:absolute after:right-[50%] after:top-0 after:-z-50 after:h-[1px] after:w-[1px] after:rounded-full after:bg-primary after:shadow-[0_0_180px_140px_rgba(228,113,49,0.8)]'>
      <section className='mt-5 w-full border-b-[2px] border-dashed border-font px-3 pb-7'>
        <h1 className='relative py-5 font-sans text-4xl font-medium'>
          Codenut<i className='text-primary'>.dev</i> Blog
          <a
            href='/rss/feed.en.xml'
            target='_blank'
            title='RSS Feed'
            className='base-corner-button base-border absolute -right-5 top-0 h-7 w-7 animate-pulse'>
            <RssIcon strokeWidth={4} className='stroke-primary' />
          </a>
        </h1>

        <div className='flex flex-col gap-2 font-sans font-medium'>
          <h3 className='mb-2 font-sans text-xl font-medium'>
            👋 Hello, Welcome to Kain's Universe!
          </h3>
          <p>
            You've stumbled upon Kain's little corner of the internet, where everything runs
            rampant and normal is just a unpredictable wave on a ocean.
          </p>
          <p>
            Web development is my favorite flavour and I love to code. I blog about coding,
            software, my projects and works. Feel free to dive in, here every visit is an
            adventure, a glance on exploration!
          </p>
        </div>
      </section>

      <article className='w-full'>
        <section className='flex w-full flex-col gap-5'>
          {posts.map((post, index) => (
            <PostCard key={index} post={post} locale={locale} />
          ))}
        </section>
      </article>
    </section>
  );
}
