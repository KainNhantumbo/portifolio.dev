'use client';
import { cn } from '@/lib/utils';
import { m as motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useCallback } from 'react';

type AnimationVariant = 'circle' | 'circle-blur';
type StartPosition = 'center' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

export interface ThemeToggleButtonProps {
  theme?: 'light' | 'dark';
  showLabel?: boolean;
  variant?: AnimationVariant;
  start?: StartPosition;
  className?: string;
  onClick?: () => void;
}
export const ThemeToggleButton = ({
  theme = 'light',
  showLabel = false,
  variant = 'circle',
  start = 'center',
  className,
  onClick
}: ThemeToggleButtonProps) => {
  const handleClick = useCallback(() => {
    // Inject animation styles for this specific transition
    const styleId = `theme-transition-${Date.now()}`;
    const style = document.createElement('style');
    style.id = styleId;

    // Generate animation CSS based on variant
    let css = '';
    const positions = {
      center: 'center',
      'top-left': 'top left',
      'top-right': 'top right',
      'bottom-left': 'bottom left',
      'bottom-right': 'bottom right'
    };

    if (variant === 'circle') {
      const cx = start === 'center' ? '50' : start.includes('left') ? '0' : '100';
      const cy = start === 'center' ? '50' : start.includes('top') ? '0' : '100';
      css = `
        @supports (view-transition-name: root) {
          ::view-transition-old(root) {
            animation: none;
          }
          ::view-transition-new(root) {
            animation: circle-expand 0.4s ease-out;
            transform-origin: ${positions[start]};
          }
          @keyframes circle-expand {
            from {
              clip-path: circle(0% at ${cx}% ${cy}%);
            }
            to {
              clip-path: circle(150% at ${cx}% ${cy}%);
            }
          }
        }
      `;
    } else if (variant === 'circle-blur') {
      const cx = start === 'center' ? '50' : start.includes('left') ? '0' : '100';
      const cy = start === 'center' ? '50' : start.includes('top') ? '0' : '100';
      css = `
        @supports (view-transition-name: root) {
          ::view-transition-old(root) {
            animation: none;
          }
          ::view-transition-new(root) {
            animation: circle-blur-expand 0.5s ease-out;
            transform-origin: ${positions[start]};
            filter: blur(0);
          }
          @keyframes circle-blur-expand {
            from {
              clip-path: circle(0% at ${cx}% ${cy}%);
              filter: blur(4px);
            }
            to {
              clip-path: circle(150% at ${cx}% ${cy}%);
              filter: blur(0);
            }
          }
        }
      `;
    }

    if (css) {
      style.textContent = css;
      document.head.appendChild(style);

      // Clean up animation styles after transition
      setTimeout(() => {
        const styleEl = document.getElementById(styleId);
        if (styleEl) {
          styleEl.remove();
        }
      }, 3000);
    }

    // Call the onClick handler if provided
    onClick?.();
  }, [onClick, variant, start, theme]);

  return (
    <motion.button
      whileTap={{ scale: 0.7 }}
      whileHover={{ y: -4 }}
      initial={{ x: 200 }}
      animate={{ x: 0, transition: { delay: 0.8 } }}
      transition={{ type: 'spring', duration: 0.5 }}
      title='Change Theme'
      onClick={handleClick}
      className={cn(
        'group relative mt-2 grid h-7 w-7 cursor-pointer place-content-center overflow-hidden rounded-[10px] border-none bg-primary/20 backdrop-blur-md transition-all md:h-12 md:w-12 md:rounded-2xl',
        showLabel && 'gap-2',
        className
      )}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}>
      {theme === 'light' ? (
        <Sun className='h-5 w-5 stroke-primary transition-colors group-hover:stroke-secondary md:h-8 md:w-8' />
      ) : (
        <Moon className='h-5 w-5 stroke-primary transition-colors group-hover:stroke-secondary md:h-8 md:w-8' />
      )}
      {showLabel && <span className='text-sm'>{theme === 'light' ? 'Light' : 'Dark'}</span>}
    </motion.button>
  );
};

// Export a helper hook for using with View Transitions API
export const useThemeTransition = () => {
  const startTransition = useCallback((updateFn: () => void) => {
    if ('startViewTransition' in document) {
      (document as any).startViewTransition(updateFn);
    } else {
      updateFn();
    }
  }, []);
  return { startTransition };
};
