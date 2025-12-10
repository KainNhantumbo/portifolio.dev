import type { PageParams } from '@/types';
import { setStaticParamsLocale } from 'next-international/server';
import About from './_components/about';
import { Contact } from './_components/contact';
import Hero from './_components/hero';
import { Projects } from './_components/projects';
import Services from './_components/services';
import Works from './_components/works';

const Page = async (props: PageParams) => {
  const { locale } = await props.params;
  setStaticParamsLocale(locale);

  return (
    <main className='flex w-full flex-col gap-24'>
      <Hero />
      <About />
      <Services />
      <Works />
      <Projects />
      <Contact />
    </main>
  );
};

export default Page;
