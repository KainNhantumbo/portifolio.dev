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
      icon: <Code2Icon className={'h-auto w-24'} color={generateColor() as string} />,
      color: 'blue' as const
    },
    {
      title: translation('projects-title'),
      content: translation('projects-content'),
      icon: <SquareStackIcon className={'h-auto w-24'} color={generateColor() as string} />,
      color: 'green' as const
    }
  ];

  return (
    <>
      <section
        id='about'
        className='relative mx-auto flex min-h-screen w-full max-w-[1280px] flex-col gap-12 px-4 pt-5'>
        <SectionHeader title={translation('title')} description={translation('subtitle')} />

        <section className={'grid grid-cols-1 gap-6 lg:grid-cols-2'}>
          <section className='space-y-12'>
            <div className='w-full max-w-xl space-y-6 text-lg font-medium sm:text-xl lg:leading-relaxed'>
              <p>{translation('intro-1')}</p>
              <p>{translation('intro-2')}</p>
            </div>
          </section>

          <div className='flex flex-wrap items-center justify-center gap-12 sm:justify-start'>
            {cards.map((item, idx) => (
              <GlowCard
                enableMouseEffect={enableAnimations}
                key={idx}
                width={'100%'}
                height={'100%'}
                glowColor={item.color}
                className='group relative grid aspect-square max-h-[280px] w-full select-none place-content-center place-items-center gap-3 rounded-xl p-8 font-sans md:max-w-[280px]'>
                <SparklesCore
                  background='transparent'
                  minSize={0.4}
                  maxSize={4}
                  particleDensity={100}
                  className='absolute left-0 top-0 -z-50 h-full w-full'
                  particleColor={generateColor() as string}
                />
                {item.icon}
                <h4 className='text-3xl font-bold'>{item.title}</h4>
                <span className='text-center text-lg font-bold uppercase'>
                  {item.content}
                </span>
              </GlowCard>
            ))}
          </div>
        </section>

        <StackCarousel />
      </section>
    </>
  );
};

export default React.memo(About);
