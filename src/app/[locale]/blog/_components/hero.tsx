import { RssIcon } from 'lucide-react';

export function BlogHero() {
  return (
    <section className='mt-5 min-h-screen w-full px-3 pb-7'>
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
  );
}
