import type { PageParams } from '@/types';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Projects from '@/components/Projects';
import Abilities from '@/components/Abilities';
import Introduction from '@/components/Introduction';
import { setStaticParamsLocale } from 'next-international/server';
import LanguageSwitcher from '@/components/modals/LanguageSwitcher';

const Page = ({ params: { locale } }: PageParams) => {
  setStaticParamsLocale(locale);

  return (
    <main className='w-full px-3 pt-[75px] flex flex-col gap-7 mb-12'>
      <Introduction />
      <LanguageSwitcher />
      <About />
      <Abilities />
      <Projects />
      <Contact />
    </main>
  );
};

export default Page;
