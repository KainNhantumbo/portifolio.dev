import { LanguageSwitcher } from '@/components/modals/language-switcher';
import { Abilities } from '@/components/sections/home/abilities';
import { About } from '@/components/sections/home/about';
import { Contact } from '@/components/sections/home/contact';
import { Introduction } from '@/components/sections/home/introduction';
import { Projects } from '@/components/sections/home/projects';
import { Services } from '@/components/sections/home/services';
import type { PageParams } from '@/types';
import { setStaticParamsLocale } from 'next-international/server';

const Page = async (props: PageParams) => {
  const params = await props.params;

  const { locale } = params;

  setStaticParamsLocale(locale);

  return (
    <main className='mb-12 flex w-full flex-col gap-7 px-3 pt-[75px]'>
      <Introduction />
      <LanguageSwitcher />
      <About />
      <Services />
      <Abilities />
      <Projects />
      <Contact />
    </main>
  );
};

export default Page;
