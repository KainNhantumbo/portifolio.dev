'use client';

import { cn } from '@/lib/utils';
import { AnimatePresence, m as motion } from 'framer-motion';
import * as React from 'react';

export type FlipWordsProps = Omit<React.ComponentProps<'span'>, 'children'> & {
  words: string[];
  duration?: number;
  letterDelay?: number;
  wordDelay?: number;
  disableAnimation?: boolean;
};

export function AnimatedTextFlip({
  ref,
  words,
  duration = 3000,
  letterDelay = 0.05,
  wordDelay = 0.3,
  className,
  disableAnimation = false,
  ...props
}: FlipWordsProps) {
  const localRef = React.useRef<HTMLSpanElement>(null);
  React.useImperativeHandle(ref as any, () => localRef.current as HTMLSpanElement);
  const [currentWord, setCurrentWord] = React.useState(words[0]);
  const [isAnimating, setIsAnimating] = React.useState<boolean>(false);
  const startAnimation = React.useCallback(() => {
    const word = words[words.indexOf(currentWord) + 1] || words[0];
    setCurrentWord(word);
    setIsAnimating(true);
  }, [currentWord, words]);
  React.useEffect(() => {
    if (!isAnimating) {
      const timeoutId = setTimeout(() => {
        startAnimation();
      }, duration);
      return () => clearTimeout(timeoutId);
    }
  }, [isAnimating, duration, startAnimation]);

  if (disableAnimation) {
    return (
      <span ref={localRef} data-slot='flip-words' {...(props as any)}>
        <span
          className={cn('relative inline-block px-2 text-left', className)}
          key={currentWord}>
          {currentWord.split(' ').map((word, wordIndex) => (
            <span key={`${word}-${wordIndex}`} className='inline-block whitespace-nowrap'>
              {word.split('').map((letter, letterIndex) => (
                <span key={`${word}-${letterIndex}`} className='inline-block'>
                  {letter}
                </span>
              ))}
              <span className='inline-block'>&nbsp;</span>
            </span>
          ))}
        </span>
      </span>
    );
  }

  return (
    <span ref={localRef} data-slot='flip-words' {...(props as any)}>
      <AnimatePresence
        onExitComplete={() => {
          setIsAnimating(false);
        }}>
        <motion.span
          initial={{
            opacity: 0,
            y: 10
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 10
          }}
          exit={{
            opacity: 0,
            y: -40,
            x: 40,
            filter: 'blur(8px)',
            scale: 2,
            position: 'absolute'
          }}
          className={cn(
            'will-change-opacity will-change-filter relative inline-block px-2 text-left will-change-transform',
            className
          )}
          key={currentWord}>
          {currentWord.split(' ').map((word, wordIndex) => (
            <motion.span
              key={`${word}-${wordIndex}`}
              initial={{ opacity: 0, y: 10, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{
                delay: wordIndex * wordDelay,
                duration: 0.3
              }}
              className='inline-block whitespace-nowrap'>
              {word.split('').map((letter, letterIndex) => (
                <motion.span
                  key={`${word}-${letterIndex}`}
                  initial={{ opacity: 0, y: 10, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{
                    delay: wordIndex * wordDelay + letterIndex * letterDelay,
                    duration: 0.2
                  }}
                  className='will-change-opacity will-change-filter inline-block will-change-transform'>
                  {letter}
                </motion.span>
              ))}
              <span className='inline-block'>&nbsp;</span>
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
