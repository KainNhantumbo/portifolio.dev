import { cn } from '@/lib/utils';
import type { HTMLAttributes } from 'react';

export type Props = HTMLAttributes<HTMLSpanElement> & {
  activeColor: string;
  size?: 'sm' | 'md' | 'lg';
};

export const StatusIndicator = ({
  className,
  color,
  size = 'md',
  activeColor,
  ...props
}: Props) => (
  <span
    className={cn(
      'relative flex',
      size === 'sm' ? 'h-2 w-2' : size === 'md' ? 'h-4 w-4' : 'h-6 w-6',
      className
    )}
    {...props}>
    <span
      className={cn(
        'absolute inline-flex h-full w-full animate-ping rounded-full opacity-75',
        activeColor
      )}
    />
    <span
      className={cn(
        'relative inline-flex rounded-full',
        size === 'sm' ? 'h-2 w-2' : size === 'md' ? 'h-4 w-4' : 'h-6 w-6',
        activeColor
      )}
    />
  </span>
);
