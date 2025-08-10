import { Abilities } from '@/components/abilities';
import { About } from '@/components/about';
import { Contact } from '@/components/contact';
import { Introduction } from '@/components/introduction';
import { LanguageSwitcher } from '@/components/modals/language-switcher';
import { Projects } from '@/components/projects';
import { Services } from '@/components/services';
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
