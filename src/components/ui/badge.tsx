'use client';

import { animate, m as motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import React, { useEffect } from 'react';

type AnimatedBadgeProps = {
  children: React.ReactNode;
  icon?: React.ReactNode;
  gradientFrom?: string;
  gradientTo?: string;
  className?: string;
  animateBorder?: boolean;
};

export const AnimatedBadge: React.FC<AnimatedBadgeProps> = ({
  children,
  icon,
  gradientFrom = 'from-cyan-400',
  gradientTo = 'to-emerald-400',
  className = '',
  animateBorder = true
}) => {
  const rotation = useMotionValue(0);

  useEffect(() => {
    const controls = animate(rotation, 360, {
      duration: 3, // Speed of rotation
      repeat: Infinity,
      ease: 'linear'
    });
    return () => controls.stop();
  }, [rotation]);

  // Construct the conic gradient for the border
  const borderBackground = useMotionTemplate`
    conic-gradient(
      from ${rotation}deg,
      transparent 0deg,
      var(--tw-gradient-from) 60deg,
      var(--tw-gradient-to) 120deg,
      transparent 180deg
    )
  `;

  return (
    <div
      className={`group relative inline-flex overflow-hidden rounded-full p-[1px] ${className}`}
      style={
        animateBorder
          ? ({
              '--tw-gradient-from': getComputedStyleColor(gradientFrom) || '#22d3ee',
              '--tw-gradient-to': getComputedStyleColor(gradientTo) || '#34d399'
            } as React.CSSProperties)
          : {}
      }>
      <motion.div
        className='absolute inset-0 opacity-40 blur-sm'
        style={{ background: borderBackground }}
      />

      <motion.div
        className='absolute inset-0 opacity-100'
        style={{ background: borderBackground }}
      />

      <div className='base-border relative flex items-center justify-center gap-2 rounded-full bg-foreground px-4 py-1.5 font-medium backdrop-blur-3xl transition-colors duration-300 hover:bg-foreground/80'>
        {icon && (
          <span className='flex items-center text-slate-400 transition-colors group-hover:text-slate-200'>
            {icon}
          </span>
        )}
        <span className='relative z-10'>{children}</span>
      </div>
    </div>
  );
};

// Helper to map Tailwind classes to hex values for the gradient interpolation
const baseColors: Record<string, string> = {
  cyan: '#22d3ee',
  emerald: '#34d399',
  fuchsia: '#d946ef',
  purple: '#9333ea',
  amber: '#fbbf24',
  orange: '#f97316',
  blue: '#3b82f6',
  indigo: '#6366f1',
  rose: '#f43f5e',
  red: '#ef4444',
  green: '#22c55e',
  teal: '#14b8a6',
  sky: '#0ea5e9',
  pink: '#ec4899',
  violet: '#8b5cf6',
  lime: '#84cc16',
  yellow: '#eab308',
  stone: '#78716c'
};

export function getRandomTwBaseColor(): string {
  const colors = Object.keys(baseColors);
  return colors[Math.floor(Math.random() * colors.length)];
}

export function getComputedStyleColor(twClass: string): string | null {
  for (const key in baseColors) {
    if (twClass.includes(key)) {
      return baseColors[key];
    }
  }

  return null;
}

export function generateColor() {
  return getComputedStyleColor(getRandomTwBaseColor());
}
