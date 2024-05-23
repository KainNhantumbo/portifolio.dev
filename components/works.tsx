'use client';

import { useScopedI18n } from '@/locales/client';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
import Image from 'next/image';
import { useWorks } from '../hooks/use-works';
import { AnimateScroll } from './animations/animate-scroll';

export const Works = () => {
  const translation = useScopedI18n('works');
  const data = useWorks();

  return (
    <section className='mb-5 flex w-full max-w-[1000px] flex-col gap-5'>
      {data.map((item, index) => (
        <AnimateScroll key={index} className=''>
          <section className='group flex w-full select-none flex-row flex-nowrap items-center gap-3 rounded-xl p-3 even:flex-row-reverse max-[890px]:flex-col-reverse max-[890px]:items-center max-[890px]:justify-center max-[890px]:gap-5'>
            <div className='flex w-full flex-col gap-2'>
              <h3 className='mx-auto text-center font-sans text-lg font-bold uppercase sm:text-3xl'>
                <span className='mr-4 text-font/50'>0{index + 1}</span>
                {item.title}
              </h3>
              <div className='text-justify'>
                {item.description.map((phrase, index) => (
                  <p key={index} className='mb-3'>
                    {phrase}
                  </p>
                ))}
              </div>
              <div className='flex flex-row flex-wrap items-center gap-2 font-sans'>
                <h4 className='font-medium uppercase text-primary'>
                  {translation('platform')}:{' '}
                </h4>
                {item.platforms.map((platform, index) => (
                  <span
                    key={index}
                    className='base-border rounded-lg bg-foreground p-1 px-2 text-xs font-medium uppercase text-secondary'>
                    {platform}
                  </span>
                ))}
              </div>
              <div className='flex flex-row flex-wrap items-center gap-2 font-sans'>
                <h4 className='font-medium uppercase text-primary'>
                  {translation('stack')}:{' '}
                </h4>
                {item.stack.map((platform, index) => (
                  <span
                    key={index}
                    className='base-border rounded-lg bg-foreground p-1 px-2 text-xs font-medium uppercase text-secondary'>
                    {platform}
                  </span>
                ))}
              </div>
            </div>
            <Image
              width={500}
              height={undefined}
              src={item.image}
              alt={item.title}
              className='base-border h-full w-full max-w-[500px] rounded-lg  object-cover max-[890px]:max-w-full'
            />
          </section>

          <div className='mt-2 flex w-full flex-wrap items-center gap-3 font-sans'>
            <a
              href={item.livePreview.url}
              rel='noopener noreferrer'
              target='_blank'
              className='group flex items-center gap-2 text-blue-400 underline underline-offset-4 transition-colors  hover:text-primary'>
              <ExternalLinkIcon className='h-auto w-4 stroke-blue-400 transition-colors group-hover:stroke-primary' />
              <span className='font-medium text-blue-400 transition-colors group-hover:text-primary'>
                {item.livePreview.label}
              </span>
            </a>
            <a
              href={item.repository.url}
              rel='noopener noreferrer'
              target='_blank'
              className='group flex items-center gap-2 text-blue-400 underline  underline-offset-4 transition-colors hover:text-primary'>
              <GithubIcon className='h-auto w-4 stroke-blue-400 transition-colors group-hover:stroke-primary' />
              <span className='font-medium text-blue-400 transition-colors group-hover:text-primary'>
                {item.repository.label}
              </span>
            </a>
          </div>
        </AnimateScroll>
      ))}
    </section>
  );
};
