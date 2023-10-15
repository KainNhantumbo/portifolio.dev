import Head from './Head';
import Footer from './Footer';
import Header from './Header';
import { ReactNode } from 'react';
import { HeadProps } from '@/types';
import actions from '../shared/actions';
import { useRouter } from 'next/router';
import { m as motion } from 'framer-motion';
import { BsTranslate } from 'react-icons/bs';
import { useAppContext } from '../context/AppContext';
import { BiMoon, BiSun, BiUpArrowAlt } from 'react-icons/bi';
import LanguageSwitcher from '../components/modals/LanguageSwitcher';
import { _fluentButtons as Container } from '../styles/components/fluent-buttons';

type Props = { children: ReactNode; metadata?: HeadProps };

export default function Layout({ children, metadata }: Props) {
  const router = useRouter();
  const { state, dispatch } = useAppContext();
  const { slidePageUp, colorScheme, changeColorScheme } = useAppContext();

  return (
    <>
      <Head metadata={metadata} />
      <Header />
      <Container>
        <div>
          {router.asPath.includes('blog') ? null : (
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
          )}
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
