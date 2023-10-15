import { m as motion } from 'framer-motion';
import { HiSparkles } from 'react-icons/hi';
import { useTranslation } from 'react-i18next';
import { RiGithubLine, RiLinkedinFill } from 'react-icons/ri';
import { _introduction as Container } from '../styles/modules/_introduction';

export default function Introduction() {
  const { t: translation } = useTranslation();

  const socialAnchors = [
    {
      name: translation('footer.anchors.github'),
      icon: RiGithubLine,
      link: 'https://github.com/KainNhantumbo'
    },
    {
      name: translation('footer.anchors.linkedIn'),
      icon: RiLinkedinFill,
      link: 'https://www.linkedin.com/in/kain-nhantumbo/?locale=en_US'
    }
  ];

  return (
    <Container id='home'>
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

      <p>
        {translation('intro.message-part-1')}
        <br />
        {translation('intro.message-part-2')}
      </p>
    </Container>
  );
}
