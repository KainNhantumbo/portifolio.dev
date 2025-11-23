'use client';

import Package from '@/../package.json';
import donutsImage from '@/../public/assets/donuts.png';
import { AnimateGradient } from '@/components/animations/animate-gradient';
import { StarBackground } from '@/components/animations/animate-stars-background';
import { useScopedI18n } from '@/locales/client';
import { constants } from '@/shared/constants';
import { m as motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

export const Footer = () => {
  const translation = useScopedI18n('footer');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <div className='mt-20'>
      <AnimateGradient />
      <footer className='relative min-h-[70vh] w-full'>
        <StarBackground />
        <motion.h3
          ref={ref}
          initial={{ filter: 'blur(20px)', opacity: 0 }}
          animate={isInView ? { filter: 'blur(0px)', opacity: 1 } : {}}
          transition={{ duration: 1.2 }}
          className='mx-auto w-full max-w-full text-center font-slab text-5xl font-bold uppercase leading-relaxed sm:py-24 sm:text-7xl lg:text-9xl xl:text-[10rem] 2xl:text-[12rem]'>
          {constants.title}
        </motion.h3>

        <div className='mx-auto h-auto w-full max-w-[820px] p-5 pb-3'>
          <Image
            width={1702}
            height={149}
            src={donutsImage}
            placeholder='blur'
            className='h-fit w-full'
            alt='Donuts combo decoration image'
          />
        </div>
        <div className='flex w-full flex-col items-center justify-center gap-3 p-6 sm:mx-0'>
          <p className='text-center font-medium'>{translation('made-phrase')}</p>

          <div className='flex w-full items-center justify-between gap-1 font-medium'>
            <span>{constants.copyright}</span>
            <span>
              {translation('version-phrase')} {Package.version}-{Package.latest_compile}
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};
