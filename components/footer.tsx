'use client';

import donutsImage from '../public/assets/donuts.png';
import { useScopedI18n } from '@/locales/client';
import Package from '@/package.json';
import { motion } from '@/providers/framer-provider';
import { constants } from '@/shared/constants';
import type { FooterAnchors } from '@/types';
import {
  BookTextIcon,
  CoffeeIcon,
  GithubIcon,
  LinkedinIcon,
  RssIcon,
  TwitterIcon
} from 'lucide-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { SparklesCore } from './animations/animate-sparkles';

export const Footer = () => {
  const translation = useScopedI18n('footer');
  const pathname = usePathname();
  const isPortfolio = pathname?.includes('blog') ? false : true;

  const additionalFooterUrls = isPortfolio
    ? [
        {
          name: translation('anchors.coffee'),
          icon: CoffeeIcon,
          link: 'https://www.buymeacoffee.com/nhantumbokU'
        },
        {
          name: 'RSS Feed',
          icon: RssIcon,
          link: '/rss/feed.en.xml'
        }
      ]
    : [];

  const socialMediaAnchors: FooterAnchors[] = [
    {
      name: translation('anchors.github'),
      icon: GithubIcon,
      link: 'https://github.com/KainNhantumbo'
    },
    {
      name: translation('anchors.twitter'),
      icon: TwitterIcon,
      link: 'https://twitter.com/ubelloch'
    },
    {
      name: translation('anchors.linkedIn'),
      icon: LinkedinIcon,
      link: 'https://www.linkedin.com/in/kain-nhantumbo/?locale=en_US'
    },
    {
      name: translation('anchors.blog'),
      icon: BookTextIcon,
      link: '/en/blog'
    },
    ...additionalFooterUrls
  ];

  return (
    <footer className='mx-auto w-full max-w-4xl px-2 sm:px-0'>
      <div className='relative my-3 flex h-min w-full flex-col gap-3 overflow-hidden rounded-3xl border-[1px] border-solid border-font/10 py-5 font-sans font-semibold'>
        <div className='absolute left-0 top-0 h-full w-full'>
          <SparklesCore
            id={crypto.randomUUID()}
            background='transparent'
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className='h-full w-full'
            particleColor='#E4703180'
          />
        </div>
        <h3 className='mx-auto my-2 w-fit rounded-full border-[1px] border-solid border-font/10 px-3 text-center text-xl font-bold'>
          {translation('title')}
        </h3>
        <ul className='flex flex-row items-center justify-center gap-4'>
          {socialMediaAnchors.map((item, index) => (
            <motion.li
              className='grid h-10  w-10 cursor-pointer place-content-center place-items-center rounded-full bg-primary/[.15] p-3 backdrop-blur-md hover:animate-pulse hover:bg-secondary/20'
              key={index}
              initial={{ scale: 0 }}
              title={item.name}
              whileInView={{
                scale: 1,
                transition: { delay: index / socialMediaAnchors.length }
              }}>
              <a href={item.link} target={'_blank'} rel={'noreferrer noopener'}>
                <item.icon className='h-auto w-5 stroke-primary' />
              </a>
            </motion.li>
          ))}
        </ul>

        <div className='mx-auto h-auto w-full max-w-[600px] p-5 pb-3 '>
          <Image
            width={1702}
            height={149}
            src={donutsImage}
            placeholder='blur'
            className='h-fit w-full'
            alt='Donuts combo decoration image'
          />
        </div>

        <div className='mx-auto flex w-full flex-col items-center gap-3'>
          <p className='text-center'>{translation('made-phrase')}</p>
          <div className='mx-auto flex w-full flex-col items-center justify-center gap-1'>
            <span>{constants.copyright}</span>
            <span>
              {translation('version-phrase')} {Package.version}-{Package.latest_compile}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
