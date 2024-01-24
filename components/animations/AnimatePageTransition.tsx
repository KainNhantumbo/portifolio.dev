'use client';

import { motion, AnimatePresence } from '@/providers/framer-provider';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

type Props = { children: ReactNode };

export default function AnimatePageTransition({ children }: Props) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      <motion.div
        key={pathname}
        initial={'initialState'}
        animate={'animateState'}
        exit={'exitState'}
        transition={{ duration: 0.5 }}
        variants={{
          initialState: {
            opacity: 0
          },
          animateState: {
            opacity: 1
          },
          exitState: {
            opacity: 0
          }
        }}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
