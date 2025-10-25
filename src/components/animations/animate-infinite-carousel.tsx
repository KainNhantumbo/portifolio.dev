'use client';

import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import * as React from 'react';
import Marquee from 'react-fast-marquee';

type Props = { children: React.ReactNode; className?: string };

export function AnimateInfiniteCarousel({ children, className }: Props) {
  const { theme } = useTheme();
  return (
    <Marquee
      gradient
      gradientColor={theme === 'light' ? '#FAFAFA' : '#1A1A1E'}
      className={cn(className)}>
      {children}
    </Marquee>
  );
}
