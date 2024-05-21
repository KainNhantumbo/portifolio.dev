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
import AnimatedCursor from 'react-animated-cursor';
import { cursorClickablesList, locales } from '@/shared/constants';
import {
  ibmPlexMono,
  jakarta,
  spaceGrotesk,
  zillaSlab,
  splineSansMono
} from '@/shared/fonts';
import clsx from 'clsx';
import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';
import type { PageParams } from '@/types';

export { generateStaticParams } from '@/lib/utils';

type Props = PageParams & { children: ReactNode };

export default function RootLayout({ children, params: { locale } }: Props) {
  if (!locales.includes(locale)) notFound();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={clsx(
          spaceGrotesk.variable,
          splineSansMono.variable,
          ibmPlexMono.variable,
          zillaSlab.variable,
          jakarta.variable
        )}>
        <AnimatedCursor
          innerSize={12}
          outerSize={12}
          color='253, 56, 79'
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={5}
          showSystemCursor={true}
          clickables={cursorClickablesList}
        />
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
}
