'use client';

import { useScopedI18n } from '@/locales/client';
import type { FooterAnchors } from '@/types';
import {
  BookTextIcon,
  CoffeeIcon,
  GithubIcon,
  LinkedinIcon,
  RssIcon,
  TwitterIcon
} from 'lucide-react';
import { usePathname } from 'next/navigation';
import Button from './ui/button';

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
    <ul className='flex w-full flex-row flex-wrap items-center justify-center gap-4'>
      {socialMediaAnchors.map((item, index) => (
        <Button
          icon={<item.icon className='h-auto w-8' />}
          as='a'
          href={item.link}
          target={'_blank'}
          rel={'noreferrer noopener'}
          variant='neon'
          key={index}
          title={item.name}
          size='sm'
          className='aspect-square rounded-full'>
          <span className='sr-only'>{item.name}</span>
        </Button>
      ))}
    </ul>
  );
}
