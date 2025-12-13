'use client';

import { generateColor } from '@/components/ui/badge';
import { SectionHeader } from '@/components/ui/section-header';
import { useScopedI18n } from '@/locales/client';
import { useWindowSize } from '@uidotdev/usehooks';
import { Code2Icon, SquareStackIcon } from 'lucide-react';
import dynamic from 'next/dynamic';
import * as React from 'react';

const GlowCard = dynamic(
  () => import('@/components/glow-card').then((mod) => mod.GlowCard),
  { ssr: false }
);
const StackCarousel = dynamic(
  () => import('@/components/stack-carousel').then((mod) => mod.StackCarousel),
  { ssr: false }
);
const SparklesCore = dynamic(
  () => import('@/components/animations/animate-sparkles').then((mod) => mod.SparklesCore),
  { ssr: false }
);

const About = () => {
  const translation = useScopedI18n('about');

  const windowSize = useWindowSize();
  const enableAnimations = React.useMemo(
    () => !!windowSize?.width && windowSize.width >= 768,
    [windowSize]
  );

  const cards = [
    {
      title: translation('experience-title'),
      content: translation('experience-content'),
      icon: <Code2Icon className={'h-auto w-8'} color={generateColor() as string} />
    },
    {
      title: translation('projects-title'),
      content: translation('projects-content'),
      icon: <SquareStackIcon className={'h-auto w-8'} color={generateColor() as string} />
    }
  ];

  return (
    <>
      <section
        id='about'
        className='relative mx-auto flex min-h-screen w-full max-w-[1280px] flex-col gap-12 px-4 pt-5'>
        <SectionHeader title={translation('title')} description={translation('subtitle')} />

        <div className='flex flex-wrap items-center justify-center gap-12'>
          {cards.map((item, idx) => (
            <div className='base-border rounded-xl p-1' key={idx}>
              <div
                key={idx}
                className='group relative flex w-full select-none items-center gap-3 rounded-xl bg-foreground p-8 font-sans'>
                <div className='flex items-center gap-2 border-r border-font/20 pr-4'>
                  {item.icon}
                  <h4 className='font-slab text-xl font-bold uppercase'>{item.title}</h4>
                </div>
                <span className='text-center text-lg font-bold uppercase text-font/60'>
                  {item.content}
                </span>
              </div>
            </div>
          ))}
        </div>

        <section
          className={'flex flex-wrap items-center justify-center gap-12 self-center'}>
          <section className='space-y-12'>
            <p className='w-full max-w-xl space-y-6 text-pretty text-justify text-lg font-medium sm:text-xl lg:leading-relaxed'>
              {translation('intro-1')}
            </p>
          </section>
          <section className='space-y-12'>
            <p className='w-full max-w-xl space-y-6 text-pretty text-justify text-lg font-medium sm:text-xl lg:leading-relaxed'>
              {translation('intro-2')}
            </p>
          </section>
        </section>

        <StackCarousel />
      </section>
    </>
  );
};

export default React.memo(About);
