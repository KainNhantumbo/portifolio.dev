import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';
import { FC, useState, ReactNode } from 'react';
import { m as motion } from 'framer-motion';
import { BsTranslate } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';
import { useAppContext } from '../context/AppContext';
import { BiMoon, BiSun, BiUpArrowAlt } from 'react-icons/bi';
import ConfirmModal from '../components/modals/ConfirmModal';
import LanguageSwitcher from '../components/modals/LanguageSwitcher';
import { _fluentButtons as Container } from '../styles/components/fluent-buttons';

type TProps = { children: ReactNode };

const Layout: FC<TProps> = ({ children }) => {
  const { t: translation } = useTranslation();
  const { slidePageUp, colorScheme, changeColorScheme } = useAppContext();
  const [isModalActive, setIsModalActive] = useState<boolean>(false);
  const [isLanguageSwitcher, setIsLanguageSwitcher] = useState<boolean>(false);

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
            onClick={() => setIsLanguageSwitcher(true)}>
            <BsTranslate />
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.7 }}
            transition={{ type: 'spring', duration: 0.5 }}
            title='Change Theme'
            aria-label='Toogle theme'
            onClick={() =>
              colorScheme.scheme === 'light'
                ? changeColorScheme({ mode: 'manual', scheme: 'dark' })
                : changeColorScheme({ mode: 'manual', scheme: 'light' })
            }>
            {colorScheme.scheme === 'light' ? <BiSun /> : <BiMoon />}
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
      <ConfirmModal
        active={isModalActive}
        prompt_title={translation('modal.title')}
        prompt_message={translation('modal.message')}
        closeModal={setIsModalActive}
        buttonText={translation('modal.button-text')}
      />
      <LanguageSwitcher
        active={isLanguageSwitcher}
        close={setIsLanguageSwitcher}
      />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
