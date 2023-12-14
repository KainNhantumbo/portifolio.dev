<<<<<<< HEAD:components/Footer.tsx
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
import { motion } from '@/providers/framer';
import donutsImage from '@/../public/assets/donuts.png';
import { useTranslation } from '@/providers/translation';
=======
import Image from 'next/image';
import { FaRss } from 'react-icons/fa';
import { useRouter } from 'next/router';
import Package from '../../package.json';
import { m as motion } from 'framer-motion';
import type { IconType } from 'react-icons';
import { GiCoffeeMug } from 'react-icons/gi';
import { RiTwitterXLine } from 'react-icons/ri';
import { useTranslation } from 'react-i18next';
import { ImBlog, ImLinkedin2, ImGithub } from 'react-icons/im';
>>>>>>> parent of 06d8e11 (refactor: removed react-icons. Moved source from /src to /(root)):src/components/Footer.tsx
import { _footer as Container } from '../styles/modules/_footer';
import donutsImage from '@/../public/assets/donuts.png';

type Anchors = { name: string; icon: IconType; link: string };

export default function Footer() {
  const { t: translation } = useTranslation();
  const pathname = usePathname();
  const isPortfolio = pathname?.includes('blog') ? false : true;

  const aditionalFooterUrls = isPortfolio
    ? []
    : [
        {
          name: translation('footer.anchors.coffee'),
          icon: GiCoffeeMug,
          link: 'https://www.buymeacoffee.com/nhantumbokU'
        },
        {
          name: 'RSS Feed',
          icon: FaRss,
          link: '/rss/feed.en.xml'
        }
      ];

  const socialMediaAnchors: Anchors[] = [
    {
      name: translation('footer.anchors.github'),
      icon: ImGithub,
      link: 'https://github.com/KainNhantumbo'
    },
    {
      name: translation('footer.anchors.twitter'),
      icon: RiTwitterXLine,
      link: 'https://twitter.com/ubelloch'
    },
    {
      name: translation('footer.anchors.linkedIn'),
      icon: ImLinkedin2,
      link: 'https://www.linkedin.com/in/kain-nhantumbo/?locale=en_US'
    },
    {
      name: translation('footer.anchors.blog'),
      icon: ImBlog,
      link: '/en/blog'
    },
    ...aditionalFooterUrls
  ];

  return (
    <Container>
      <h3>
        <strong>{translation('footer.title')}</strong>
      </h3>
      <ul>
        {socialMediaAnchors.map((item, index) => (
          <motion.li
            key={index}
            initial={{ scale: 0 }}
            whileHover={{ scale: 1.2 }}
            whileInView={{
              scale: 1,
              transition: { delay: index / socialMediaAnchors.length }
            }}
            title={item.name}>
            <a href={item.link} target={'_blank'} rel={'noreferrer noopener'}>
              <item.icon />
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

      <div>
        <span>{translation('footer.copy-phrase')} </span>
        <p>
          <span>{translation('footer.made-phrase')}</span>
        </p>
        <p>
          <span>
            {translation('footer.version-phrase')} {Package.version} | Comp.{' '}
            {Package.latest_compile}
          </span>
        </p>
      </div>
    </Container>
  );
}
