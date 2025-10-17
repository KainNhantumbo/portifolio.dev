'use client';

import { useScopedI18n } from '@/locales/client';
import { motion } from '@/providers/framer-provider';
import type { FooterAnchors } from '@/types';
import {
  BookTextIcon,
  CoffeeIcon,
  GithubIcon,
  TwitterIcon,
  LinkedinIcon,
  RssIcon
} from 'lucide-react';
import { usePathname } from 'next/navigation';

export function SocialIcons() {
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
    <ul className='flex flex-row items-center justify-center gap-4'>
      {socialMediaAnchors.map((item, index) => (
        <motion.li
          className='grid h-12 w-12 cursor-pointer place-content-center place-items-center rounded-full bg-font/[.15] p-3 backdrop-blur-md hover:animate-pulse hover:bg-secondary/20'
          key={index}
          initial={{ scale: 0 }}
          title={item.name}
          whileInView={{
            scale: 1,
            transition: { delay: index / socialMediaAnchors.length }
          }}>
          <a href={item.link} target={'_blank'} rel={'noreferrer noopener'}>
            <item.icon className='h-auto w-6 stroke-font' />
          </a>
        </motion.li>
      ))}
    </ul>
  );
}
