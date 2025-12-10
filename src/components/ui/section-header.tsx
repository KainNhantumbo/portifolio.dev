'use client';

import { cn } from '@/lib/utils';
import { m as motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const AnimateTextFade = dynamic(
  () => import('../animations/animate-text-fade').then((mod) => mod.AnimateTextFade),
  { ssr: false }
);

interface Props {
  title: string;
  description: string;
  className?: string;
}

export function SectionHeader(props: Props) {
  return (
    <div className={cn('mb-6 w-fit space-y-6 lg:mb-12', props.className)}>
      <motion.div
        initial='initial'
        whileHover='hovered'
        className='relative block overflow-hidden'>
        <motion.div
          variants={{
            initial: { y: 0 },
            hovered: { y: '-100%' }
          }}>
          <h2 className='font-slab text-5xl font-bold uppercase leading-relaxed sm:text-5xl lg:text-6xl xl:text-[7rem] 2xl:text-[8rem]'>
            <span>{props.title}</span>
          </h2>
        </motion.div>
        <motion.div
          className='absolute inset-0'
          variants={{
            initial: { y: '100%' },
            hovered: { y: 0 }
          }}>
          <h2 className='font-slab text-5xl font-bold uppercase leading-relaxed sm:text-5xl lg:text-6xl xl:text-[7rem] 2xl:text-[8rem]'>
            <span>
              {props.title.split('').map((child, idx) => (
                <span className={'hover-text cursor-grab'} key={idx}>
                  {child}
                </span>
              ))}
            </span>
          </h2>
        </motion.div>
      </motion.div>
      <AnimateTextFade direction='down' delay={3} runOnce={false}>
        <h3 className='w-full max-w-4xl text-lg font-medium sm:text-xl lg:leading-relaxed'>
          {props.description.split('').map((child, idx) => (
            <span className={'hover-text cursor-grab'} key={idx}>
              {child}
            </span>
          ))}
        </h3>
      </AnimateTextFade>
    </div>
  );
}
