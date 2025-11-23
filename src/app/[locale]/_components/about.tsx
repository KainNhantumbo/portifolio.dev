'use client';

import { AnimateTextReveal } from '@/components/animations/animate-reveal';
import { SparklesCore } from '@/components/animations/animate-sparkles';
import { StackCarousel } from '@/components/stack-carousel';
import { SectionHeader } from '@/components/ui/section-header';
import { useScopedI18n } from '@/locales/client';
import { motion } from '@/providers/framer-provider';
import { AUTHOR } from '@/shared/constants';
import { Code2Icon, SquareStackIcon } from 'lucide-react';
import { nanoid } from 'nanoid';
import Image from 'next/image';

export const About = () => {
  const translation = useScopedI18n('about');

  const cards = [
    {
      title: translation('experience-title'),
      content: translation('experience-content'),
      icon: <Code2Icon className='h-10 w-10 stroke-primary group-hover:stroke-secondary' />
    },
    {
      title: translation('projects-title'),
      content: translation('projects-content'),
      icon: (
        <SquareStackIcon className='h-10 w-10 stroke-primary group-hover:stroke-secondary' />
      )
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
                <motion.div
                  key={idx}
                  className='group relative grid aspect-square w-[220px] select-none place-content-center place-items-center gap-3 rounded-xl bg-foreground p-8 font-sans'
                  whileHover={{
                    rotate: '-2.5deg',
                    scale: 1.1
                  }}>
                  <SparklesCore
                    id={nanoid()}
                    background='transparent'
                    minSize={0.4}
                    maxSize={1}
                    particleDensity={500}
                    className='absolute left-0 top-0 h-full w-full'
                    particleColor='#E4703180'
                  />
                  {item.icon}
                  <h4 className='text-xl font-medium'>{item.title}</h4>
                  <span className='text-md text-center font-bold capitalize'>
                    {item.content}
                  </span>
                </motion.div>
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
