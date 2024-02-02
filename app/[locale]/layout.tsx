import '@/styles/blog-post.css';
import '@/styles/index.css';

import { ActionFluentButtons } from '@/components/action-fluent-buttons';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { AnimatePageTransition } from '@/components/animations/animate-page-transition';
import { AppContext } from '@/context/app-context';
import { I18nProviderClient } from '@/locales/client';
import {
  LazyMotion,
  MotionConfig,
  domAnimation
} from '@/providers/framer-provider';
import { ThemeProvider } from '@/providers/theme-provider';
import { AUTHOR, constants, locales } from '@/shared/constants';
import clsx from 'clsx';
import type { Metadata } from 'next';
import {
  IBM_Plex_Mono,
  Plus_Jakarta_Sans,
  Space_Grotesk,
  Zilla_Slab
} from 'next/font/google';
import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';

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
  icons: '/favicon.png'
};

type Props = { children: ReactNode; params: { locale: string } };

export { generateStaticParams } from '@/lib/utils';

const RootLayout = ({ children, params: { locale } }: Props) => {
  if (!locales.includes(locale)) notFound();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={clsx(
          spaceGrotesk.className,
          ibmPlexMono.className,
          zillaSlab.className,
          jakarta.className
        )}>
        <ThemeProvider attribute='class' enableSystem={true}>
          <I18nProviderClient locale={locale} fallback='en'>
            <MotionConfig reducedMotion='user'>
              <LazyMotion strict={true} features={domAnimation}>
                <AnimatePageTransition>
                  <AppContext>
                    <Header />
                    <ActionFluentButtons />
                    {children}
                    <Footer />
                  </AppContext>
                </AnimatePageTransition>
              </LazyMotion>
            </MotionConfig>
          </I18nProviderClient>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
