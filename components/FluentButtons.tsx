'use client';

import {
  ArrowUpIcon,
  LanguagesIcon,
  MoonStarIcon,
  SunMediumIcon
} from 'lucide-react';
import { _fluentButtons as Container } from '../styles/modules/_fluent-buttons';
import { motion } from '@/providers/framer-provider';
import { usePathname } from 'next/navigation';
import { useAppContext } from '../context/AppContext';
import actions from '../shared/actions';
import { useTheme } from 'next-themes';

export default function FluentButtons() {
  const pathname = usePathname();
  const { setTheme, theme } = useTheme();
  const isPortfolio = pathname?.includes('blog') === false;
  const { state, dispatch } = useAppContext();

  const slidePageUp = () =>
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: 'smooth'
    });

  return (
    <Container>
      <div>
        {isPortfolio ? (
          <motion.button
            className='w-7 h-7 mt-2 border-none bg-primary/20 backdrop-blur-md rounded-[10px] grid place-content-center cursor-pointer relative'
            whileTap={{ scale: 0.7 }}
            transition={{ type: 'spring', duration: 0.5 }}
            onClick={() =>
              dispatch({
                type: actions.LANGUAGES_MODAL,
                payload: { ...state, isLanguagesModal: true }
              })
            }>
            <LanguagesIcon className='w-5 h-5 stroke-primary' />
          </motion.button>
        ) : null}

        <motion.button
          className='w-7 h-7 mt-2 border-none bg-primary/20 backdrop-blur-md rounded-[10px] grid place-content-center cursor-pointer relative'
          whileTap={{ scale: 0.7 }}
          transition={{ type: 'spring', duration: 0.5 }}
          title='Change Theme'
          aria-label='Toogle theme'
          onClick={() =>
            theme === 'light' ? setTheme('dark') : setTheme('light')
          }>
          {theme === 'light' ? (
            <SunMediumIcon className='w-5 h-5 stroke-primary' />
          ) : (
            <MoonStarIcon className='w-5 h-5 stroke-primary' />
          )}
        </motion.button>
        <motion.button
          className='w-7 h-7 mt-2 border-none bg-primary/20 backdrop-blur-md rounded-[10px] grid place-content-center cursor-pointer relative'
          title='Go to Top'
          onClick={slidePageUp}
          whileTap={{ scale: 0.7 }}
          transition={{ type: 'spring', duration: 0.5 }}>
          <ArrowUpIcon className='w-5 h-5 stroke-primary' />
        </motion.button>
      </div>
    </Container>
  );
}
