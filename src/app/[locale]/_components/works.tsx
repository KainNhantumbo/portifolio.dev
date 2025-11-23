'use client';

import { ColourfulText } from '@/components/animations/animate-colorful-text';
import { AnimatedBadge, getRandomTwBaseColor } from '@/components/ui/badge';
import Button from '@/components/ui/button';
import { ImageZoom } from '@/components/ui/image-zoom-effect';
import { SectionHeader } from '@/components/ui/section-header';
import { useScopedI18n } from '@/locales/client';
import { Code, ExternalLinkIcon, GithubIcon } from 'lucide-react';
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
        {data.map((item, idx) => (
          <section key={idx} className='base-border rounded-xl bg-foreground p-3 md:p-6'>
            <section className='flex w-full select-none flex-row flex-nowrap items-center gap-6 rounded-xl p-3 max-md:flex-col-reverse max-md:items-center max-md:justify-center max-md:gap-12'>
              <div className='flex w-full flex-col gap-2'>
                <h3 className='font-sans text-lg font-bold uppercase leading-relaxed sm:text-3xl md:text-4xl lg:text-5xl'>
                  <span className='mr-4 text-font/50'>
                    <ColourfulText key={idx} text={`0${idx + 1}`} />
                  </span>
                  <span>{item.title}</span>
                </h3>
                <div className='flex flex-row flex-wrap items-center gap-2 border-solid border-font/10 pt-3 group-even:flex-row-reverse'>
                  {item.stack.map((stack, idx) => (
                    <AnimatedBadge
                      key={idx}
                      icon={<Code className='h-auto w-5' />}
                      gradientFrom={getRandomTwBaseColor()}
                      gradientTo={getRandomTwBaseColor()}>
                      <span className='uppercase'>{stack}</span>
                    </AnimatedBadge>
                  ))}
                </div>
                <div className='min-sm:text-justify pt-3 md:space-y-6'>
                  {item.description.map((phrase, idx) => (
                    <p key={idx} className='mb-3 leading-relaxed md:text-xl'>
                      {phrase}
                    </p>
                  ))}
                </div>
                <div className='flex flex-row flex-wrap items-center gap-2 font-sans'>
                  <h4 className='font-medium uppercase'>{translation('platform')}: </h4>
                  {item.platforms.map((platform, idx) => (
                    <AnimatedBadge
                      key={idx}
                      animateBorder={false}
                      icon={<Code className='h-auto w-5' />}
                      gradientFrom={''}
                      gradientTo={''}>
                      <span className='uppercase'>{platform}</span>
                    </AnimatedBadge>
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
