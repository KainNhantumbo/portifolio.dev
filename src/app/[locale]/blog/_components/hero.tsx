'use client';

import { AnimateVortex } from '@/components/animations/animate-vortex';
import { SectionHeader } from '@/components/ui/section-header';
import { RssIcon } from 'lucide-react';
import { useTheme } from 'next-themes';

export function BlogHero() {
  const { theme } = useTheme();
  return (
    <section className='relative mt-5 grid min-h-screen w-full grid-cols-1 place-items-center overflow-hidden px-3 pb-7'>
      <AnimateVortex
        rangeY={800}
        particleCount={220}
        baseHue={220}
        containerClassName='absolute left-0 top-0 flex h-screen w-full'
      />

      <div className='z-50 mx-auto mt-5 flex w-full max-w-[1280px] flex-col gap-3 px-3 py-5'>
        <h1 className='relative py-5 font-sans text-4xl font-medium'>
          <SectionHeader title='Codenut.dev Blog' description='' />
          <a
            href='/rss/feed.en.xml'
            target='_blank'
            title='RSS Feed'
            className='base-border base-border absolute -right-5 top-0 grid animate-pulse cursor-pointer place-content-center rounded-full p-2'>
            <RssIcon strokeWidth={4} className='h-auto w-8 stroke-primary' />
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
      </div>
    </section>
  );
}
