import Image from 'next/image';
import type { FC } from 'react';
import { m as motion } from 'framer-motion';
import { HiSparkles } from 'react-icons/hi';
import { useTranslation } from 'react-i18next';
import { useAppContext } from '../context/AppContext';
import intro_bg0 from '../public/assets/intro-bg0.jpg';
import intro_bg1 from '../public/assets/intro-bg1.jpg';
import { DefaultTheme, useTheme } from 'styled-components';
import { _introduction as Container } from '../styles/components/introduction';

const Introduction: FC = (): JSX.Element => {
  const { darkmode } = useAppContext();
  const { t: translation } = useTranslation();
  const { text, font }: DefaultTheme = useTheme();

  return (
    <Container id='home'>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1, transition: { delay: 0.2 } }}
        className='intro-background'>
        <Image
          src={darkmode ? intro_bg0 : intro_bg1}
          style={{ borderRadius: 12 }}
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
