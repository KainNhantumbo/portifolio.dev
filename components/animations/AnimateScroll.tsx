'use client';

import { m as motion, useScroll, useTransform } from 'framer-motion';
import type { FC, ReactNode } from 'react';
import { useRef } from 'react';

export type AnimateScrollProps = {
  children: ReactNode;
  className?: string;
};

export const AnimateScroll: FC<AnimateScrollProps> = ({
  children,
  className
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const scaleStyle = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 0.8, 1],
    [1, 0.9, 0.9, 0.8, 0]
  );

  const opacityStyle = useTransform(scrollYProgress, [0, 0.65, 0], [1, 1, 0]);

  return (
    <motion.div
      ref={containerRef}
      style={{ scale: scaleStyle, opacity: opacityStyle }}
      className={className}>
      {children}
    </motion.div>
  );
};
