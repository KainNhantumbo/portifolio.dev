'use client';

import { AnimateTextReveal } from '@/components/animations/animate-reveal';
import { SparklesCore } from '@/components/animations/animate-sparkles';
import { GlowCard } from '@/components/glow-card';
import { StackCarousel } from '@/components/stack-carousel';
import { generateColor } from '@/components/ui/badge';
import { SectionHeader } from '@/components/ui/section-header';
import { useScopedI18n } from '@/locales/client';
import { motion } from '@/providers/framer-provider';
import { AUTHOR } from '@/shared/constants';
import { useWindowSize } from '@uidotdev/usehooks';
import { Code2Icon, SquareStackIcon } from 'lucide-react';
import Image from 'next/image';
import * as React from 'react';

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
        className='relative mx-auto flex min-h-screen w-full max-w-[1280px] flex-col gap-12 pt-5'>
        <SectionHeader title={translation('title')} description={translation('subtitle')} />

        <section className={'grid grid-cols-1 lg:grid-cols-2'}>
          <section className='space-y-12'>
            <div className='w-full max-w-xl space-y-6 text-lg font-medium sm:text-xl lg:leading-relaxed'>
              <AnimateTextReveal inverseDirection>
                {translation('intro-1')}
              </AnimateTextReveal>
              <AnimateTextReveal delay={0.4}>{translation('intro-2')}</AnimateTextReveal>
            </div>

            <div className='flex flex-wrap items-center gap-12'>
              {cards.map((item, idx) => (
                <GlowCard
                  enableMouseEffect={enableAnimations}
                  key={idx}
                  width={280}
                  height={280}
                  glowColor={item.color}
                  className='group relative grid aspect-square w-[220px] select-none place-content-center place-items-center gap-3 rounded-xl p-8 font-sans'>
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

          <section className=''>
            <div className='mx-auto my-5 flex max-w-md items-center justify-between gap-5 max-[420px]:mb-[5px] max-[420px]:flex-col-reverse max-[420px]:justify-center max-[420px]:text-center'>
              <div>
                <h3 className='text-left text-3xl font-semibold'>Kain Nhantumbo</h3>
                <p className='mb-3 text-left font-medium'>{translation('subtitle')}</p>
              </div>
              <motion.div whileInView={{ rotate: [0, 360] }}>
                <Image
                  width={100}
                  height={100}
                  priority
                  src={AUTHOR.picture}
                  alt='author image'
                  className='rounded-full border-[2px] border-dashed border-primary'
                />
              </motion.div>
            </div>
          </section>
        </section>
        <StackCarousel />
      </section>
    </>
  );
};

export default React.memo(About);
