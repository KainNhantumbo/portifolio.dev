import type { PageParams } from '@/types';
import { setStaticParamsLocale } from 'next-international/server';
import { Abilities } from './_components/abilities';
import { About } from './_components/about';
import { Contact } from './_components/contact';
import { Introduction } from './_components/introduction';
import { Projects } from './_components/projects';
import { Services } from './_components/services';
import { Works } from './_components/works';

const Page = async (props: PageParams) => {
  const { locale } = await props.params;
  setStaticParamsLocale(locale);

  return (
    <main className='flex w-full flex-col gap-7'>
      <Introduction />
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
