import actions from '../../shared/actions';
import { RiCloseLine } from 'react-icons/ri';
import { useTranslation } from 'react-i18next';
import { useAppContext } from '../../context/AppContext';
import { m as motion, AnimatePresence } from 'framer-motion';
import { _languageSwitcher as Container } from '../../styles/components/language-switcher';

export default function LanguageSwitcher() {
  const { state, dispatch } = useAppContext();
  const { t: translation, i18n } = useTranslation();

  const translate = (language: 'pt' | 'en') => {
    i18n.changeLanguage(language);
    dispatch({
      type: actions.LANGUAGES_MODAL,
      payload: { ...state, isLanguagesModal: false }
    });
  };

  return (
    <AnimatePresence>
      {state.isLanguagesModal && (
        <Container
          onClick={(e) =>
            dispatch({
              type: actions.LANGUAGES_MODAL,
              payload: { ...state, isLanguagesModal: false }
            })
          }>
          <motion.section
            className='dialog-modal'
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
                <span className='prompt-title'>
                  {translation('language_switcher_modal.title')}
                </span>
                <p className='prompt-message'>
                  {translation('language_switcher_modal.message')}
                </p>
                <div className='buttons-container'>
                  <motion.button
                    whileTap={{ scale: 0.8 }}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => translate('en')}>
                    {translation('language_switcher_modal.buttons.english')}
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.8 }}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => translate('pt')}>
                    {translation('language_switcher_modal.buttons.portuguese')}
                  </motion.button>
                </div>
              </div>
              <motion.button
                whileTap={{ scale: 0.8 }}
                whileHover={{ scale: 1.1 }}
                className='prompt-close'
                onClick={(e) =>
                  dispatch({
                    type: actions.LANGUAGES_MODAL,
                    payload: { ...state, isLanguagesModal: false }
                  })
                }>
                <RiCloseLine />
              </motion.button>
            </div>
          </motion.section>
        </Container>
      )}
    </AnimatePresence>
  );
}