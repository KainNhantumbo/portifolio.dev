import type { FC } from 'react';
import Package from '../package.json';
import { motion } from 'framer-motion';
import type { IconType } from 'react-icons';
import { useTranslation } from 'react-i18next';
import { ImBlog, ImLinkedin2 } from 'react-icons/im';
import { FaGithub, FaWhatsapp } from 'react-icons/fa';
import { _footer as Container } from '../styles/components/footer';

type TSocialMediaAnchors = {
  name: string;
  icon: IconType;
  link: string;
};

const Footer: FC = (): JSX.Element => {
  const { t: translation } = useTranslation();

  const socialMediaAnchors: TSocialMediaAnchors[] = [
    {
      name: translation('footer.anchors.github'),
      icon: FaGithub,
      link: 'https://github.com/KainNhantumbo',
    },
    {
      name: translation('footer.anchors.whatsapp'),
      icon: FaWhatsapp,
      link: 'https://wa.me/258844002535',
    },
    {
      name: translation('footer.anchors.linkedIn'),
      icon: ImLinkedin2,
      link: 'https://www.linkedin.com/in/kain-nhantumbo/?locale=en_US',
    },
    {
      name: translation('footer.anchors.blog'),
      icon: ImBlog,
      link: 'https://publish-it-programming.vercel.app',
    },
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
              transition: { delay: index / 4 },
            }}
            title={item.name}>
            <a href={item.link} target={'_blank'} rel={'noreferrer noopener'}>
              <item.icon />
            </a>
          </motion.li>
        ))}
      </ul>
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
};

export default Footer;
