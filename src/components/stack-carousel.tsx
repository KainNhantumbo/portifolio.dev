'use client';

import { AnimateInfiniteCarousel } from '@/components/animations/animate-infinite-carousel';
import type { Stack } from '@/types';
import {
  BitbucketOriginal,
  ElectronOriginal,
  ExpressOriginal,
  GitOriginal,
  GithubOriginal,
  Html5Original,
  JavascriptOriginal,
  JiraOriginal,
  MarkdownOriginal,
  MongodbOriginal,
  NestjsOriginal,
  NextjsOriginal,
  NodejsOriginal,
  PostgresqlOriginal,
  ReactOriginal,
  SassOriginal,
  TailwindcssOriginal,
  TypescriptOriginal
} from 'devicons-react';

export const StackCarousel = () => {
  const content: Stack[] = [
    { tech: 'Typescript', icon: TypescriptOriginal },
    { tech: 'Javascript', icon: JavascriptOriginal },
    { tech: 'React', icon: ReactOriginal },
    { tech: 'Next.JS', icon: NextjsOriginal },
    { tech: 'Tailwind CSS', icon: TailwindcssOriginal },
    { tech: 'SASS & CSS', icon: SassOriginal },
    { tech: 'Typescript', icon: TypescriptOriginal },
    { tech: 'Javascript', icon: JavascriptOriginal },
    { tech: 'Node.JS', icon: NodejsOriginal },
    { tech: 'Express.JS', icon: ExpressOriginal },
    { tech: 'Nest.JS', icon: NestjsOriginal },
    { tech: 'Mongo DB', icon: MongodbOriginal },
    { tech: 'Git', icon: GitOriginal },
    { tech: 'Electron.JS', icon: ElectronOriginal },
    { tech: 'Markdown', icon: MarkdownOriginal },
    { tech: 'Github', icon: GithubOriginal },
    { tech: 'Bitbucket', icon: BitbucketOriginal },
    { tech: 'Jira', icon: JiraOriginal },
    { tech: 'PostgreSQL', icon: PostgresqlOriginal },
    { tech: 'HTML5', icon: Html5Original }
  ];

  return (
    <AnimateInfiniteCarousel className='mx-auto w-full max-w-[780px] rounded-xl max-lg:max-w-[580px] max-sm:max-w-[460px] max-mobile-x:max-w-[400px] max-mobile:max-w-[320px]'>
      <section className='flex items-center gap-2 overflow-hidden'>
        {content.map((item, index) => (
          <div
            key={index}
            className='flex w-[150px] select-none flex-col items-center gap-2 p-4'>
            <item.icon className='h-auto w-24' />
            <h3 className='font-medium'>{item.tech}</h3>
          </div>
        ))}
      </section>
    </AnimateInfiniteCarousel>
  );
};
