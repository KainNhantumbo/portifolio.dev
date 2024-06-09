"use client"

import { useAppContext } from '@/context/app-context';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import * as React from 'react';
import Marquee from 'react-fast-marquee';

export type AnimateInfiniteCarouselProps = {
  children: React.ReactNode;
  className?: string;
};

export function AnimateInfiniteCarousel({
  children,
  className
}: AnimateInfiniteCarouselProps) {
  const {theme} = useTheme()
  return (
    <Marquee
      gradient
      pauseOnHover
      gradientColor={theme === 'light' ? '#FFFFFF' : '#26272D'}
      className={cn(className)}>
      {children}
    </Marquee>
  );
}
