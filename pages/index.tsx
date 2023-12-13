import About from '../components/About';
import Layout from '../components/Layout';
import Contact from '../components/Contact';
import Projects from '../components/Projects';
import Abilities from '../components/Abilities';
import Introduction from '../components/Introduction';
import { _home as Container } from '../styles/routes/_home';
import LanguageSwitcher from '../components/modals/LanguageSwitcher';


export default function Home() {
  return (
    <Layout metadata={{ title: 'Codenut.dev - Portfolio' }}>
      <Container>
        <Introduction />
        <LanguageSwitcher />
        <About />
        <Abilities />
        <Projects />
        <Contact />
      </Container>
    </Layout>
  );
}
