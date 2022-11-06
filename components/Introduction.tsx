import Image from 'next/image';
import intro_background from '../assets/intro-background.jpg';
import { motion } from 'framer-motion';
import { HiSparkles } from 'react-icons/hi';
import { TypeAnimation } from 'react-type-animation';
import { BiRightArrowCircle } from 'react-icons/bi';
import { IntroductionContainer as Container } from '../styles/components/introduction';

const Introduction = (): JSX.Element => (
  <Container id='home'>
    <div className='intro-background'>
      <Image
        src={intro_background}
        style={{ borderRadius: 20 }}
        height={600}
        layout={'fixed'}
        objectFit={'cover'}
        placeholder={'blur'}
        alt={'Intro wallpaper'}
      />
    </div>
    <div className='intro'>
      <motion.h3
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5 }}
        className='placeholder'>
        <HiSparkles />
        <span>Welcome to my portifolio :)</span>
      </motion.h3>
      <TypeAnimation
        speed={50}
        sequence={['Hello, I am Kain Nhantumbo!']}
        wrapper={'h1'}
      />
      <p>
        A enthusiastic software developer who loves building full-stack
        applications and learning something new everyday. <br />
        To build my projects, I use Typescript and Javascript as main
        programming technologies.
      </p>
      <motion.button
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.05 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.6 }}
        onClick={() => {
          window.scroll({
            top: 620,
            left: 0,
            behavior: 'smooth',
          });
        }}>
        <BiRightArrowCircle />
        <span>Explore more</span>
      </motion.button>
    </div>
  </Container>
);

export default Introduction;
