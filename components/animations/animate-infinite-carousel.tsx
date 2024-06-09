import { cn } from '@/lib/utils';
import { motion } from '@/providers/framer-provider';
import * as React from 'react';

export type AnimateInfiniteCarouselProps = {
  children: React.ReactNode;
  className?: string;
};

export function AnimateInfiniteCarousel({
  children,
  className
}: AnimateInfiniteCarouselProps) {
  return (
    <div
      className='relative mx-auto h-full overflow-hidden bg-white py-12'
      style={{ width: '50%' }}>
      <div
        className={cn(
          'before:blur-3 after:blur-3 absolute inset-0 z-20 before:absolute before:left-0 before:top-0 before:h-full before:w-1/4 before:bg-gradient-to-r before:from-white before:to-transparent before:filter after:absolute after:right-0 after:top-0 after:h-full after:w-1/4 after:bg-gradient-to-l after:from-white after:to-transparent after:filter',
          className
        )}
      />
      <motion.div
        className='flex'
        animate={{
          x: ['0%', '-100%'],
          transition: { ease: 'linear', duration: 15, repeat: Infinity }
        }}>
        {children}
      </motion.div>
    </div>
  );
}
