import dynamic from 'next/dynamic';
import type { NextPage } from 'next';
import About from '../components/About';
import Layout from '../components/Layout';
import Abilities from '../components/Abilities';
import Introduction from '../components/Introduction';
import { _home as Container } from '../styles/home';

// code spliting
const Contact = dynamic(import('../components/Contact'), {
  ssr: true,
});

const Projects = dynamic(import('../components/Projects'), {
  ssr: true,
});

const Home: NextPage = (): JSX.Element => (
  <Layout>
    <Container>
      <Introduction />
      <About />
      <Abilities />
      <Projects />
      <Contact />
    </Container>
  </Layout>
);

export default Home;
