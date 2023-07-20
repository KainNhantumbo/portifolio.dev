import { useState } from 'react';
import type { NextPage } from 'next';
import About from '../components/About';
import Layout from '../components/Layout';
import Contact from '../components/Contact';
import Projects from '../components/Projects';
import ConfirmModal from '../components/Modal';
import Abilities from '../components/Abilities';
import Introduction from '../components/Introduction';
import { HomeContainer as Container } from '../styles/home';

const Home: NextPage = (): JSX.Element => {
  const [isModalActive, setIsModalActive] = useState<boolean>(false);

  return (
    <Layout>
      <Container>
        <ConfirmModal
          prompt_title='Message Sent'
          prompt_message="I just can't  wait to we start working together, thank you!"
          closeModal={setIsModalActive}
          active={isModalActive}
        />

        <Introduction />
        <About />
        <Abilities/>
        <Projects />
        <Contact />
      </Container>
    </Layout>
  );
};

export default Home;
