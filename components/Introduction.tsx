'use client';

import { motion } from '@/providers/framer';
import { useTranslation } from '@/providers/translation';
import { _introduction as Container } from '../styles/modules/_introduction';
import { GithubIcon, LinkedinIcon, StarsIcon } from 'lucide-react';

export default function Introduction() {
  const { t: translation } = useTranslation();

  const socialAnchors = [
    {
      name: translation('footer.anchors.github'),
      icon: GithubIcon,
      link: 'https://github.com/KainNhantumbo'
    },
    {
      name: translation('footer.anchors.linkedIn'),
      icon: LinkedinIcon,
      link: 'https://www.linkedin.com/in/kain-nhantumbo/?locale=en_US'
    }
  ];

  return (
    <Container id='home'>
      <div className='styled-intro-container'>
        <h3>{translation('intro.presentation')}</h3>
        <div className='title-container '>
          <motion.h1 initial={{ x: -300 }} whileInView={{ x: 0 }}>
            {translation('intro.title')}
          </motion.h1>
        </div>
      </div>

      <div className='welcome-container'>
        <motion.h3
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5 }}
          className='placeholder'>
          <StarsIcon />
          <span>{translation('intro.welcome-message')}</span>
        </motion.h3>

        <div className='anchors-container'>
          {socialAnchors.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target={'_blank'}
              rel={'noreferrer noopener'}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              title={item.name}>
              <item.icon />
            </motion.a>
          ))}
        </div>
      </div>

      <motion.p
        initial={{ scale: 0, y: -120, opacity: 0 }}
        whileInView={{ scale: 1, y: 0, opacity: 1 }}>
        <motion.i>{translation('intro.message-part-1')}</motion.i>
        <br />
        {translation('intro.message-part-2')}
      </motion.p>
    </Container>
  );
}
