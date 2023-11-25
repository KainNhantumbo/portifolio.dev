import { AnimatePresence, m as motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

type Props = { children: ReactNode };

export default function AnimatePageTransition({ children }: Props) {
  const router = useRouter();

  return (
    <AnimatePresence>
      <motion.div
        key={router.route}
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
