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
import { FaGithub } from 'react-icons/fa';
import { ImLinkedin2 } from 'react-icons/im';

const Introduction: FC = () => {
  const { darkmode } = useAppContext();
  const { t: translation } = useTranslation();
  const { text, font }: DefaultTheme = useTheme();

  const socialAnchors = [
    {
      name: translation('footer.anchors.github'),
      icon: FaGithub,
      link: 'https://github.com/KainNhantumbo'
    },
    {
      name: translation('footer.anchors.linkedIn'),
      icon: ImLinkedin2,
      link: 'https://www.linkedin.com/in/kain-nhantumbo/?locale=en_US'
    }
  ];

  const renderAnchors = () => {
    return (
      <ul>
        {socialAnchors.map((item, index) => (
          <motion.li
            key={index}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            title={item.name}>
            <a href={item.link} target={'_blank'} rel={'noreferrer noopener'}>
              <item.icon />
            </a>
          </motion.li>
        ))}
      </ul>
    );
  };

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
        <div className='styled-intro-container'>
          <h3>{translation('intro.presentation')}</h3>
          <div className='title-container '>
            <h1>{translation('intro.title')}</h1>
          </div>
        </div>

        <div className='welcome-container'>
          <motion.h3
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 }}
            className='placeholder'>
            <HiSparkles />
            <span>{translation('intro.welcome-message')}</span>
          </motion.h3>
          {renderAnchors()}
        </div>

        <p
          style={{
            color: darkmode ? text : font,
            textShadow: !darkmode ? `1px 1px 3px rgb(${font})` : 'none'
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
