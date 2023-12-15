import Link from 'next/link';
import { getPosts } from '@/lib/processor';
import { _blog as Container } from '@/styles/routes/_blog';
import { formatDate } from '@/lib/time';
import FeedGenerator from '@/lib/feed';
import { RssIcon } from 'lucide-react';
import { getCurrentLocale } from '@/locales/server';

export default function Page() {
  new FeedGenerator().generate();
  const posts = getPosts();
  const locale = getCurrentLocale();

  return (
    <Container className='px-2 border-t-font/10  mb-12 w-full max-w-[780px] flex flex-col gap-3 mx-auto mt-10 p-5 z-50 font-sans relative backdrop-blur-sm bg-background/50 after:absolute after:w-[1px] after:h-[1px] after:right-[50%] after:top-0 after:rounded-full after:-z-50 after:bg-primary after:shadow-[0_0_180px_140px_rgba(228,113,49,0.8)]'>
      <section className='presentation-container border-dashed border-b-[2px] border-font mt-5'>
        <h1 className='py-5 leading-10'>
          Codenut<i className='text-primary'>.dev</i> Blog
          <a href='/rss/feed.en.xml' target='_blank' title='RSS Feed'>
            <RssIcon strokeWidth={4} width={'140px'} className='stroke-primary'/>
          </a>
        </h1>

        <div className='font-sans'>
          <h3>👋 Hello, Welcome to Kain's Universe!</h3>
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

      <article>
        <section className='posts-container'>
          {posts.map((post, index) => (
            <Link
              href={`/${locale}/blog/post/${post.slug}`}
              locale={'en'}
              key={index.toString()}>
              <div className='header-container'>
                <h3 className='base-border rounded-3xl bg-black text-white font-sans-body font-medium px-3 uppercase text-[.95rem]'>{post.topic}</h3>
                <h4 className='font-sans'>
                  <span>{formatDate(post.createdAt)}</span>
                </h4>
              </div>

              <h3 className='title'>{post.title}</h3>
              <p className='excerpt font-sans'>{post.excerpt}</p>
            </Link>
          ))}
        </section>
      </article>
    </Container>
  );
}
