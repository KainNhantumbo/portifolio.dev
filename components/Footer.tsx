'use client';

import {
  BookTextIcon,
  CoffeeIcon,
  GithubIcon,
  LinkedinIcon,
  LucideIcon,
  RssIcon,
  TwitterIcon
} from 'lucide-react';
import Image from 'next/image';
import Package from '@/package.json';
import { usePathname } from 'next/navigation';
import { motion } from '@/providers/framer-provider';
import donutsImage from '@/../public/assets/donuts.png';
import { _footer as Container } from '../styles/modules/_footer';
import { useScopedI18n } from '@/locales/client';

type Anchors = { name: string; icon: LucideIcon; link: string };

export default function Footer() {
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

  const socialMediaAnchors: Anchors[] = [
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
    <Container className='font-sans w-[100vw] h-min relative flex flex-col gap-3 pb-3'>
      <h3>{translation('title')}</h3>
      <ul>
        {socialMediaAnchors.map((item, index) => (
          <motion.li
            className='bg-primary/[.15] backdrop-blur-md  hover:bg-secondary/20 hover:animate-pulse'
            key={index}
            initial={{ scale: 0 }}
            whileInView={{
              scale: 1,
              transition: { delay: index / socialMediaAnchors.length }
            }}
            title={item.name}>
            <a href={item.link} target={'_blank'} rel={'noreferrer noopener'}>
              <item.icon className='stroke-primary' />
            </a>
          </motion.li>
        ))}
      </ul>

      <div className='donuts-image-container'>
        <Image
          width={1702}
          height={149}
          src={donutsImage}
          placeholder='blur'
          alt='Donuts combo decoration image'
        />
      </div>

      <div className='w-full flex flex-col items-center mx-auto gap-3'>
        <p>
          <span>{translation('made-phrase')}</span>
        </p>
        <div className='w-full flex flex-wrap gap-3 mx-auto items-center justify-center'>
          <span>Copyright © 2023 Kain Nhantumbo.</span>
          <span>
            {translation('version-phrase')} {Package.version} | Comp.{' '}
            {Package.latest_compile}
          </span>
        </div>
      </div>
    </Container>
  );
}
