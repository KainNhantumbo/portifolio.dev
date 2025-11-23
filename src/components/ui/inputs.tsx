import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionTemplate, useMotionValue, animate } from 'framer-motion';

type AnimatedInputProps = {
  icon?: React.ReactNode;
  gradientFrom?: string;
  gradientTo?: string;
  as?: 'input' | 'textarea';
  rows?: number;
} & React.InputHTMLAttributes<HTMLInputElement> &
  React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const AnimatedInput: React.FC<AnimatedInputProps> = ({
  icon,
  gradientFrom = 'from-cyan-400',
  gradientTo = 'to-emerald-400',
  className = '',
  as = 'input',
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse tracking for spotlight effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Focus animation rotation value
  const rotation = useMotionValue(0);

  useEffect(() => {
    const controls = animate(rotation, 360, {
      duration: 4,
      repeat: Infinity,
      ease: 'linear'
    });
    return () => controls.stop();
  }, [rotation]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    mouseX.set(x);
    mouseY.set(y);
  };

  // Construct gradients
  const spotlightBackground = useMotionTemplate`
    radial-gradient(
      250px circle at ${mouseX}px ${mouseY}px,
      rgba(255, 255, 255, 0.15),
      transparent 80%
    )
  `;

  const focusBackground = useMotionTemplate`
    conic-gradient(
      from ${rotation}deg,
      transparent 0deg,
      var(--tw-gradient-from) 60deg,
      var(--tw-gradient-to) 120deg,
      transparent 180deg
    )
  `;

  const isTextArea = as === 'textarea';

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={`group relative w-full rounded-xl p-[2px] transition-all duration-300 ${className}`}
      style={
        {
          '--tw-gradient-from': getComputedStyleColor(gradientFrom) || '#22d3ee',
          '--tw-gradient-to': getComputedStyleColor(gradientTo) || '#34d399'
        } as React.CSSProperties
      }>
      {/* 1. Spotlight Effect (Hover State) */}
      <motion.div
        className='pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100'
        style={{ background: spotlightBackground }}
      />

      {/* 2. Active Border Animation (Focus State) */}
      <motion.div
        className='absolute inset-0 rounded-xl bg-gradient-to-r opacity-0 blur-md transition-opacity duration-300'
        animate={{ opacity: isFocused ? 0.6 : 0 }}
        style={{
          background: focusBackground,
          backgroundImage: `conic-gradient(from ${rotation.get()}deg, transparent 0deg, var(--tw-gradient-from) 60deg, var(--tw-gradient-to) 120deg, transparent 180deg)`
        }}
      />

      {/* 3. Sharp Rotating Border (Focus State - Top Layer) */}
      <motion.div
        className='absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300'
        animate={{ opacity: isFocused ? 1 : 0 }}
        style={{
          background: focusBackground
        }}
      />

      {/* 4. Inner Content Container */}
      <div
        className={`relative flex rounded-[10px] bg-slate-950 ring-1 ring-white/10 transition-all duration-300 group-hover:ring-white/20 ${isTextArea ? 'items-start' : 'items-center'} `}>
        {/* Icon */}
        {icon && (
          <div
            className={`ml-4 transition-colors duration-300 ${isFocused ? 'text-slate-200' : 'text-slate-500'} ${isTextArea ? 'mt-3.5' : ''} `}>
            {icon}
          </div>
        )}

        {/* Input or Textarea */}
        {isTextArea ? (
          <textarea
            className={`w-full resize-none bg-transparent px-4 py-3.5 text-sm text-slate-200 placeholder-slate-500 outline-none transition-all duration-300 ${!icon ? 'pl-4' : ''} `}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        ) : (
          <input
            className={`w-full bg-transparent px-4 py-3.5 text-sm text-slate-200 placeholder-slate-500 outline-none transition-all duration-300 ${!icon ? 'pl-4' : ''} `}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
          />
        )}
      </div>
    </div>
  );
};

function getComputedStyleColor(twClass: string): string | null {
  if (twClass.includes('cyan')) return '#22d3ee';
  if (twClass.includes('emerald')) return '#34d399';
  if (twClass.includes('fuchsia')) return '#d946ef';
  if (twClass.includes('purple')) return '#9333ea';
  if (twClass.includes('amber')) return '#fbbf24';
  if (twClass.includes('orange')) return '#f97316';
  if (twClass.includes('blue')) return '#3b82f6';
  if (twClass.includes('indigo')) return '#6366f1';
  return null;
}
