'use client';

import { useScopedI18n } from '@/locales/client';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
import Image from 'next/image';
import { useWorks } from '../hooks/use-works';
import { AnimateTextReveal } from './animations/animate-reveal';
import { AnimateScroll } from './animations/animate-scroll';

export const Works = () => {
  const translation = useScopedI18n('works');
  const data = useWorks();

  return (
    <section className='mb-5 flex w-full max-w-[1000px] flex-col gap-5'>
      {data.map((item, index) => (
        <AnimateScroll
          key={index}
          className='group rounded-lg border-[1px] border-solid border-font/10 p-3'>
          <section className='group flex w-full select-none flex-row flex-nowrap items-center gap-3 rounded-xl p-3 group-even:flex-row-reverse max-md:flex-col-reverse max-md:items-center max-md:justify-center max-md:gap-5 group-even:max-md:flex-col'>
            <div className='flex w-full flex-col gap-2'>
              <h3 className='mx-auto text-center font-sans text-lg font-bold uppercase sm:text-3xl'>
                <span className='mr-4 text-font/50'>0{index + 1}</span>
                {item.title}
              </h3>
              <div className='flex flex-row flex-wrap items-center gap-2 border-t-[1px] border-solid border-font/10 pt-3 group-even:flex-row-reverse'>
                {item.stack.map((platform, index) => (
                  <span
                    key={index}
                    className='base-border rounded-lg bg-foreground p-1 px-2 text-xs font-medium uppercase text-secondary'>
                    {platform}
                  </span>
                ))}
              </div>
              <AnimateTextReveal inverseDirection={index % 2 === 0}>
                <div className='min-sm:text-justify border-t-[1px] border-solid border-font/10 pt-3'>
                  {item.description.map((phrase, index) => (
                    <p key={index} className='mb-3'>
                      {phrase}
                    </p>
                  ))}
                </div>
              </AnimateTextReveal>
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
            </div>
            <Image
              width={800}
              height={800}
              src={item.image}
              alt={item.title}
              className='base-border h-full w-full rounded-lg object-cover sm:max-w-[420px]'
            />
          </section>

          <div className='mt-2 flex w-full flex-wrap items-center justify-center gap-3 font-sans'>
            <a
              href={item.livePreview.url}
              rel='noopener noreferrer'
              target='_blank'
              className='group flex items-center gap-2 rounded-lg border-[1px] border-solid border-font/10 p-1 px-4 text-blue-400 underline underline-offset-4 transition-colors hover:text-primary'>
              <ExternalLinkIcon className='h-auto w-4 stroke-blue-400 transition-colors group-hover:stroke-primary' />
              <span className='font-medium text-blue-400 transition-colors group-hover:text-primary'>
                {item.livePreview.label}
              </span>
            </a>
            <a
              href={item.repository.url}
              rel='noopener noreferrer'
              target='_blank'
              className='group flex items-center gap-2 rounded-lg border-[1px] border-solid border-font/10 p-1 px-4 text-blue-400 underline underline-offset-4 transition-colors hover:text-primary'>
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
