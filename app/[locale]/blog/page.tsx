import FeedGenerator from '@/lib/feed';
import { getPosts } from '@/lib/processor';
import { formatDate } from '@/lib/time';
import { PageParams } from '@/types';
import { RssIcon } from 'lucide-react';
import { setStaticParamsLocale } from 'next-international/server';
import Link from 'next/link';

export default function Page({ params: { locale } }: PageParams) {
  setStaticParamsLocale(locale);

  new FeedGenerator().generate();
  const posts = getPosts();

  return (
    <section className='px-2 border-t-font/10  mb-12 w-full max-w-[780px] flex flex-col gap-3 mx-auto mt-12 p-5 z-50 font-sans relative backdrop-blur-sm bg-background/50 after:absolute after:w-[1px] after:h-[1px] after:right-[50%] after:top-0 after:rounded-full after:-z-50 after:bg-primary after:shadow-[0_0_180px_140px_rgba(228,113,49,0.8)]'>
      <section className='w-full px-3 pb-7 border-dashed border-b-[2px] border-font mt-5'>
        <h1 className='py-5 font-medium text-4xl font-sans-display relative'>
          Codenut<i className='text-primary'>.dev</i> Blog
          <a
            href='/rss/feed.en.xml'
            target='_blank'
            title='RSS Feed'
            className='base-corner-button absolute top-0 -right-5 base-border animate-pulse w-7 h-7'>
            <RssIcon strokeWidth={4} className='stroke-primary' />
          </a>
        </h1>

        <div className='font-sans-body font-medium flex flex-col gap-2'>
          <h3 className='font-sans-display text-xl mb-2 font-medium'>
            👋 Hello, Welcome to Kain's Universe!
          </h3>
          <p>
            You've stumbled upon Kain's little corner of the internet, where
            everything runs rampant and normal is just a unpredictable wave on a
            ocean.
          </p>
          <p>
            Web development is my favorite flavour and I love to code. I blog
            about coding, software, my projects and works. Feel free to dive in,
            here every visit is an adventure, a glance on exploration!
          </p>
        </div>
      </section>

      <article className='w-full'>
        <section className='w-full flex flex-col gap-5'>
          {posts.map((post, index) => (
            <Link
              href={`/${locale}/blog/post/${post.slug}`}
              locale={'en'}
              className='group hover:bg-foreground border-[1px] border-transparent hover:base-border transition-colors rounded-xl p-4 flex flex-col gap-3 cursor-pointer'
              key={index.toString()}>
              <div className='flex flex-row justify-between items-center gap-1'>
                <h3 className='base-border rounded-full bg-black text-white font-sans-display font-medium px-3 uppercase text-[.95rem]'>
                  {post.topic}
                </h3>
                <h4 className='font-sans-body font-medium text-xs uppercase'>
                  {formatDate(post.createdAt)}
                </h4>
              </div>

              <h3 className="font-slab font-medium underline underline-offset-4 decoration-dashed pl-5 relative text-[1.4rem] before:absolute before:content-[''] before:bg-primary before:top-[calc(50%_-_2px)] before:left-0 before:w-2 before:h-2 before:rounded-lg  before:z-50 group-hover:text-blue-400 group-hover:transition-colors">
                {post.title}
              </h3>
              <p className='excerpt font-sans-body  font-medium'>
                {post.excerpt}
              </p>
            </Link>
          ))}
        </section>
      </article>
    </section>
  );
}
