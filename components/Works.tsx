'use client';

import Image from 'next/image';
import { useWorks } from '../hooks/useWorks';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
import { useScopedI18n } from '@/locales/client';
import { AnimateScroll } from './animations/AnimateScroll';

export default function Works() {
  const translation = useScopedI18n('works');
  const data = useWorks();

  return (
    <section className='w-full max-w-[1000px] flex flex-col mb-5 gap-5'>
      {data.map((item, index) => (
        <AnimateScroll
          key={index}
          className='w-full flex flex-row flex-nowrap items-center gap-3 p-3 rounded-xl select-none max-[890px]:flex-col-reverse max-[890px]:justify-center max-[890px]:items-center max-[890px]:gap-5'>
          <div className='w-full flex flex-col gap-2'>
            <h3 className='font-sans mx-auto font-semibold uppercase text-lg text-center'>
              {item.title}
            </h3>
            <div className='font-sans text-left'>
              {item.description.map((phrase, index) => (
                <p key={index} className='mb-3'>
                  {phrase}
                </p>
              ))}
            </div>
            <div className='font-sans flex flex-wrap flex-row items-center gap-2'>
              <h4 className='uppercase font-medium text-primary'>
                {translation('platform')}:{' '}
              </h4>
              {item.platforms.map((platform, index) => (
                <span
                  key={index}
                  className='base-border p-1 px-2 uppercase text-xs font-medium rounded-lg bg-foreground text-secondary'>
                  {platform}
                </span>
              ))}
            </div>
            <div className='font-sans flex flex-wrap flex-row items-center gap-2'>
              <h4 className='uppercase font-medium text-primary'>
                {translation('stack')}:{' '}
              </h4>
              {item.stack.map((platform, index) => (
                <span
                  key={index}
                  className='base-border p-1 px-2 uppercase text-xs font-medium rounded-lg bg-foreground text-secondary'>
                  {platform}
                </span>
              ))}
            </div>

            <div className='flex gap-3 flex-wrap items-center w-full font-sans mt-2'>
              <a
                href={item.livePreview.url}
                rel='noopener noreferrer'
                target='_blank'
                className='group flex items-center gap-2 underline-offset-4 underline hover:text-primary transition-colors  text-blue-400'>
                <ExternalLinkIcon className='h-auto w-4 group-hover:stroke-primary stroke-blue-400 transition-colors' />
                <span className='font-medium transition-colors group-hover:text-primary text-blue-400'>
                  {item.livePreview.label}
                </span>
              </a>
              <a
                href={item.repository.url}
                rel='noopener noreferrer'
                target='_blank'
                className='group flex items-center gap-2 underline-offset-4 underline  hover:text-primary transition-colors text-blue-400'>
                <GithubIcon className='h-auto w-4 group-hover:stroke-primary stroke-blue-400 transition-colors' />
                <span className='transition-colors font-medium group-hover:text-primary text-blue-400'>
                  {item.repository.label}
                </span>
              </a>
            </div>
          </div>
          <Image
            width={500}
            height={undefined}
            src={item.image}
            alt={item.title}
            className='w-full h-full object-cover max-w-[500px] rounded-lg  base-border max-[890px]:max-w-full'
          />
        </AnimateScroll>
      ))}
    </section>
  );
}
