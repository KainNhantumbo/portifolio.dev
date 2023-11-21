import { FaRss } from 'react-icons/fa';
import { useRouter } from 'next/router';
import Package from '../../package.json';
import { m as motion } from 'framer-motion';
import type { IconType } from 'react-icons';
import { GiCoffeeMug } from 'react-icons/gi';
import { RiTwitterXLine } from 'react-icons/ri';
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { ImBlog, ImLinkedin2, ImGithub } from 'react-icons/im';
import { _footer as Container } from '../styles/modules/_footer';

type Anchors = { name: string; icon: IconType; link: string };

export default function Footer() {
  const { t: translation } = useTranslation();
  const isPortfolio = useRouter().asPath.includes('blog') ? false : true;

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
        <LazyLoadImage
          src={'/assets/donuts.png'}
          placeholderSrc={'/assets/donuts-placeholder.png'}
          effect='blur'
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
