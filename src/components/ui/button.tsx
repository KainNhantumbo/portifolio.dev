'use client';

import { cn } from '@/lib/utils';
import { HTMLMotionProps, m as motion } from 'framer-motion';
import * as React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost' | 'neon';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  isLoading?: boolean;
  isFullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  isLoading = false,
  isFullWidth = false,
  className = '',
  disabled,
  ...props
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg font-semibold'
  };

  const baseGlass =
    'relative overflow-hidden rounded-2xl text-font backdrop-blur-md base-border shadow-[0_4px_30px_rgba(0,0,0,0.1)] transition-colors duration-300';

  const variantStyles = {
    primary: 'bg-white/10 base-border text-white hover:bg-white/20 hover:border-white/30',
    secondary: 'bg-black/20  text-white hover:bg-black/30',
    danger:
      'bg-red-500/10 border-red-500/20 text-red-100 hover:bg-red-500/20 hover:border-red-500/30 hover:shadow-[0_0_20px_rgba(239,68,68,0.3)]',
    ghost:
      'bg-transparent border-transparent text-white/80 hover:bg-white/5 hover:text-white',
    neon: 'bg-cyan-500/10 border-cyan-400/30 text-cyan-100 hover:bg-cyan-400/20 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:border-cyan-300/50'
  };

  const classes = cn(
    baseGlass,
    sizeClasses[size],
    variantStyles[variant],
    isFullWidth ? 'w-full flex justify-center' : 'inline-flex',
    disabled || isLoading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
    'items-center justify-center gap-2',
    className
  );

  return (
    <motion.button
      className={classes}
      disabled={disabled || isLoading}
      whileHover={disabled || isLoading ? {} : { scale: 1.02, y: -2 }}
      whileTap={disabled || isLoading ? {} : { scale: 0.96, y: 0 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      {...props}>
      {!disabled && !isLoading && variant !== 'ghost' && (
        <motion.div
          className='pointer-events-none absolute inset-0 z-0 -translate-x-full'
          animate={{
            translateX: isHovered ? ['-100%', '200%'] : '-100%'
          }}
          transition={{
            duration: 1.5,
            ease: 'easeInOut',
            repeat: isHovered ? Infinity : 0,
            repeatDelay: 0.5
          }}
          style={{
            background:
              'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)'
          }}
        />
      )}

      {variant === 'neon' && (
        <motion.div
          className='absolute inset-0 -z-10 bg-cyan-400/20 blur-xl'
          animate={{ opacity: isHovered ? 0.8 : 0 }}
        />
      )}

      <span className='relative z-10 flex items-center gap-2'>
        {isLoading ? (
          <LoaderIcon />
        ) : (
          <>
            {icon && <span className='text-current'>{icon}</span>}
            {children}
          </>
        )}
      </span>
    </motion.button>
  );
};

const LoaderIcon = () => (
  <motion.svg
    className='h-5 w-5'
    viewBox='0 0 24 24'
    animate={{ rotate: 360 }}
    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}>
    <path
      fill='none'
      stroke='currentColor'
      strokeWidth='3'
      strokeDasharray='16 64'
      strokeLinecap='round'
      d='M12 3 a9 9 0 0 1 9 9'
    />
  </motion.svg>
);

export default Button;
