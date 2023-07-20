import { FC } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { HiSparkles } from 'react-icons/hi';
import { useTranslation } from 'react-i18next';
import { useAppContext } from '../context/AppContext';
import { DefaultTheme, useTheme } from 'styled-components';
import intro_background from '../assets/intro-background.jpg';
import intro_background2 from '../assets/intro-background2.jpg';
import { IntroductionContainer as Container } from '../styles/components/introduction';

const Introduction: FC = (): JSX.Element => {
  const { darkmode } = useAppContext();
  const { text, font }: DefaultTheme = useTheme();
  const { t: translation } = useTranslation();

  return (
    <Container id='home'>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1, transition: { delay: 0.2 } }}
        className='intro-background'>
        <Image
          src={darkmode ? intro_background : intro_background2}
          style={{ borderRadius: 20 }}
          height={600}
          layout={'fixed'}
          objectFit={'cover'}
          placeholder={'blur'}
          alt={'Intro wallpaper'}
        />
      </motion.div>
      <div className='intro-details'>
        <motion.h3
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5 }}
          className='placeholder'>
          <HiSparkles />
          <span>{translation('intro.welcome-message')}</span>
        </motion.h3>

        <h1>{translation('intro.presentation')}</h1>
        <p
          style={{
            color: darkmode ? text : font,
            textShadow: !darkmode ? `1px 1px 3px rgb(${font})` : 'none',
          }}>
          {translation('intro.message-part-1')}
          <br />
          {translation('intro.message-part-2')}
        </p>
      </div>
    </Container>
  );
};

export default Introduction;
