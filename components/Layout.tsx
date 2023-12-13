import Head from './Head';
import Footer from './Footer';
import Header from './Header';
import { ReactNode } from 'react';
import { HeadProps } from '@/types';
import FluentButtons from './FluentButtons';

type Props = { children: ReactNode; metadata?: HeadProps };

export default function Layout({ children, metadata }: Props) {
  return (
    <>
      <Head metadata={metadata} />
      <Header />
      <FluentButtons />
      {children}
      <Footer />
    </>
  );
}
