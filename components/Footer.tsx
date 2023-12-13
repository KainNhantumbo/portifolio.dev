import donutsImage from '@/../public/assets/donuts.png';
import { m as motion } from 'framer-motion';
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
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import Package from '../package.json';
import { _footer as Container } from '../styles/modules/_footer';

type Anchors = { name: string; icon: LucideIcon; link: string };

export default function Footer() {
  const { t: translation } = useTranslation();
  const isPortfolio = useRouter().asPath.includes('blog') ? false : true;

  const aditionalFooterUrls = isPortfolio
    ? []
    : [
        {
          name: translation('footer.anchors.coffee'),
          icon: CoffeeIcon,
          link: 'https://www.buymeacoffee.com/nhantumbokU'
        },
        {
          name: 'RSS Feed',
          icon: RssIcon,
          link: '/rss/feed.en.xml'
        }
      ];

  const socialMediaAnchors: Anchors[] = [
    {
      name: translation('footer.anchors.github'),
      icon: GithubIcon,
      link: 'https://github.com/KainNhantumbo'
    },
    {
      name: translation('footer.anchors.twitter'),
      icon: TwitterIcon,
      link: 'https://twitter.com/ubelloch'
    },
    {
      name: translation('footer.anchors.linkedIn'),
      icon: LinkedinIcon,
      link: 'https://www.linkedin.com/in/kain-nhantumbo/?locale=en_US'
    },
    {
      name: translation('footer.anchors.blog'),
      icon: BookTextIcon,
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
