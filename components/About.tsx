import { FC } from 'react';
import { motion } from 'framer-motion';
import { SiAboutdotme } from 'react-icons/si';
import { HiCode, HiViewGrid } from 'react-icons/hi';
import { AboutContainer as Container } from '../styles/components/about';

const About: FC = (): JSX.Element => (
  <Container id='about'>
    <h2>
      <SiAboutdotme />
      <span>About me</span>
    </h2>
    <section className='experiences'>
      <p className='op'>Web Developer & Content Creator</p>
      <motion.p
        initial={{ opacity: 0, y: 200 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        whileInView={{ opacity: 1, y: 0 }}>
        I am a person with a desire to grow by learning new things every day.
        Driven by curiosity, I fell in love with web development and design.
        <br /> I am very interested in opportunities to work with the latest
        technologies on challenging projects that would push my skills to the
        end. I like programming and I am specially ambitious on the kind of
        projects that solves daily problems.
      </motion.p>
    </section>

    <section className='cards-container'>
      <motion.div
        className='card'
        whileHover={{ scale: 1.1 }}
        initial={{ opacity: 0.4, rotate: 360, x: -500 }}
        whileInView={{ rotate: 0, opacity: 1, x: 0 }}>
        <HiCode />
        <h4>Experience</h4>
        <span>2+ years of programming</span>
      </motion.div>

      <motion.div
        className='card'
        whileHover={{ scale: 1.1 }}
        initial={{ opacity: 0.4, rotate: 360, x: 500 }}
        whileInView={{ rotate: 0, opacity: 1, x: 0 }}>
        <HiViewGrid />
        <h4>Projects</h4>
        <span>20+ Github Projects</span>
      </motion.div>
    </section>
  </Container>
);

export default About;
