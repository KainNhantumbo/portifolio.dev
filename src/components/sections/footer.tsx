'use client';

import Package from '@/../package.json';
import donutsImage from '@/../public/assets/donuts.png';
import { SparklesCore } from '@/components/animations/animate-sparkles';
import { useScopedI18n } from '@/locales/client';
import { constants } from '@/shared/constants';
import Image from 'next/image';
import * as React from 'react';
import { AnimatedTextFlip } from '../animations/animate-text-flip';

const words: string[] = [
  "Kain's Space",
  'Universe',
  'Notebook',
  'Portfolio',
  'With Love',
  'Ubelloch',
  constants.title
];

const Footer = () => {
  const translation = useScopedI18n('footer');

  return (
    <div className='mt-20 transition-all'>
      <footer className='relative min-h-[60vh] w-full border-t border-font/15 transition-all'>
        <SparklesCore
          background='transparent'
          minSize={0.4}
          maxSize={4}
          particleDensity={100}
          className='absolute left-0 top-0 -z-50 h-full w-full'
          particleColor={'#555555'}
        />
        <h3 className='mx-auto w-full max-w-full py-12 text-center font-slab text-5xl font-bold uppercase leading-relaxed sm:py-24 sm:text-7xl lg:text-9xl xl:text-[10rem] 2xl:text-[12rem]'>
          <AnimatedTextFlip words={words} />
        </h3>

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

export default React.memo(Footer);
