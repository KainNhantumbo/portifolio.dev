'use client';

import { motion } from '@/providers/framer-provider';
import { _introduction as Container } from '../styles/modules/_introduction';
import { GithubIcon, LinkedinIcon } from 'lucide-react';
import { useI18n } from '@/locales/client';

export default function Introduction() {
  const translation = useI18n();

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
    <Container
      id='home'
      className='w-full max-w-[780px] flex flex-col gap-3 mx-auto mt-10 py-5 px-2 z-50 font-sans relative backdrop-blur-sm bg-background/50 after:absolute after:w-[1px] after:h-[1px] after:right-[50%] after:top-0 after:rounded-full after:-z-50 after:bg-[#FAC684cc] after:shadow-[0_0_180px_140px_#FDC886cc] dark:after:bg-[#E8884Fcc] dark:after:shadow-[0_0_180px_140px_#E8884Fcc] '>
      <div className='w-fit flex flex-col relative'>
        <h3 className='text-sm p-0 font-semibold'>
          {translation('intro.presentation')}
        </h3>
        <div className='w-full flex gap-3'>
          <h1 className='w-full font-bold text-4xl mobile-x:text-6xl font-sans leading-10 my-4 mobile-x:my-0 mobile-x:py-8 text-transparent bg-clip-text bg-gradient-to-r from-primary-variant to-primary'>
            {translation('intro.title')}
          </h1>
        </div>
      </div>

      <div className='flex gap-3 items-center'>
        <motion.h3
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5 }}
          className='uppercase rounded-2xl relative flex whitespace-nowrap w-full bg-gradient-to-r from-primary to-error p-[6px]'>
          <span className='px-1 text-white text-xs font-semibold'>
            {translation('intro.welcome-message')}
          </span>
        </motion.h3>

        <div className='w-full flex gap-3'>
          {socialAnchors.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target={'_blank'}
              rel={'noreferrer noopener'}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              title={item.name}
              className='group grid w-7 h-7 place-content-center p-1 border-primary border-[1px] rounded-full border-dashed'>
              <item.icon className='w-[18px] h-auto stroke-primary group-hover:stroke-primary dark:group-hover:stroke-secondary' />
            </motion.a>
          ))}
        </div>
      </div>

      <motion.p
        className='text-[1rem]'
        initial={{ scale: 0, y: -120, opacity: 0 }}
        whileInView={{ scale: 1, y: 0, opacity: 1 }}>
        <motion.i>{translation('intro.message-part-1')}</motion.i>
        <br />
        {translation('intro.message-part-2')}
      </motion.p>
    </Container>
  );
}
