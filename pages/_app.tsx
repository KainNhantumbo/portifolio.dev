import '../styles/globals.css';
import type { FC } from 'react';
import '../locales/init';
import type { AppProps } from 'next/app';
import AppContext from '../context/AppContext';

const MyApp: FC<AppProps> = ({ Component, pageProps }): JSX.Element => (
  <AppContext>
    <Component {...pageProps} />
  </AppContext>
);

export default MyApp;
