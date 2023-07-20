import { useState } from 'react';
import type { NextPage } from 'next';
import { useTranslation } from 'react-i18next';
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
  const { t: translation } = useTranslation();

  return (
    <Layout>
      <Container>
        <ConfirmModal
          active={isModalActive}
          prompt_title={translation('modal.title')}
          prompt_message={translation('modal.message')}
          closeModal={setIsModalActive}
          buttonText={translation('modal.button-text')}
        />

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
