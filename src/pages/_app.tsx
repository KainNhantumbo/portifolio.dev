import '../locales/init';
import '../styles/globals.css';
import type { FC } from 'react';
import type { AppProps } from 'next/app';
import AppContext from '../context/AppContext';
import { Inter, Roboto, Zilla_Slab } from 'next/font/google';
import { LazyMotion, MotionConfig, domAnimation } from 'framer-motion';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal']
});

const zillaSlab = Zilla_Slab({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['italic', 'normal']
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['italic', 'normal']
});

const MyApp: FC<AppProps> = ({ Component, pageProps }) => (
  <AppContext>
    <MotionConfig reducedMotion='user'>
      <LazyMotion strict={true} features={domAnimation}>
        <>
          <style jsx global>{`
            html {
              font-family: ${inter.style.fontFamily},
                ${zillaSlab.style.fontFamily}, ${roboto.style.fontFamily};
            }
          `}</style>
          <Component {...pageProps} />
        </>
      </LazyMotion>
    </MotionConfig>
  </AppContext>
);

export default MyApp;
