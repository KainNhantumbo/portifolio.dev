import '@/locales/init';
import '@/styles/index.css';

import clsx from 'clsx';
import {
  Space_Grotesk,
  Zilla_Slab,
  IBM_Plex_Mono,
  Plus_Jakarta_Sans
} from 'next/font/google';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import AppContext from '@/context/AppContext';
import FluentButtons from '@/components/FluentButtons';
import { constants, AUTHOR } from '@/shared/constants';
import AnimatePageTransition from '@/components/AnimatePageTransition';
import { LazyMotion, MotionConfig, domAnimation } from '@/providers/framer';
import StyledComponentsRegistry from '@/lib/registry';

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] });

const spaceGrotesk = Space_Grotesk({
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

export const metadata: Metadata = {
  title: constants.title,
  description: constants.description,
  authors: [{ name: AUTHOR.name, url: AUTHOR.email }],
  category: 'website',
  icons: '/favicon.png',
  openGraph: {
    url: constants.url,
    title: constants.title,
    description: constants.description,
    siteName: 'Codenut.dev',
    locale: 'en_US'
  }
};

type Props = { children: ReactNode };

export default function RootLayout({ children }: Props) {
  return (
    <html lang='en'>
      <body
        className={clsx(
          spaceGrotesk.className,
          ibmPlexMono.className,
          zillaSlab.className,
          jakarta.className
        )}>
        <MotionConfig reducedMotion='user'>
          <LazyMotion strict={true} features={domAnimation}>
            <AnimatePageTransition>
              <StyledComponentsRegistry>
                <AppContext>
                  <Header />
                  <FluentButtons />
                  {children}
                  <Footer />
                </AppContext>
              </StyledComponentsRegistry>
            </AnimatePageTransition>
          </LazyMotion>
        </MotionConfig>
      </body>
    </html>
  );
}
