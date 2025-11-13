'use client';

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
import { Marquee, MarqueeContent, MarqueeFade, MarqueeItem } from './marquee';

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
    <div className='flex size-full items-center justify-center bg-background'>
      <Marquee>
        <MarqueeFade side='left' />
        <MarqueeFade side='right' />
        <MarqueeContent>
          {content.map((item, index) => (
            <MarqueeItem key={index} className='flex select-none items-center gap-3 px-6'>
              <item.icon className='size-12 h-48 w-48 text-font' size={36} />
              <h3 className='text-lg font-medium'>{item.tech}</h3>
            </MarqueeItem>
          ))}
        </MarqueeContent>
      </Marquee>
    </div>
  );
};
