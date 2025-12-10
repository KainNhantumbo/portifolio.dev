'use client';

import { AnimateColourfulText } from '@/components/animations/animate-colorful-text';
import { SparklesCore } from '@/components/animations/animate-sparkles';
import { getRandomTwBaseColor } from '@/components/ui/badge';
import Button from '@/components/ui/button';
import { ImageZoom } from '@/components/ui/image-zoom-effect';
import { SectionHeader } from '@/components/ui/section-header';
import { useScopedI18n } from '@/locales/client';
import { Work } from '@/types';
import { useHover } from '@uidotdev/usehooks';
import { Code, ExternalLinkIcon, GithubIcon } from 'lucide-react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import * as React from 'react';
import { useWorks } from '../../../hooks/use-works';

interface WorkItemProps {
  idx: number;
  item: Work;
}

const AnimatedBadge = dynamic(
  () => import('@/components/ui/badge').then((mod) => mod.AnimatedBadge),
  { ssr: false }
);

function WorkItem({ item, idx }: WorkItemProps) {
  const translation = useScopedI18n('works');
  const [ref, hovering] = useHover();

  return (
    <section
      className='base-border relative overflow-hidden rounded-xl bg-foreground/30 p-3 md:p-6'
      ref={ref}>
      {/* overlay */}
      <div
        className={`-z-50 overflow-hidden p-px before:pointer-events-none before:absolute before:-left-20 before:-top-20 before:z-30 before:h-96 before:w-96 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-lime-500 before:opacity-0 before:blur-[100px] before:transition-opacity before:duration-500 after:absolute after:inset-0 after:z-10 after:rounded-3xl after:opacity-0 after:transition-opacity after:duration-500 before:hover:opacity-20 after:group-hover:opacity-100 dark:before:bg-lime-400`}
      />

      {hovering && (
        <SparklesCore
          background='transparent'
          minSize={0.4}
          maxSize={4}
          particleDensity={40}
          className='absolute left-0 top-0 -z-50 h-full w-full'
          particleColor='#555555'
        />
      )}
      <section className='flex w-full select-none flex-row flex-nowrap items-center gap-6 rounded-xl p-3 max-md:flex-col-reverse max-md:items-center max-md:justify-center max-md:gap-12'>
        <div className='flex w-full flex-col gap-6'>
          <h3 className='font-sans text-lg font-bold uppercase leading-relaxed sm:text-3xl md:text-4xl lg:text-5xl'>
            <span className='mr-4'>
              <AnimateColourfulText key={idx} text={`0${idx + 1}`} />
            </span>
            <span>{item.title}</span>
          </h3>
          <div className='flex flex-row flex-wrap items-center gap-2'>
            {item.stack.map((stack, idx) => (
              <AnimatedBadge
                key={idx}
                icon={<Code className='h-auto w-5' />}
                animateBorder={false}>
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
                icon={<Code className='h-auto w-5' />}
                gradientFrom={getRandomTwBaseColor()}
                gradientTo={getRandomTwBaseColor()}>
                <span className='uppercase'>{platform}</span>
              </AnimatedBadge>
            ))}
          </div>

          <div className='z-50 mt-2 flex w-full flex-wrap items-center gap-3'>
            <Button
              as='a'
              href={item.livePreview.url}
              rel='noopener noreferrer'
              target='_blank'
              size='lg'
              variant='secondary'
              icon={<ExternalLinkIcon className='h-auto w-8' />}>
              <span className='font-medium'>{item.livePreview.label}</span>
            </Button>
            <Button
              as='a'
              href={item.repository.url}
              rel='noopener noreferrer'
              target='_blank'
              variant='neon'
              icon={<GithubIcon className='h-auto w-8' />}
              size='lg'>
              <span className='font-medium'> {item.repository.label}</span>
            </Button>
          </div>
        </div>

        <ImageZoom>
          <Image
            width={1280}
            height={1280}
            src={item.image}
            alt={item.title}
            className='base-border h-full w-full object-cover'
          />
        </ImageZoom>
      </section>
    </section>
  );
}

const Works = () => {
  const translation = useScopedI18n('works');
  const data = useWorks();

  return (
    <section
      id='works'
      className='relative mx-auto flex min-h-screen w-full max-w-[1280px] flex-col items-center gap-3 pt-5'>
      <SectionHeader
        title={translation('title')}
        description={translation('description')}
        className='m-0 self-start'
      />

      <section className='group mb-5 flex w-full flex-col gap-5'>
        {data.map((item, idx) => (
          <WorkItem key={idx} idx={idx} item={item} />
        ))}
      </section>
    </section>
  );
};

export default React.memo(Works);
