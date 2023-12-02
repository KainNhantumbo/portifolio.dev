import '../locales/init';
import '../styles/globals.css';
import type { FC } from 'react';
import type { AppProps } from 'next/app';
import AppContext from '../context/AppContext';
import {
  Inter,
  Space_Grotesk,
  Zilla_Slab,
  IBM_Plex_Mono
} from 'next/font/google';
import { LazyMotion, MotionConfig, domAnimation } from 'framer-motion';
import dynamic from 'next/dynamic';

const AnimatePageTransition = dynamic(
  import('@/components/AnimatePageTransition')
);

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal']
});

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

const ibmPlexMono = IBM_Plex_Mono({
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
                ${zillaSlab.style.fontFamily}, ${spaceGrotesk.style.fontFamily},
                ${ibmPlexMono.style.fontFamily};
            }
          `}</style>
          <AnimatePageTransition>
            <Component {...pageProps} />
          </AnimatePageTransition>
        </>
      </LazyMotion>
    </MotionConfig>
  </AppContext>
);

export default MyApp;
