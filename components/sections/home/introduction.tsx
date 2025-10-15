'use client';

import { BubbleBackground } from '@/components/animations/animate-bubbles';
import { useI18n } from '@/locales/client';
import { motion } from '@/providers/framer-provider';
import { GithubIcon, LinkedinIcon } from 'lucide-react';
import { AnimateText } from '../../animations/animate-text';

export const Introduction = () => {
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
    <BubbleBackground
      interactive={true}
      className='grid h-screen w-full grid-cols-1 place-content-center place-items-center'>
      <section
        id='home'
        className='z-50 flex w-full max-w-[1280px] flex-col gap-3 px-2 py-5 font-sans'>
        <div className='relative flex w-fit flex-col'>
          <h3 className='p-0 text-sm font-semibold'>
            <AnimateText words={translation('intro.presentation')} />
          </h3>
          <div className='flex w-full gap-3'>
            <h1 className='my-4 w-full bg-clip-text font-sans text-4xl font-bold leading-10 text-transparent mobile-x:my-0 mobile-x:py-8 mobile-x:text-6xl'>
              <span>{translation('intro.title')}</span>
            </h1>
          </div>
        </div>

        <div className='flex items-center gap-3'>
          <motion.h3
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 }}
            className='relative flex w-full whitespace-nowrap rounded-2xl bg-gradient-to-r from-primary to-error p-[6px] uppercase'>
            <span className='px-1 text-xs font-semibold text-white'>
              {translation('intro.welcome-message')}
            </span>
          </motion.h3>

          <div className='flex w-full gap-3'>
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
                className='group grid h-7 w-7 place-content-center rounded-full border-[1px] border-dashed border-primary p-1'>
                <item.icon className='h-auto w-[18px] stroke-primary group-hover:stroke-primary dark:group-hover:stroke-secondary' />
              </motion.a>
            ))}
          </div>
        </div>

        <motion.div
          className='flex flex-col gap-2'
          initial={{ scale: 0, y: -120, opacity: 0 }}
          whileInView={{ scale: 1, y: 0, opacity: 1 }}>
          <AnimateText words={translation('intro.message-part-1')} duration={0.1} />
          <AnimateText words={translation('intro.message-part-2')} duration={0.1} />
        </motion.div>
      </section>
    </BubbleBackground>
  );
};
