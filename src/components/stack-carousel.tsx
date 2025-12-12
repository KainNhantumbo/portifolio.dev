'use client';

import { useScopedI18n } from '@/locales/client';
import type { Stack } from '@/types';
import {
  AstroOriginal,
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

const content: Stack[] = [
  { tech: 'Typescript', icon: TypescriptOriginal },
  { tech: 'Javascript', icon: JavascriptOriginal },
  { tech: 'React', icon: ReactOriginal },
  { tech: 'Next.js', icon: NextjsOriginal },
  { tech: 'Tailwind CSS', icon: TailwindcssOriginal },
  { tech: 'SASS & CSS', icon: SassOriginal },
  { tech: 'Typescript', icon: TypescriptOriginal },
  { tech: 'Javascript', icon: JavascriptOriginal },
  { tech: 'Node.js', icon: NodejsOriginal },
  { tech: 'Express.js', icon: ExpressOriginal },
  { tech: 'Astro.js', icon: AstroOriginal },
  { tech: 'Nest.js', icon: NestjsOriginal },
  { tech: 'Mongo DB', icon: MongodbOriginal },
  { tech: 'Git', icon: GitOriginal },
  { tech: 'Electron.js', icon: ElectronOriginal },
  { tech: 'Markdown', icon: MarkdownOriginal },
  { tech: 'Github', icon: GithubOriginal },
  { tech: 'Bitbucket', icon: BitbucketOriginal },
  { tech: 'Jira', icon: JiraOriginal },
  { tech: 'PostgreSQL', icon: PostgresqlOriginal },
  { tech: 'HTML5', icon: Html5Original }
];

export const StackCarousel = () => {
  const t = useScopedI18n('about.carousel');

  return (
    <div className='flex size-full items-center justify-center bg-background'>
      <div className='group relative m-auto max-w-7xl px-6'>
        <div className='flex flex-col items-center md:flex-row'>
          <div className='border-font/15 md:max-w-44 md:border-r md:pr-6'>
            <p className='text-end text-sm'>{t('label')}</p>
          </div>
        </div>
      </div>

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
