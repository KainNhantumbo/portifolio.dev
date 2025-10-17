import { LanguageSwitcher } from '@/components/modals/language-switcher';
import { Abilities } from '@/components/sections/home/abilities';
import { About } from '@/components/sections/home/about';
import { Contact } from '@/components/sections/home/contact';
import { Introduction } from '@/components/sections/home/introduction';
import { Projects } from '@/components/sections/home/projects';
import { Services } from '@/components/sections/home/services';
import { Works } from '@/components/sections/home/works';
import type { PageParams } from '@/types';
import { setStaticParamsLocale } from 'next-international/server';

const Page = async (props: PageParams) => {
  const { locale } = await props.params;
  setStaticParamsLocale(locale);

  return (
    <main className='flex w-full flex-col gap-7'>
      <Introduction />
      <LanguageSwitcher />
      <About />
      <Services />
      <Abilities />
      <Works />
      <Projects />
      <Contact />
    </main>
  );
};

export default Page;
