import { FC } from 'react';
import { m as motion } from 'framer-motion';
import { SiAboutdotme } from 'react-icons/si';
import { useTranslation } from 'react-i18next';
import { HiCode, HiViewGrid } from 'react-icons/hi';
import { _about as Container } from '../styles/components/about';

const About: FC = () => {
  const { t: translation } = useTranslation();
  return (
    <Container id='about'>
      <h2>
        <SiAboutdotme />
        <span>{translation('about.title')}</span>
      </h2>
      <section className='experiences'>
        <p className='op'>{translation('about.subtitle')}</p>
        <motion.p
          initial={{ opacity: 0, y: 200 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          whileInView={{ opacity: 1, y: 0 }}>
          {translation('about.intro-1')}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 200 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          whileInView={{ opacity: 1, y: 0 }}>
          {translation('about.intro-2')}
        </motion.p>
      </section>

      <section className='cards-container'>
        <motion.div
          className='card'
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0.4, rotate: 360 }}
          whileInView={{ rotate: 0, opacity: 1 }}>
          <HiCode />
          <h4>{translation('about.experience-title')}</h4>
          <span>{translation('about.experience-content')}</span>
        </motion.div>

        <motion.div
          className='card'
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0.4, rotate: 360 }}
          whileInView={{ rotate: 0, opacity: 1 }}>
          <HiViewGrid />
          <h4>{translation('about.projects-title')}</h4>
          <span>{translation('about.projects-content')}</span>
        </motion.div>
      </section>
    </Container>
  );
};

export default About;
