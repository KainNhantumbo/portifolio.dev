'use client';

import {
  ArrowUpIcon,
  LanguagesIcon,
  MoonStarIcon,
  SunMediumIcon
} from 'lucide-react';
import { motion } from '@/providers/framer-provider';
import { usePathname } from 'next/navigation';
import { useAppContext } from '../context/AppContext';
import actions from '../shared/actions';
import { useTheme } from 'next-themes';

export default function FluentButtons() {
  const pathname = usePathname();
  const { setTheme, theme } = useTheme();
  const { state, dispatch } = useAppContext();
  const isPortfolio = pathname?.includes('blog') === false;

  const slidePageUp = () =>
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: 'smooth'
    });

  return (
    <section className='z-[3000] fixed bottom-[135px] left-[97vw] grid place-content-center w-0 h-0 max-[690px]:left-[95vw] max-[480px]:left-[90vw]'>
      <div>
        {isPortfolio ? (
          <motion.button
            className='w-7 h-7 mt-2 border-none bg-primary/20 backdrop-blur-md rounded-[10px] grid place-content-center cursor-pointer relative group'
            whileTap={{ scale: 0.7 }}
            whileHover={{ y: -4 }}
            initial={{ x: 200 }}
            animate={{ x: 0, transition: { delay: 0.5 } }}
            transition={{ type: 'spring', duration: 0.5 }}
            onClick={() =>
              dispatch({
                type: actions.LANGUAGES_MODAL,
                payload: { ...state, isLanguagesModal: true }
              })
            }>
            <LanguagesIcon className='w-5 h-5 stroke-primary group-hover:stroke-secondary transition-colors' />
          </motion.button>
        ) : null}

        <motion.button
          className='group w-7 h-7 mt-2 border-none bg-primary/20 backdrop-blur-md rounded-[10px] grid place-content-center cursor-pointer relative'
          whileTap={{ scale: 0.7 }}
          whileHover={{ y: -4 }}
          initial={{ x: 200 }}
          animate={{ x: 0, transition: { delay: 0.8 } }}
          transition={{ type: 'spring', duration: 0.5 }}
          title='Change Theme'
          aria-label='Toggle theme'
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          {theme === 'light' ? (
            <MoonStarIcon className='w-5 h-5 stroke-primary group-hover:stroke-secondary transition-colors' />
          ) : (
            <SunMediumIcon className='w-5 h-5 stroke-primary group-hover:stroke-secondary transition-colors' />
          )}
        </motion.button>
        <motion.button
          className='group w-7 h-7 mt-2 border-none bg-primary/20 backdrop-blur-md rounded-[10px] grid place-content-center cursor-pointer relative'
          title='Go to Top'
          onClick={slidePageUp}
          whileHover={{ y: -4 }}
          initial={{ x: 200 }}
          animate={{ x: 0, transition: { delay: 1 } }}
          whileTap={{ scale: 0.7 }}
          transition={{ type: 'spring', duration: 0.5 }}>
          <ArrowUpIcon className='w-5 h-5 stroke-primary group-hover:stroke-secondary transition-colors' />
        </motion.button>
      </div>
    </section>
  );
}
