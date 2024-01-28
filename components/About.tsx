'use client';

import { useScopedI18n } from '@/locales/client';
import { motion } from '@/providers/framer-provider';
import { Code2Icon, SquareStackIcon, UserIcon } from 'lucide-react';
import Image from 'next/image';
import { AUTHOR } from '../shared/constants';
import { _about as Container } from '../styles/modules/_about';

export default function About() {
  const translation = useScopedI18n('about');

  return (
    <Container
      id='about'
      className='w-full max-w-[700px] flex flex-col items-center gap-3 pt-5 mx-auto border-solid border-t-[1px] border-font/10'>
      <h2 className='base-section-title'>
        <UserIcon />
        <span>{translation('title')}</span>
      </h2>
      <section className='experiences font-sans'>
        <div className='header-container'>
          <div>
            <h3>Kain Nhantumbo</h3>
            <p className='op'>{translation('subtitle')}</p>
          </div>
          <motion.div whileInView={{ rotate: [0, 360] }}>
            <Image
              width={100}
              height={100}
              priority
              src={AUTHOR.picture}
              alt='author image'
              className='border-primary border-[2px] rounded-full border-dashed'
            />
          </motion.div>
        </div>

        <motion.p
          className='mb-2'
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
          className='card base-border font-sans'
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0.4, rotate: 360 }}
          whileInView={{ rotate: 0, opacity: 1 }}>
          <Code2Icon className='stroke-primary' />
          <h4>{translation('experience-title')}</h4>
          <span>{translation('experience-content')}</span>
        </motion.div>

        <motion.div
          className='card font-sans base-border'
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0.4, rotate: 360 }}
          whileInView={{ rotate: 0, opacity: 1 }}>
          <SquareStackIcon className='stroke-primary' />
          <h4>{translation('projects-title')}</h4>
          <span>{translation('projects-content')}</span>
        </motion.div>
      </section>
    </Container>
  );
}
