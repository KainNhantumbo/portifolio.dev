import '../locales/init';
import '../styles/globals.css';
import type { FC } from 'react';
import type { AppProps } from 'next/app';
import AppContext from '../context/AppContext';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => (
  <AppContext>
    <Component {...pageProps} />
  </AppContext>
);

export default MyApp;