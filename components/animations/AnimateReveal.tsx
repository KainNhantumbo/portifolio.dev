'use client';

import { useEffect, useRef, type FC } from 'react';
import { m as motion, useInView, useAnimation } from 'framer-motion';

type Props = {
  children: JSX.Element;
  width?: 'fit-content' | '100%';
  delay?: number;
  inverseDirection?: boolean;
};

export const Reveal: FC<Props> = ({
  children,
  delay = 0,
  inverseDirection = false,
  width = 'fit-content'
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const revealControls = useAnimation();
  const slideControls = useAnimation();

  const customVariants = !inverseDirection
    ? {
        hidden: { left: 0 },
        visible: { left: '100%' }
      }
    : {
        hidden: { right: 0 },
        visible: { right: '100%' }
      };

  useEffect(() => {
    if (isInView) {
      revealControls.start('visible');
      slideControls.start('visible');
    }
  }, [isInView, slideControls, revealControls]);

  return (
    <div ref={ref} style={{ width }} className='overflow-hidden relative'>
      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0, y: 90 },
          visible: { opacity: 1, scale: 1, y: 0 }
        }}
        initial='hidden'
        animate={revealControls}
        transition={{ delay: 0.25, duration: 0.5 }}>
        {children}
      </motion.div>
      <motion.div
        variants={customVariants}
        initial='hidden'
        animate={slideControls}
        transition={{ duration: 0.5, ease: 'easeIn', delay }}
        style={{
          position: 'absolute',
          top: 5,
          bottom: 5,
          left: 0,
          right: 0,
          background: '#FE6D2C',
          zIndex: 50
        }}
      />
    </div>
  );
};
