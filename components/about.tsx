'use client';

import { useScopedI18n } from '@/locales/client';
import { motion } from '@/providers/framer-provider';
import { Code2Icon, SquareStackIcon, UserIcon } from 'lucide-react';
import Image from 'next/image';
import { AUTHOR } from '../shared/constants';

export const About = () => {
  const translation = useScopedI18n('about');

  return (
    <section
      id='about'
      className='w-full max-w-[700px] flex flex-col items-center gap-3 pt-5 mx-auto border-solid border-t-[1px] border-font/10'>
      <h2 className='base-section-title'>
        <UserIcon />
        <span>{translation('title')}</span>
      </h2>
      <section className='text-center font-sans'>
        <div className='flex justify-between items-center gap-5 max-w-md my-5 mx-auto max-[420px]:flex-col-reverse max-[420px]:justify-center max-[420px]:text-center max-[420px]:mb-[5px]'>
          <div>
            <h3 className='text-left font-semibold text-3xl'>Kain Nhantumbo</h3>
            <p className='mb-3 font-medium text-left'>
              {translation('subtitle')}
            </p>
          </div>
          <motion.div whileInView={{ rotate: [0, 360] }}>
            <Image
              width={100}
              height={100}
              priority
              src={AUTHOR.picture}
              alt='author image'
              className='border-primary border-[2px] rounded-full border-dashed'
            />
          </motion.div>
        </div>

        <motion.p
          className='mb-2'
          transition={{ delay: 0.2 }}
          initial={{ y: -50 }}
          whileInView={{ y: 0 }}>
          {translation('intro-1')}
        </motion.p>
        <motion.p
          transition={{ delay: 0.4 }}
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}>
          {translation('intro-2')}
        </motion.p>
      </section>

      <section className='flex flex-wrap items-center justify-center gap-12 mt-5'>
        <motion.div
          className='grid place-content-center place-items-center w-[180px] h-[180px] gap-3 bg-foreground rounded-xl base-border font-sans p-3 select-none group'
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0.4, rotate: 360 }}
          whileInView={{ rotate: 0, opacity: 1 }}>
          <Code2Icon className='stroke-primary group-hover:stroke-secondary w-10 h-10' />
          <h4 className='font-medium'>{translation('experience-title')}</h4>
          <span className='text-sm capitalize text-center'>
            {translation('experience-content')}
          </span>
        </motion.div>

        <motion.div
          className='grid place-content-center place-items-center w-[180px] h-[180px] gap-3 bg-foreground rounded-xl base-border font-sans p-3 select-none group'
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0.4, rotate: 360 }}
          whileInView={{ rotate: 0, opacity: 1 }}>
          <SquareStackIcon className='stroke-primary group-hover:stroke-secondary w-10 h-10' />
          <h4 className='font-medium'>{translation('projects-title')}</h4>
          <span className='text-sm capitalize text-center'>
            {translation('projects-content')}
          </span>
        </motion.div>
      </section>
    </section>
  );
};
