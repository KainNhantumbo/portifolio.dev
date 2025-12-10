'use client';

import { cn } from '@/lib/utils';
import React, { ReactNode, useEffect, useRef, useState } from 'react';

const glowColorMap = {
  blue: { base: 220, spread: 200 },
  purple: { base: 280, spread: 300 },
  green: { base: 120, spread: 200 },
  red: { base: 0, spread: 200 },
  orange: { base: 30, spread: 200 },
  pink: { base: 330, spread: 200 },
  yellow: { base: 50, spread: 200 },
  cyan: { base: 180, spread: 200 },
  lime: { base: 90, spread: 200 }
};

type GlowColor = keyof typeof glowColorMap;
interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: GlowColor;
  size?: 'sm' | 'md' | 'lg';
  width?: string | number;
  useRandomTwColors?: boolean;
  height?: string | number;
  customSize?: boolean; // When true, ignores size prop and uses width/height or className
  enableMouseEffect?: boolean;
}

const sizeMap = {
  sm: 'w-48 h-64',
  md: 'w-64 h-80',
  lg: 'w-80 h-96'
};

export const GlowCard: React.FC<GlowCardProps> = ({
  children,
  className = '',
  glowColor = 'blue',
  useRandomTwColors = false,
  size = 'md',
  width,
  height,
  customSize = false,
  enableMouseEffect = true
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  const [randomColor] = useState<GlowColor>(() => {
    if (!useRandomTwColors) return glowColor;
    const colors = Object.keys(glowColorMap) as GlowColor[];
    return colors[Math.floor(Math.random() * colors.length)];
  });

  useEffect(() => {
    if (!enableMouseEffect) return;

    const syncPointer = (e: PointerEvent) => {
      const { clientX: x, clientY: y } = e;

      if (cardRef.current) {
        cardRef.current.style.setProperty('--x', x.toFixed(2));
        cardRef.current.style.setProperty('--xp', (x / window.innerWidth).toFixed(2));
        cardRef.current.style.setProperty('--y', y.toFixed(2));
        cardRef.current.style.setProperty('--yp', (y / window.innerHeight).toFixed(2));
      }
    };

    document.addEventListener('pointermove', syncPointer);
    return () => document.removeEventListener('pointermove', syncPointer);
  }, [enableMouseEffect]);

  const finalColor = useRandomTwColors ? randomColor : glowColor;
  const { base, spread } = glowColorMap[finalColor];

  // Determine sizing
  const getSizeClasses = () => {
    if (customSize) {
      return ''; // Let className or inline styles handle sizing
    }
    return sizeMap[size];
  };

  const getInlineStyles = () => {
    const baseStyles = {
      '--base': base,
      '--spread': spread,
      '--radius': '14',
      '--border': '2',
      '--backdrop': 'hsl(0 0% 60% / 0.12)',
      '--backup-border': 'var(--backdrop)',
      '--size': '200',
      '--outer': '1',
      '--border-size': 'calc(var(--border, 2) * 1px)',
      '--spotlight-size': 'calc(var(--size, 150) * 1px)',
      '--hue': 'calc(var(--base) + (var(--xp, 0) * var(--spread, 0)))',
      backgroundImage: `radial-gradient(
        var(--spotlight-size) var(--spotlight-size) at
        calc(var(--x, 0) * 1px)
        calc(var(--y, 0) * 1px),
        hsl(var(--hue, 210) calc(var(--saturation, 100) * 1%) calc(var(--lightness, 70) * 1%) / var(--bg-spot-opacity, 0.1)), transparent
      )`,
      backgroundColor: 'var(--backdrop, transparent)',
      backgroundSize:
        'calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)))',
      backgroundPosition: '50% 50%',
      backgroundAttachment: 'fixed',
      border: 'var(--border-size) solid var(--backup-border)',
      position: 'relative' as const,
      touchAction: 'none' as const
    };

    // Add width and height if provided
    if (width !== undefined) {
      // @ts-ignore
      baseStyles.width = typeof width === 'number' ? `${width}px` : width;
    }
    if (height !== undefined) {
      // @ts-ignore
      baseStyles.height = typeof height === 'number' ? `${height}px` : height;
    }

    return baseStyles;
  };

  return (
    <>
      <div
        ref={cardRef}
        data-glow
        style={getInlineStyles()}
        className={cn(
          `relative grid grid-rows-[1fr_auto] gap-4 rounded-2xl p-4 shadow-[0_0_25px_rgba(0,0,0,.1)] backdrop-blur-[5px]`,
          getSizeClasses(),
          !customSize ? 'aspect-[3/4]' : '',
          className
        )}>
        <div ref={innerRef} data-glow></div>
        {children}
      </div>
    </>
  );
};
