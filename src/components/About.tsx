import Image from 'next/image';
import { m as motion } from 'framer-motion';
import { SiAboutdotme } from 'react-icons/si';
import { useTranslation } from 'react-i18next';
import { HiCode, HiViewGrid } from 'react-icons/hi';
import authorImage from '../../public/assets/author.jpg';
import { _about as Container } from '../styles/components/about';

export default function About() {
  const { t: translation } = useTranslation();

  return (
    <Container id='about'>
      <h2>
        <SiAboutdotme />
        <span>{translation('about.title')}</span>
      </h2>
      <section className='experiences'>
        <div className='header-container'>
          <div>
            <h3>Kain Nhantumbo</h3>
            <p className='op'>{translation('about.subtitle')}</p>
          </div>
          <Image width={100} height={100} src={authorImage} alt='author image' />
        </div>

        <p>{translation('about.intro-1')}</p>
        <p>{translation('about.intro-2')}</p>
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
}
