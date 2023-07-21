import '../locales/init';
import '../styles/globals.css';
import { FC, Suspense } from 'react';
import type { AppProps } from 'next/app';
import AppContext from '../context/AppContext';

const MyApp: FC<AppProps> = ({ Component, pageProps }): JSX.Element => (
  <Suspense fallback={'Loading...'}>
    <AppContext>
      <Component {...pageProps} />
    </AppContext>
  </Suspense>
);

export default MyApp;
