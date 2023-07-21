import type { NextPage } from 'next';
import About from '../components/About';
import Layout from '../components/Layout';
import Contact from '../components/Contact';
import Projects from '../components/Projects';
import Abilities from '../components/Abilities';
import Introduction from '../components/Introduction';
import { HomeContainer as Container } from '../styles/home';

const Home: NextPage = (): JSX.Element => {
  return (
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
};

export default Home;
