'use client';

import { cn } from '@/lib/utils';
import { m as motion, stagger, useAnimate } from 'framer-motion';
import { useEffect } from 'react';

type Props = {
  words: string;
  className?: string;
  textClassName?: string;
  duration?: number;
};

export const AnimateText = ({ words, duration = 2, className, textClassName }: Props) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(' ');

  useEffect(() => {
    animate('span', { opacity: 1 }, { duration: duration, delay: stagger(0.1, {}) });
  }, [scope.current]);

  return (
    <motion.div ref={scope} className={cn(className)}>
      {wordsArray.map((word, index) => (
        <motion.span key={index} className={cn('opacity-0', textClassName)}>
          {word}{' '}
        </motion.span>
      ))}
    </motion.div>
  );
};
