import '../locales/init';
import '../styles/globals.css';
import type { FC } from 'react';
import type { AppProps } from 'next/app';
import AppContext from '../context/AppContext';
import { LazyMotion, MotionConfig, domAnimation } from 'framer-motion';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => (
  <AppContext>
    <MotionConfig reducedMotion='user'>
      <LazyMotion strict={true} features={domAnimation}>
        <Component {...pageProps} />
      </LazyMotion>
    </MotionConfig>
  </AppContext>
);

export default MyApp;
