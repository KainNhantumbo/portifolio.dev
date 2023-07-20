import { useState } from 'react';
import type { NextPage } from 'next';
import { useTranslation } from 'react-i18next';
import About from '../components/About';
import Layout from '../components/Layout';
import Contact from '../components/Contact';
import Projects from '../components/Projects';
import ConfirmModal from '../components/modals/ConfirmModal';
import Abilities from '../components/Abilities';
import Introduction from '../components/Introduction';
import { HomeContainer as Container } from '../styles/home';
import LanguageSwitcher from '../components/modals/LanguageSwitcher';

const Home: NextPage = (): JSX.Element => {
  const { t: translation } = useTranslation();
  const [isModalActive, setIsModalActive] = useState<boolean>(false);
  const [isLanguageSwitcher, setIsLanguageSwitcher] = useState<boolean>(false);

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
        <LanguageSwitcher active={isLanguageSwitcher} closeModal={setIsLanguageSwitcher}/>
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
