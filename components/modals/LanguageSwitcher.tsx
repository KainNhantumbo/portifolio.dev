'use client';

import actions from '@/shared/actions';
import { useAppContext } from '@/context/AppContext';
import { motion, AnimatePresence } from '@/providers/framer-provider';
import { useRouter } from 'next/navigation';
import { XIcon } from 'lucide-react';
import { useScopedI18n } from '@/locales/client';

export default function LanguageSwitcher() {
  const { state, dispatch } = useAppContext();
  const router = useRouter();
  const translation = useScopedI18n('language_switcher_modal');

  const translate = (lang: 'pt' | 'en') => {
    router.push(`/${lang}`);

    dispatch({
      type: actions.LANGUAGES_MODAL,
      payload: { ...state, isLanguagesModal: false }
    });
  };

  return (
    <AnimatePresence>
      {state.isLanguagesModal ? (
        <section
          className='w-[100vw] h-[100vh] fixed bg-foreground/20 backdrop-blur-sm z-[10000] top-0 left-0 grid place-content-center select-none'
          onClick={() =>
            dispatch({
              type: actions.LANGUAGES_MODAL,
              payload: { ...state, isLanguagesModal: false }
            })
          }>
          <motion.section
            className='dialog-modal base-border rounded-xl backdrop-blur-md bg-foreground/90 font-sans '
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{
              opacity: 0,
              scale: 0,
              transition: { duration: 0.3 }
            }}>
            <div className='flex flex-col gap-5 px-2 py-5 max-w-[400px]  mx-3 relative'>
              <div className='flex flex-col gap-3'>
                <span className='font-medium text-primary font-sans-display'>
                  {translation('title')}
                </span>
                <p className='text-sm'>{translation('message')}</p>
                <div className='flex flex-wrap gap-2 mt-5 w-full mx-auto justify-center'>
                  <motion.button
                    whileTap={{ scale: 0.85 }}
                    whileHover={{ scale: 1.05 }}
                    className='base-border rounded-xl w-fit bg-background whitespace-nowrap text-ellipsis overflow-hidden text-center text-sm hover:text-primary transition-colors px-2 py-2'
                    onClick={() => translate('en')}>
                    {translation('buttons.english')}
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.85 }}
                    whileHover={{ scale: 1.05 }}
                    className='base-border rounded-xl w-fit bg-background whitespace-nowrap text-ellipsis overflow-hidden text-center text-sm hover:text-primary transition-colors px-2 py-2'
                    onClick={() => translate('pt')}>
                    {translation('buttons.portuguese')}
                  </motion.button>
                </div>
              </div>
              <motion.button
                whileTap={{ scale: 0.85 }}
                whileHover={{ scale: 1.1 }}
                className='base-corner-button group absolute right-0 top-3'
                onClick={() =>
                  dispatch({
                    type: actions.LANGUAGES_MODAL,
                    payload: { ...state, isLanguagesModal: false }
                  })
                }>
                <XIcon className='group-hover:stroke-error transition-colors' />
              </motion.button>
            </div>
          </motion.section>
        </section>
      ) : null}
    </AnimatePresence>
  );
}
