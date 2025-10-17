'use client';

import { useScopedI18n } from '@/locales/client';
import Package from '@/package.json';
import { constants } from '@/shared/constants';
import Image from 'next/image';
import donutsImage from '../../../public/assets/donuts.png';
import { SparklesCore } from '../../animations/animate-sparkles';
import { nanoid } from 'nanoid';
import { SocialIcons } from '@/components/social-icons';

export const Footer = () => {
  const translation = useScopedI18n('footer');

  return (
    <footer className='mx-auto w-full max-w-[1280px] px-4'>
      <div className='relative my-3 flex h-min w-full flex-col gap-3 overflow-hidden rounded-3xl border-[1px] border-solid border-font/10 py-5 font-sans font-semibold'>
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

        <div className='mx-auto h-auto w-full max-w-[600px] p-5 pb-3'>
          <Image
            width={1702}
            height={149}
            src={donutsImage}
            placeholder='blur'
            className='h-fit w-full'
            alt='Donuts combo decoration image'
          />
        </div>

        <SocialIcons />

        <div className='mx-auto flex w-full flex-col items-center gap-3'>
          <p className='text-center'>{translation('made-phrase')}</p>
          <div className='mx-auto flex w-full flex-col items-center justify-center gap-1'>
            <span>{constants.copyright}</span>
            <span>
              {translation('version-phrase')} {Package.version}-{Package.latest_compile}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
