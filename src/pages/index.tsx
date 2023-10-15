import dynamic from 'next/dynamic';
import About from '../components/About';
import Layout from '../components/Layout';
import Abilities from '../components/Abilities';
import { _home as Container } from '../styles/home';
import Introduction from '../components/Introduction';
import { MotionConfig, LazyMotion, domAnimation } from 'framer-motion';

// code spliting
const Contact = dynamic(import('../components/Contact'), {
  ssr: true
});

const Projects = dynamic(import('../components/Projects'), {
  ssr: true
});

export default function Home() {
  return (
    <MotionConfig reducedMotion='user'>
      <LazyMotion strict={true} features={domAnimation}>
        <Layout>
          <Container>
            <Introduction />
            <About />
            <Abilities />
            <Projects />
            <Contact />
          </Container>
        </Layout>
      </LazyMotion>
    </MotionConfig>
  );
}
