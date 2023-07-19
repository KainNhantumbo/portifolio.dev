import { FC } from 'react';
import { motion } from 'framer-motion';
import { RiHeart3Fill } from 'react-icons/ri';
import { social_media } from '../data/app-data';
import { FooterContainer as Container } from '../styles/components/footer';

const Footer: FC = (): JSX.Element => (
  <Container>
    <h3>
      <strong>Find me on the web by:</strong>
    </h3>
    <ul>
      {social_media.map((item, index) => (
        <motion.li
          key={index}
          initial={{ scale: 0 }}
          whileHover={{ scale: 1.2 }}
          transition={{
            delay: index / 4,
          }}
          whileInView={{ scale: 1 }}
          title={item.name}>
          <a href={item.link} target={'_blank'} rel={'noreferrer noopener'}>
            <item.icon />
          </a>
        </motion.li>
      ))}
    </ul>
    <div>
      <span>Copyright &copy; 2023 Kain Nhantumbo. All Rights Reserved. </span>
      <p>
        <span>Made with</span>
        <RiHeart3Fill />
        <span>using Next.js and Typescript.</span>
      </p>
      <p>
        <span>Version 2.0.6 | Comp. 04-2023</span>
      </p>
    </div>
  </Container>
);

export default Footer;
