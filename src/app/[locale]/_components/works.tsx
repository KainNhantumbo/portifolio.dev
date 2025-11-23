'use client';

import { ColourfulText } from '@/components/animations/animate-colorful-text';
import Button from '@/components/ui/button';
import { ImageZoom } from '@/components/ui/image-zoom-effect';
import { SectionHeader } from '@/components/ui/section-header';
import { useScopedI18n } from '@/locales/client';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
import Image from 'next/image';
import { useWorks } from '../../../hooks/use-works';

export const Works = () => {
  const translation = useScopedI18n('works');
  const data = useWorks();

  return (
    <section
      id='works'
      className='relative mx-auto flex min-h-screen w-full max-w-[1280px] flex-col items-center gap-3 pt-5'>
      <SectionHeader
        title={translation('title')}
        description={translation('description')}
      />

      <section className='mx-auto mb-5 flex w-full flex-col gap-5'>
        {data.map((item, index) => (
          <section
            key={index}
            className='group rounded-lg border-[1px] border-solid border-font/10 p-3'>
            <section className='group flex w-full select-none flex-row flex-nowrap items-center gap-3 rounded-xl p-3 group-even:flex-row-reverse max-md:flex-col-reverse max-md:items-center max-md:justify-center max-md:gap-5 group-even:max-md:flex-col'>
              <div className='flex w-full flex-col gap-2'>
                <h3 className='mx-auto text-center font-sans text-lg font-bold uppercase sm:text-3xl'>
                  <span className='mr-4 text-font/50'>
                    <ColourfulText key={index} text={`0${index + 1}`} />
                  </span>
                  <span>{item.title}</span>
                </h3>
                <div className='flex flex-row flex-wrap items-center gap-2 border-solid border-font/10 pt-3 group-even:flex-row-reverse'>
                  {item.stack.map((platform, index) => (
                    <span
                      key={index}
                      className='base-border rounded-lg bg-foreground p-1 px-2 text-xs font-medium uppercase text-secondary'>
                      {platform}
                    </span>
                  ))}
                </div>
                <div className='min-sm:text-justify border-t-[1px] border-solid border-font/10 pt-3'>
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
              </div>
              <ImageZoom>
                <Image
                  width={800}
                  height={800}
                  src={item.image}
                  alt={item.title}
                  className='base-border h-full w-full rounded-lg object-cover sm:max-w-[420px]'
                />
              </ImageZoom>
            </section>

            <div className='mt-2 flex w-full flex-wrap items-center justify-center gap-3 font-sans'>
              <Button
                href={item.livePreview.url}
                rel='noopener noreferrer'
                target='_blank'
                size='lg'
                variant='secondary'
                icon={<ExternalLinkIcon className='h-auto w-8' />}>
                <span className='font-medium'>{item.livePreview.label}</span>
              </Button>
              <Button
                href={item.repository.url}
                rel='noopener noreferrer'
                target='_blank'
                variant='neon'
                icon={<GithubIcon className='h-auto w-8' />}
                size='lg'>
                <span className='font-medium'> {item.repository.label}</span>
              </Button>
            </div>
          </section>
        ))}
      </section>
    </section>
  );
};
