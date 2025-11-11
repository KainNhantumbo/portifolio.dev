'use client';

import { AnimateInfiniteCarousel } from '@/components/animations/animate-infinite-carousel';
import { useScopedI18n } from '@/locales/client';
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
  TypescriptOriginal,
  VimOriginal,
  VscodeOriginal
} from 'devicons-react';
import { BadgeCheckIcon, PenToolIcon } from 'lucide-react';

export const Abilities = () => {
  const translation = useScopedI18n('abilities');

  const data: Array<Stack> = [
    {
      title: translation('frontend-title'),
      icon: BadgeCheckIcon,
      data: [
        { tech: 'Typescript', icon: TypescriptOriginal },
        { tech: 'Javascript', icon: JavascriptOriginal },
        { tech: 'React', icon: ReactOriginal },
        { tech: 'Next.JS', icon: NextjsOriginal },
        { tech: 'Tailwind CSS', icon: TailwindcssOriginal },
        { tech: 'SASS & CSS', icon: SassOriginal },
        { tech: 'HTML5', icon: Html5Original }
      ]
    },
    {
      title: translation('backend-title'),
      icon: BadgeCheckIcon,
      data: [
        { tech: 'Typescript', icon: TypescriptOriginal },
        { tech: 'Javascript', icon: JavascriptOriginal },
        { tech: 'Node.JS', icon: NodejsOriginal },
        { tech: 'Express.JS', icon: ExpressOriginal },
        { tech: 'Nest.JS', icon: NestjsOriginal },
        { tech: 'Mongo DB', icon: MongodbOriginal },
        { tech: 'PostgreSQL', icon: PostgresqlOriginal }
      ]
    },
    {
      title: translation('tools-title'),
      icon: BadgeCheckIcon,
      data: [
        { tech: 'Git', icon: GitOriginal },
        { tech: 'Vim', icon: VimOriginal },
        { tech: 'VS Code', icon: VscodeOriginal },
        { tech: 'Electron.JS', icon: ElectronOriginal },
        { tech: 'Markdown', icon: MarkdownOriginal },
        { tech: 'Github', icon: GithubOriginal },
        { tech: 'Bitbucket', icon: BitbucketOriginal },
        { tech: 'Jira', icon: JiraOriginal }
      ]
    }
  ];

  return (
    <section
      id='skills'
      className='mx-auto flex w-full max-w-[780px] flex-col items-center gap-3 border-t-[1px] border-solid border-font/10 pt-5'>
      <h2 className='base-section-title'>
        <PenToolIcon />
        <span>{translation('title')}</span>
      </h2>

      {data.map((group, index) => (
        <section key={index} className='mb-5 p-5 font-sans'>
          <h3 className='relative mb-5 text-primary'>
            <group.icon className='absolute left-0 top-[calc(50%_-_10px)] h-auto w-5 stroke-secondary' />
            <span className='pl-6 text-primary'>{group.title}</span>
          </h3>
          <AnimateInfiniteCarousel className='mx-auto w-full max-w-[780px] rounded-xl max-lg:max-w-[580px] max-sm:max-w-[460px] max-mobile-x:max-w-[400px] max-mobile:max-w-[320px]'>
            <section className='flex items-center gap-2 overflow-hidden'>
              {group.data.map((item, index) => (
                <div
                  key={index}
                  className='flex w-[150px] select-none flex-col items-center gap-2 p-4'>
                  <item.icon className='h-auto w-24' />
                  <h3 className='font-medium'>{item.tech}</h3>
                </div>
              ))}
            </section>
          </AnimateInfiniteCarousel>
        </section>
      ))}
    </section>
  );
};
