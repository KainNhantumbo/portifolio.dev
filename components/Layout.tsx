import { FC } from 'react';
import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';
import { motion } from 'framer-motion';
import { TLayoutProps } from '../@types';
import { useAppContext } from '../context/AppContext';
import { BiMoon, BiSun, BiUpArrowAlt } from 'react-icons/bi';
import { FluentButtonsContainer as Container } from '../styles/components/fluent-buttons';

const Layout: FC<TLayoutProps> = ({ children }): JSX.Element => {
  const { themeSwitcher, slidePageUp, darkmode } = useAppContext();
  return (
    <>
      <Head>
        <meta name='author' content='Kain Nhantumbo' />
        <meta name='description' content='Kain Nhantumbo portifolio website' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <title>Kain Nhantumbo | Portfolio</title>
      </Head>
      <Header />
      <Container>
        <div>
          <motion.button
            whileTap={{ scale: 0.7 }}
            transition={{ type: 'spring', duration: 0.5 }}
            title='Change Theme'
            aria-label='Toogle theme'
            onClick={themeSwitcher}>
            {darkmode ? <BiSun /> : <BiMoon />}
          </motion.button>
          <motion.button
            title='Go to Top'
            onClick={slidePageUp}
            whileTap={{ scale: 0.7 }}
            transition={{ type: 'spring', duration: 0.5 }}>
            <BiUpArrowAlt />
          </motion.button>
        </div>
      </Container>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
