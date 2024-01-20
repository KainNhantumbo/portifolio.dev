import About from '@/components/About';
import Contact from '@/components/Contact';
import Projects from '@/components/Projects';
import Abilities from '@/components/Abilities';
import Introduction from '@/components/Introduction';
import { _home as Container } from '@/styles/routes/_home';
import LanguageSwitcher from '@/components/modals/LanguageSwitcher';
import { setStaticParamsLocale } from 'next-international/server';

export default function Page({
  params: { locale }
}: {
  params: { locale: string };
}) {
  setStaticParamsLocale(locale);
  
  return (
    <Container>
      <Introduction />
      <LanguageSwitcher />
      <About />
      <Abilities />
      <Projects />
      <Contact />
    </Container>
  );
}
