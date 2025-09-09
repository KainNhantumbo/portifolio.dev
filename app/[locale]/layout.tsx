import '@/styles/blog-post.css';
import '@/styles/index.css';

import { ActionFluentButtons } from '@/components/action-fluent-buttons';
import { AnimatePageTransition } from '@/components/animations/animate-page-transition';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { AppContext } from '@/context/app-context';
import { I18nProviderClient } from '@/locales/client';
import { LazyMotion, MotionConfig, domAnimation } from '@/providers/framer-provider';
import { ThemeProvider } from '@/providers/theme-provider';
import { AUTHOR, constants, locales } from '@/shared/constants';
import {
  ibmPlexMono,
  jakarta,
  spaceGrotesk,
  splineSansMono,
  zillaSlab
} from '@/shared/fonts';
import type { PageParams } from '@/types';
import clsx from 'clsx';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';

export { generateStaticParams } from '@/lib/utils';

export const metadata: Metadata = {
  title: constants.title,
  description: constants.description,
  authors: [{ name: AUTHOR.name, url: AUTHOR.email }],
  category: 'website',
  robots: 'index, follow',
  icons: {
    icon: '/favicon.png'
  }
};

type Props = PageParams & { children: ReactNode };

export default async function RootLayout(props: Props) {
  const params = await props.params;

  const { locale } = params;
  const { children } = props;

  if (!locales.includes(locale)) notFound();

  return (
    <html lang={locale} data-scroll-behavior='smooth' suppressHydrationWarning>
      <body
        className={clsx(
          spaceGrotesk.variable,
          splineSansMono.variable,
          ibmPlexMono.variable,
          zillaSlab.variable,
          jakarta.variable
        )}>
        <ThemeProvider attribute='class' enableSystem={true}>
          <I18nProviderClient locale={locale}>
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
}
