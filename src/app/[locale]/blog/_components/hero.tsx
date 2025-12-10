'use client';

import { AnimateColourfulText } from '@/components/animations/animate-colorful-text';
import { AnimateTextFade } from '@/components/animations/animate-text-fade';
import { AnimateVortex } from '@/components/animations/animate-vortex';
import { SectionHeader } from '@/components/ui/section-header';
import { RssIcon } from 'lucide-react';
import * as React from 'react';

function BlogHero() {
  return (
    <section className='relative mt-5 grid min-h-screen w-full grid-cols-1 place-items-center overflow-hidden px-3 pb-7'>
      <AnimateVortex
        rangeY={400}
        particleCount={80}
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

        <div className='w-full max-w-4xl space-y-6 font-medium'>
          <h3 className='mb-2'>
            <AnimateColourfulText
              text="Hello, Welcome to Kain's Universe!"
              className='font-sans text-2xl font-bold uppercase leading-relaxed tracking-wide'
            />
          </h3>
          <AnimateTextFade
            direction='up'
            delay={2000}
            runOnce={false}
            className='text-xl leading-relaxed'>
            You've stumbled upon Kain's little corner of the internet, where everything runs
            rampant and normal is just a unpredictable wave on a ocean.
          </AnimateTextFade>
          <AnimateTextFade
            direction='up'
            delay={3000}
            runOnce={false}
            className='text-xl leading-relaxed'>
            Web development is my favorite flavour and I love to code. I blog about coding,
            software, my projects and works. Feel free to dive in, here every visit is an
            adventure, a glance on exploration!
          </AnimateTextFade>
        </div>
      </div>
    </section>
  );
}

export default React.memo(BlogHero);
