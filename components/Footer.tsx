import { FC } from 'react';
import Package from '../package.json';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { social_media } from '../data/app-data';
import { FooterContainer as Container } from '../styles/components/footer';

const Footer: FC = (): JSX.Element => {
  const { t: translation } = useTranslation();
  return (
    <Container>
      <h3>
        <strong>{translation('footer.title')}</strong>
      </h3>
      <ul>
        {social_media.map((item, index) => (
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
