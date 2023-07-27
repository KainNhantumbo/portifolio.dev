import { FC } from 'react';
import { IoClose } from 'react-icons/io5';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { _languageSwitcher as Container } from '../../styles/components/language-switcher';
import { DefaultTheme, useTheme } from 'styled-components';

type TLanguages = 'pt' | 'en';

type TProps = {
  close: React.Dispatch<React.SetStateAction<boolean>>;
  active: boolean;
};

const LanguageSwitcher: FC<TProps> = (props): JSX.Element => {
  const theme: DefaultTheme = useTheme();
  const { t: translation, i18n } = useTranslation();

  const translate = (language: TLanguages): void => {
    i18n.changeLanguage(language);
    props.close(false);
  };

  return (
    <AnimatePresence>
      {props.active && (
        <Container onClick={(e) => props.close(false)}>
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
              <div className='prompt-actions'>
                <motion.button
                  whileTap={{ scale: 0.8 }}
                  whileHover={{ scale: 1.1 }}
                  className='prompt-cancel'
                  onClick={(e) => props.close(false)}>
                  <IoClose />
                  <span>
                    {translation('language_switcher_modal.button-text')}
                  </span>
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
