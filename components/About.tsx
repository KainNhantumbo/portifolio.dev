import Image from 'next/image';
import { m as motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { AUTHOR } from '../lib/constants';
import { _about as Container } from '../styles/modules/_about';
import { Code2Icon, SquareStackIcon, UserIcon } from 'lucide-react';

export default function About() {
  const { t: translation } = useTranslation();

  return (
    <Container id='about'>
      <h2>
        <UserIcon />
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
          <Code2Icon />
          <h4>{translation('about.experience-title')}</h4>
          <span>{translation('about.experience-content')}</span>
        </motion.div>

        <motion.div
          className='card'
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0.4, rotate: 360 }}
          whileInView={{ rotate: 0, opacity: 1 }}>
          <SquareStackIcon />
          <h4>{translation('about.projects-title')}</h4>
          <span>{translation('about.projects-content')}</span>
        </motion.div>
      </section>
    </Container>
  );
}
