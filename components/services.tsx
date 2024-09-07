'use client';

import { useScopedI18n } from '@/locales/client';
import { motion } from '@/providers/framer-provider';
import { Code2Icon, SquareStackIcon, UserIcon } from 'lucide-react';
import Image from 'next/image';
import { AUTHOR } from '../shared/constants';
import { SparklesCore } from './animations/animate-sparkles';
import { AnimateTextReveal } from './animations/animate-reveal';

export const Services = () => {
    const translation = useScopedI18n('services');

  return (
    <section
      id='services'
      className='mx-auto flex w-full  max-w-[780px] flex-col items-center gap-3 border-t-[1px] border-solid border-font/10 pt-5'>
      <h2 className='base-section-title'>
        <UserIcon />
        <span>{translation('title')}</span>
      </h2>
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

      </section>

      <section className='mt-5 flex flex-wrap items-center justify-center gap-12'>
        <motion.div
          className='base-border group relative grid h-[180px] w-[180px] select-none place-content-center place-items-center gap-3 rounded-xl bg-foreground p-3 font-sans'
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0.4, rotate: 360 }}
          whileInView={{ rotate: 0, opacity: 1 }}>
          <div className='absolute left-0 top-0 h-full w-full'>
            <SparklesCore
              id={crypto.randomUUID()}
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
              id={crypto.randomUUID()}
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
