import { FeedGenerator } from '@/lib/feed-generator';
import { getPosts } from '@/lib/posts-processor';
import { formatDate } from '@/lib/utils';
import type { PageParams } from '@/types';
import { RssIcon } from 'lucide-react';
import { setStaticParamsLocale } from 'next-international/server';
import Link from 'next/link';

export default async function Page(props: PageParams) {
  const params = await props.params;

  const { locale } = params;

  setStaticParamsLocale(locale);

  new FeedGenerator().generate();
  const posts = getPosts();

  return (
    <section className='relative z-50 mx-auto mb-12 mt-12 flex w-full max-w-[780px] flex-col gap-3 border-t-font/10 bg-background/50 p-5 px-2 font-sans backdrop-blur-sm after:absolute after:right-[50%] after:top-0 after:-z-50 after:h-[1px] after:w-[1px] after:rounded-full after:bg-primary after:shadow-[0_0_180px_140px_rgba(228,113,49,0.8)]'>
      <section className='mt-5 w-full border-b-[2px] border-dashed border-font px-3 pb-7'>
        <h1 className='relative py-5 font-sans-display text-4xl font-medium'>
          Codenut<i className='text-primary'>.dev</i> Blog
          <a
            href='/rss/feed.en.xml'
            target='_blank'
            title='RSS Feed'
            className='base-corner-button base-border absolute -right-5 top-0 h-7 w-7 animate-pulse'>
            <RssIcon strokeWidth={4} className='stroke-primary' />
          </a>
        </h1>

        <div className='flex flex-col gap-2 font-sans-body font-medium'>
          <h3 className='mb-2 font-sans-display text-xl font-medium'>
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
            <Link
              href={`/${locale}/blog/post/${post.slug}`}
              locale={'en'}
              className='hover:base-border group flex cursor-pointer flex-col gap-3 rounded-xl border-[1px] border-transparent p-4 transition-colors hover:bg-foreground'
              key={index.toString()}>
              <div className='flex flex-row items-center justify-between gap-1'>
                <h3 className='base-border rounded-full bg-black px-3 font-sans-display text-[.95rem] font-medium uppercase text-white'>
                  {post.topic}
                </h3>
                <h4 className='font-sans-body text-xs font-medium uppercase'>
                  {formatDate(post.createdAt)}
                </h4>
              </div>

              <h3 className="relative pl-5 font-sans-display text-[1.4rem] font-medium underline decoration-dashed underline-offset-4 before:absolute before:left-0 before:top-[calc(50%_-_2px)] before:z-50 before:h-2 before:w-2 before:rounded-lg before:bg-primary before:content-[''] group-hover:text-blue-400 group-hover:transition-colors">
                {post.title}
              </h3>
              <p className='excerpt font-sans-body font-medium'>{post.excerpt}</p>
            </Link>
          ))}
        </section>
      </article>
    </section>
  );
}
