'use client';

import Package from '@/../package.json';
import donutsImage from '@/../public/assets/donuts.png';
import { SparklesCore } from '@/components/animations/animate-sparkles';
import { useScopedI18n } from '@/locales/client';
import { constants } from '@/shared/constants';
import { nanoid } from 'nanoid';
import Image from 'next/image';

export const Footer = () => {
  const translation = useScopedI18n('footer');

  return (
    <footer className='relative mt-20 w-full border-t border-font/10'>
      <div className='absolute left-0 top-0 z-0 h-full w-full'>
        <SparklesCore
          id={nanoid()}
          background='transparent'
          minSize={0.4}
          maxSize={1}
          particleDensity={200}
          className='h-full w-full'
          particleColor='#E4703180'
        />
      </div>

      <h1 className='font-slab mx-auto w-full max-w-full text-center text-5xl font-bold uppercase leading-relaxed sm:py-24 sm:text-7xl lg:text-9xl xl:text-[10rem] 2xl:text-[12rem]'>
        {constants.title}
      </h1>

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
      <div className='flex w-full flex-col items-center gap-3 p-6 sm:mx-0'>
        <p className='text-center font-medium'>{translation('made-phrase')}</p>
        <div className='flex w-full items-center justify-between gap-1 font-medium'>
          <span>{constants.copyright}</span>
          <span>
            {translation('version-phrase')} {Package.version}-{Package.latest_compile}
          </span>
        </div>
      </div>
    </footer>
  );
};
