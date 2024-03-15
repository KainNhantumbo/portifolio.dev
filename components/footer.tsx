'use client';

import donutsImage from '@/../public/assets/donuts.png';
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
    <section className='relative flex h-min w-[100vw] flex-col gap-3 pb-3 font-sans'>
      <h3 className='text-center font-medium'>{translation('title')}</h3>
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
        <div className='mx-auto flex w-full flex-wrap items-center justify-center gap-3'>
          <span>{constants.copyright}</span>
          <span>
            {translation('version-phrase')} {Package.version} | Comp.{' '}
            {Package.latest_compile}
          </span>
        </div>
      </div>
    </section>
  );
};
