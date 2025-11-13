'use client';

import { AnimateTextReveal } from '@/components/animations/animate-reveal';
import { SparklesCore } from '@/components/animations/animate-sparkles';
import { useScopedI18n } from '@/locales/client';
import { motion } from '@/providers/framer-provider';
import { AUTHOR } from '@/shared/constants';
import { Code2Icon, SquareStackIcon } from 'lucide-react';
import { nanoid } from 'nanoid';
import Image from 'next/image';

export const About = () => {
  const translation = useScopedI18n('about');

  return (
    <section
      id='about'
      className='relative mx-auto flex min-h-screen w-full max-w-[1280px] flex-col gap-3 pt-5'>
      <div className='mb-6 space-y-6 lg:mb-12'>
        <h2 className='font-slab text-5xl font-bold uppercase leading-relaxed sm:text-5xl lg:text-6xl xl:text-[7rem] 2xl:text-[8rem]'>
          <span>{translation('title')}</span>
        </h2>
        <h3 className='w-full max-w-4xl text-lg font-medium sm:text-xl lg:leading-relaxed'>
          {translation('subtitle')}
        </h3>
      </div>

      <section className='text-center font-sans'>
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
        <AnimateTextReveal inverseDirection>{translation('intro-1')}</AnimateTextReveal>
        <AnimateTextReveal delay={0.4}>{translation('intro-2')}</AnimateTextReveal>
      </section>

      <section className='mt-5 flex flex-wrap items-center justify-center gap-12'>
        <motion.div
          className='base-border group relative grid h-[180px] w-[180px] select-none place-content-center place-items-center gap-3 rounded-xl bg-foreground p-3 font-sans'
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0.4, rotate: 360 }}
          whileInView={{ rotate: 0, opacity: 1 }}>
          <div className='absolute left-0 top-0 h-full w-full'>
            <SparklesCore
              id={nanoid()}
              background='transparent'
              minSize={0.4}
              maxSize={1}
              particleDensity={1200}
              className='h-full w-full'
              particleColor='#E4703180'
            />
          </div>
          <Code2Icon className='h-10 w-10 stroke-primary group-hover:stroke-secondary' />
          <h4 className='font-medium'>{translation('experience-title')}</h4>
          <span className='text-center text-sm font-bold capitalize'>
            {translation('experience-content')}
          </span>
        </motion.div>

        <motion.div
          className='base-border group relative grid h-[180px] w-[180px] select-none place-content-center place-items-center gap-3 rounded-xl bg-foreground p-3 font-sans'
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0.4, rotate: 360 }}
          whileInView={{ rotate: 0, opacity: 1 }}>
          <div className='absolute left-0 top-0 h-full w-full'>
            <SparklesCore
              id={nanoid()}
              background='transparent'
              minSize={0.4}
              maxSize={1}
              particleDensity={1200}
              className='h-full w-full'
              particleColor='#E4703180'
            />
          </div>
          <SquareStackIcon className='h-10 w-10 stroke-primary group-hover:stroke-secondary' />
          <h4 className='font-medium'>{translation('projects-title')}</h4>
          <span className='text-center text-sm font-bold capitalize'>
            {translation('projects-content')}
          </span>
        </motion.div>
      </section>
    </section>
  );
};
