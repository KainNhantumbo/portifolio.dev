'use client';

import { useAppContext } from '@/context/app-context';
import { useScopedI18n } from '@/locales/client';
import { AnimatePresence, motion } from '@/providers/framer-provider';
import actions from '@/shared/actions';
import { XIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

export const LanguageSwitcher = () => {
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
          className='fixed left-0 top-0 z-[10000] grid h-[100vh] w-[100vw] select-none place-content-center bg-foreground/20 backdrop-blur-sm'
          onClick={() =>
            dispatch({
              type: actions.LANGUAGES_MODAL,
              payload: { ...state, isLanguagesModal: false }
            })
          }>
          <motion.section
            className='dialog-modal base-border rounded-xl bg-foreground/90 font-sans backdrop-blur-md'
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{
              opacity: 0,
              scale: 0,
              transition: { duration: 0.3 }
            }}>
            <div className='relative mx-3 flex max-w-[400px] flex-col gap-5 px-2 py-5'>
              <div className='flex flex-col gap-3'>
                <span className='font-sans font-medium text-primary'>
                  {translation('title')}
                </span>
                <p className='text-sm'>{translation('message')}</p>
                <div className='mx-auto mt-5 flex w-full flex-wrap justify-center gap-2'>
                  <motion.button
                    whileTap={{ scale: 0.85 }}
                    whileHover={{ scale: 1.05 }}
                    className='base-border w-fit overflow-hidden text-ellipsis whitespace-nowrap rounded-xl bg-background px-2 py-2 text-center text-sm transition-colors hover:text-primary'
                    onClick={() => translate('en')}>
                    {translation('buttons.english')}
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.85 }}
                    whileHover={{ scale: 1.05 }}
                    className='base-border w-fit overflow-hidden text-ellipsis whitespace-nowrap rounded-xl bg-background px-2 py-2 text-center text-sm transition-colors hover:text-primary'
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
                <XIcon className='transition-colors group-hover:stroke-error' />
              </motion.button>
            </div>
          </motion.section>
        </section>
      ) : null}
    </AnimatePresence>
  );
};
