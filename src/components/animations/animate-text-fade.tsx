'use client';
import { m as motion, useInView, Variants } from 'motion/react';
import * as React from 'react';

export function AnimateTextFade({
  direction,
  children,
  className = '',
  staggerChildren = 0.1,
  delay = 0,
  runOnce = true
}: {
  direction: 'up' | 'down';
  children: React.ReactNode;
  className?: string;
  staggerChildren?: number;
  delay?: number;
  runOnce?: boolean;
}) {
  const FADE_DOWN = {
    show: { opacity: 1, y: 0, transition: { type: 'spring' } },
    hidden: { opacity: 0, y: direction === 'down' ? -18 : 18 }
  } as Variants;

  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: runOnce });
  return (
    <motion.div
      ref={ref}
      initial='hidden'
      animate={isInView ? 'show' : ''}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: staggerChildren,
            delay
          }
        }
      }}
      className={className}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child) ? (
          <motion.div variants={FADE_DOWN}>{child}</motion.div>
        ) : (
          child
        )
      )}
    </motion.div>
  );
}
