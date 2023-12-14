import Image from 'next/image';
<<<<<<< HEAD:components/About.tsx
import { motion } from '@/providers/framer';
import { useTranslation } from '@/providers/translation';
import { AUTHOR } from '../shared/constants';
=======
import { m as motion } from 'framer-motion';
import { SiAboutdotme } from 'react-icons/si';
import { useTranslation } from 'react-i18next';
import { HiCode, HiViewGrid } from 'react-icons/hi';
import { AUTHOR } from '@/lib/constants';
>>>>>>> parent of 06d8e11 (refactor: removed react-icons. Moved source from /src to /(root)):src/components/About.tsx
import { _about as Container } from '../styles/modules/_about';

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
          <motion.div whileInView={{ rotate: [0, 360] }}>
            <Image
              width={100}
              height={100}
              src={AUTHOR.picture}
              alt='author image'
            />
          </motion.div>
        </div>

        <motion.p
          transition={{ delay: 0.2 }}
          initial={{ y: -50 }}
          whileInView={{ y: 0 }}>
          {translation('about.intro-1')}
        </motion.p>
        <motion.p
          transition={{ delay: 0.4 }}
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}>
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
}
