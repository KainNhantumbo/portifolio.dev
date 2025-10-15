'use client';

import { motion } from '@/providers/framer-provider';
import { ArrowUpIcon, LanguagesIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useAppContext } from '../context/app-context';
import actions from '../shared/actions';
import { ThemeToggle } from './theme-toggle';

export const ActionFluentButtons = () => {
  const pathname = usePathname();
  const { state, dispatch } = useAppContext();
  const isPortfolio = pathname?.includes('blog') === false;

  const slidePageUp = () => {
    return window.scrollTo({
      left: 0,
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <section className='fixed bottom-[135px] left-[97vw] z-[3000] grid h-0 w-0 place-content-center max-[690px]:left-[95vw] max-[480px]:left-[90vw]'>
      <div className='md:space-y-4'>
        {isPortfolio ? (
          <motion.button
            className='group relative mt-2 grid h-7 w-7 cursor-pointer place-content-center rounded-[10px] border-none bg-primary/20 backdrop-blur-md md:h-12 md:w-12 md:rounded-2xl'
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
            <LanguagesIcon className='h-5 w-5 stroke-primary transition-colors group-hover:stroke-secondary md:h-8 md:w-8' />
          </motion.button>
        ) : null}

        <ThemeToggle />

        <motion.button
          className='group relative mt-2 grid h-7 w-7 cursor-pointer place-content-center rounded-[10px] border-none bg-primary/20 backdrop-blur-md md:h-12 md:w-12 md:rounded-2xl'
          title='Go to Top'
          onClick={slidePageUp}
          whileHover={{ y: -4 }}
          initial={{ x: 200 }}
          animate={{ x: 0, transition: { delay: 1 } }}
          whileTap={{ scale: 0.7 }}
          transition={{ type: 'spring', duration: 0.5 }}>
          <ArrowUpIcon className='h-5 w-5 stroke-primary transition-colors group-hover:stroke-secondary md:h-8 md:w-8' />
        </motion.button>
      </div>
    </section>
  );
};
