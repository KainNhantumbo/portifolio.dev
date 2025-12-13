'use client';

import { cn } from '@/lib/utils';
import { m as motion } from 'motion/react';
import * as React from 'react';

export type BubbleBackgroundProps = React.ComponentProps<'div'> & {
  colors?: {
    first: string;
    second: string;
    third: string;
    fourth: string;
    fifth: string;
    sixth: string;
  };
};

export function BubbleBackground({
  ref,
  className,
  children,
  ...props
}: BubbleBackgroundProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  React.useImperativeHandle(ref, () => containerRef.current as HTMLDivElement);

  const colors = {
    first: '18,113,255',
    second: '221,74,255',
    third: '0,220,255',
    fourth: '200,50,50',
    fifth: '180,180,50',
    sixth: '140,100,255'
  };

  return (
    <div
      ref={containerRef}
      data-slot='bubble-background'
      className={cn('relative size-full overflow-hidden', className)}
      {...props}>
      <style>
        {`
            :root {
              --first-color: ${colors.first};
              --second-color: ${colors.second};
              --third-color: ${colors.third};
              --fourth-color: ${colors.fourth};
              --fifth-color: ${colors.fifth};
              --sixth-color: ${colors.sixth};
            }
          `}
      </style>

      <svg xmlns='http://www.w3.org/2000/svg' className='absolute left-0 top-0 h-0 w-0'>
        <defs>
          <filter id='goo'>
            <feGaussianBlur in='SourceGraphic' stdDeviation='10' result='blur' />
            <feColorMatrix
              in='blur'
              mode='matrix'
              values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8'
              result='goo'
            />
            <feBlend in='SourceGraphic' in2='goo' />
          </filter>
        </defs>
      </svg>

      <div className='absolute inset-0' style={{ filter: 'url(#goo) blur(40px)' }}>
        <motion.div
          className='absolute left-[10%] top-[10%] size-[80%] rounded-full bg-[radial-gradient(circle_at_center,rgba(var(--first-color),0.8)_0%,rgba(var(--first-color),0)_50%)] mix-blend-hard-light'
          animate={{ y: [-50, 50, -50] }}
          transition={{ duration: 30, ease: 'easeInOut', repeat: Infinity }}
        />
        <motion.div
          className='absolute inset-0 flex origin-[calc(50%-200px)] items-center justify-center'
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'loop'
          }}>
          <div className='left-[10%] top-[10%] size-[60%] rounded-full bg-[radial-gradient(circle_at_center,rgba(var(--second-color),0.8)_0%,rgba(var(--second-color),0)_50%)] mix-blend-hard-light' />
        </motion.div>
        <motion.div
          className='absolute inset-0 flex origin-[calc(50%+200px)] items-center justify-center'
          animate={{ rotate: 360 }}
          transition={{ duration: 40, ease: 'linear', repeat: Infinity }}>
          <div className='absolute left-[calc(50%-500px)] top-[calc(50%+200px)] size-[80%] rounded-full bg-[radial-gradient(circle_at_center,rgba(var(--third-color),0.8)_0%,rgba(var(--third-color),0)_50%)] mix-blend-hard-light' />
        </motion.div>
        <motion.div
          className='absolute left-[10%] top-[10%] size-[80%] rounded-full bg-[radial-gradient(circle_at_center,rgba(var(--fourth-color),0.8)_0%,rgba(var(--fourth-color),0)_50%)] opacity-40 mix-blend-hard-light'
          animate={{ x: [-50, 50, -50] }}
          transition={{ duration: 40, ease: 'easeInOut', repeat: Infinity }}
        />
        <motion.div
          className='absolute inset-0 flex origin-[calc(50%_-_400px)_calc(50%_+_200px)] items-center justify-center'
          animate={{ rotate: 360 }}
          transition={{ duration: 20, ease: 'linear', repeat: Infinity }}>
          <div className='absolute left-[calc(50%-80%)] top-[calc(50%-80%)] size-[160%] rounded-full bg-[radial-gradient(circle_at_center,rgba(var(--fifth-color),0.8)_0%,rgba(var(--fifth-color),0)_50%)] mix-blend-hard-light' />
        </motion.div>
      </div>
      {children}
    </div>
  );
}
