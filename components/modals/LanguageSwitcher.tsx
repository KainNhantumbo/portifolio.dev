'use client';

import actions from '@/shared/actions';
import { useAppContext } from '@/context/AppContext';
import { motion, AnimatePresence } from '@/providers/framer-provider';
import { _languageSwitcher as Container } from '@/styles/modules/_language-switcher';
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
      {state.isLanguagesModal && (
        <Container
          onClick={() =>
            dispatch({
              type: actions.LANGUAGES_MODAL,
              payload: { ...state, isLanguagesModal: false }
            })
          }>
          <motion.section
            className='dialog-modal base-border rounded-xl backdrop-blur-md bg-background/50 font-sans '
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{
              opacity: 0,
              scale: 0,
              transition: { duration: 0.3 }
            }}>
            <div className='dialog-prompt'>
              <div className='prompt-info'>
                <span className='prompt-title font-sans-display'>
                  {translation('title')}
                </span>
                <p className='prompt-message'>
                  {translation('message')}
                </p>
                <div className='buttons-container'>
                  <motion.button
                    whileTap={{ scale: 0.8 }}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => translate('en')}>
                    {translation('buttons.english')}
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.8 }}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => translate('pt')}>
                    {translation('buttons.portuguese')}
                  </motion.button>
                </div>
              </div>
              <motion.button
                whileTap={{ scale: 0.8 }}
                whileHover={{ scale: 1.1 }}
                className='prompt-close'
                onClick={() =>
                  dispatch({
                    type: actions.LANGUAGES_MODAL,
                    payload: { ...state, isLanguagesModal: false }
                  })
                }>
                <XIcon />
              </motion.button>
            </div>
          </motion.section>
        </Container>
      )}
    </AnimatePresence>
  );
}
