import Head from './Head';
import Footer from './Footer';
import Header from './Header';
import { HeadProps } from '@/types';
import actions from '../shared/actions';
import { ReactNode } from 'react';
import { m as motion } from 'framer-motion';
import { BsTranslate } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';
import { useAppContext } from '../context/AppContext';
import { BiMoon, BiSun, BiUpArrowAlt } from 'react-icons/bi';
import LanguageSwitcher from '../components/modals/LanguageSwitcher';
import { _fluentButtons as Container } from '../styles/components/fluent-buttons';

type Props = { children: ReactNode; metadata?: HeadProps };

export default function Layout({ children, metadata }: Props) {
  const { state, dispatch } = useAppContext();
  const { t: translation } = useTranslation();
  const { slidePageUp, colorScheme, changeColorScheme } = useAppContext();

  return (
    <>
      <Head />
      <Header />
      <Container>
        <div>
          <motion.button
            whileTap={{ scale: 0.7 }}
            transition={{ type: 'spring', duration: 0.5 }}
            onClick={() =>
              dispatch({
                type: actions.LANGUAGES_MODAL,
                payload: { ...state, isLanguagesModal: true },
              })
            }>
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
      <LanguageSwitcher />
      {children}
      <Footer />
    </>
  );
}
