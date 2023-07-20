import { FC } from 'react';
import { TModalProps } from '../../@types';
import { useTranslation } from 'react-i18next';
import { FaTimesCircle } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { LanguageSwitcherContainer as Container } from '../../styles/components/language-switcher';

type TLanguages = 'pt' | 'en';

type TProps = {
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
  active: boolean;
};

const LanguageSwitcher: FC<TProps> = (props): JSX.Element => {
  const { t: translation, i18n } = useTranslation();

  const translate = (language: TLanguages): void => {
    i18n.changeLanguage(language);
  };

  return (
    <AnimatePresence>
      {!props.active && (
        <Container onClick={(e) => props.closeModal(false)}>
          <motion.section
            className='dialog-modal'
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{
              opacity: 0,
              scale: 0,
              transition: { duration: 0.3 },
            }}>
            <div className='dialog-prompt'>
              <div className='prompt-info'>
                <span className='prompt-title'>{translation('language-switcher-modal.title')}</span>
                <p className='prompt-message'>{translation('language-switcher-modal.message')}</p>
                <div className='buttons-container'>
                  <button onClick={() => translate('en')}>
                    {translation('language-switcher-modal.buttons.english')}
                  </button>
                  <button onClick={() => translate('en')}>
                    {translation('language-switcher-modal.buttons.portuguese')}
                  </button>
                </div>
              </div>
              <div className='prompt-actions'>
                <motion.button
                  whileTap={{ scale: 0.8 }}
                  whileHover={{ scale: 1.1 }}
                  className='prompt-cancel'
                  onClick={(e) => props.closeModal(false)}>
                  <FaTimesCircle />
                  <span>{translation('language-switcher-modal.button-text')}</span>
                </motion.button>
              </div>
            </div>
          </motion.section>
        </Container>
      )}
    </AnimatePresence>
  );
};

export default LanguageSwitcher;
