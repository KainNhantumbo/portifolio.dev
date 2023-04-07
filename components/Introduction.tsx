import Image from 'next/image';
import intro_background from '../assets/intro-background.jpg';
import intro_background2 from '../assets/intro-background2.jpg';
import { motion } from 'framer-motion';
import { HiSparkles } from 'react-icons/hi';
import { IntroductionContainer as Container } from '../styles/components/introduction';
import { useAppContext } from '../context/AppContext';
import { useTheme } from 'styled-components';

export default function Introduction(): JSX.Element {
  const { darkmode } = useAppContext();
  const theme = useTheme();

  return (
    <Container id='home'>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1, transition: { delay: 0.2 } }}
        className='intro-background'>
        <Image
          src={darkmode ? intro_background : intro_background2}
          style={{ borderRadius: 20 }}
          height={600}
          layout={'fixed'}
          objectFit={'cover'}
          placeholder={'blur'}
          alt={'Intro wallpaper'}
        />
      </motion.div>
      <div className='intro-details'>
        <motion.h3
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5 }}
          className='placeholder'>
          <HiSparkles />
          <span>Welcome to my portfolio :)</span>
        </motion.h3>

        <h1>Hello, I am Kain Nhantumbo!</h1>
        <p
          style={{
            color: darkmode ? theme.text : theme.font,
            textShadow: !darkmode ? `1px 1px 3px rgb(${theme.font})` : 'none',
          }}>
          A enthusiastic software developer who loves building full-stack
          applications and learning something new everyday. <br />
          To build my projects, I use Typescript and Javascript as main
          programming technologies.
        </p>
      </div>
    </Container>
  );
}
