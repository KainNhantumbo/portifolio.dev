'use client';

import Image from 'next/image';
import { motion } from '@/providers/framer-provider';
import { AUTHOR } from '../shared/constants';
import { _about as Container } from '../styles/modules/_about';
import { Code2Icon, SquareStackIcon, UserIcon } from 'lucide-react';
import { useScopedI18n } from '@/locales/client';

export default function About() {
  const translation = useScopedI18n('about');

  return (
    <Container id='about'>
      <h2>
        <UserIcon />
        <span>{translation('title')}</span>
      </h2>
      <section className='experiences'>
        <div className='header-container'>
          <div>
            <h3>Kain Nhantumbo</h3>
            <p className='op'>{translation('subtitle')}</p>
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
          {translation('intro-1')}
        </motion.p>
        <motion.p
          transition={{ delay: 0.4 }}
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}>
          {translation('intro-2')}
        </motion.p>
      </section>

      <section className='cards-container'>
        <motion.div
          className='card'
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0.4, rotate: 360 }}
          whileInView={{ rotate: 0, opacity: 1 }}>
          <Code2Icon />
          <h4>{translation('experience-title')}</h4>
          <span>{translation('experience-content')}</span>
        </motion.div>

        <motion.div
          className='card'
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0.4, rotate: 360 }}
          whileInView={{ rotate: 0, opacity: 1 }}>
          <SquareStackIcon />
          <h4>{translation('projects-title')}</h4>
          <span>{translation('projects-content')}</span>
        </motion.div>
      </section>
    </Container>
  );
}
