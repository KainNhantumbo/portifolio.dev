'use client';

import { cn } from '@/lib/utils';
import { motion } from '@/providers/framer-provider';
import { stagger, useAnimate } from 'framer-motion';
import * as React from 'react';

type Props = { words: string; className?: string; duration?: number };

export const AnimateText: React.FC<Props> = ({ words, duration, className }) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(' ');

  React.useEffect(() => {
    animate('span', { opacity: 1 }, { duration: duration ?? 2, delay: stagger(0.2) });
  }, [scope.current]);

  const renderWords = () => (
    <motion.div ref={scope}>
      {wordsArray.map((word, index) => (
        <motion.span key={word + index} className='text-primary opacity-0 dark:text-font'>
          {word}{' '}
        </motion.span>
      ))}
    </motion.div>
  );

  return <div className={cn(className)}>{renderWords()}</div>;
};
