import { FooterContainer as Container } from '../styles/components/footer';
import { FC } from 'react';
import { RiHeart3Fill } from 'react-icons/ri';
import { motion } from 'framer-motion';
import { linksData } from '../data/app-data';

const Footer: FC = (): JSX.Element => (
  <Container>
    <h3>
      <strong>Find me on the web by:</strong>
    </h3>
    <ul>
      {linksData.map((link, index) => {
        return (
          <motion.li key={index} whileHover={{ scale: 1.2 }} title={link.name}>
            <a href={link.link} target={'_blank'} rel={'noreferrer noopener'}>
              <link.icon />
            </a>
          </motion.li>
        );
      })}
    </ul>
    <div>
      <span>Copyright &copy; 2022 Kain Nhantumbo. All Rights Reserved. </span>
      <p>
        <span>Made with</span>
        <RiHeart3Fill />
        <span>using Next.js and Typescript. </span>
      </p>
    </div>
  </Container>
);

export default Footer;
