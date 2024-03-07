'use client';

import { useScopedI18n } from '@/locales/client';
import { motion } from '@/providers/framer-provider';
import {
  AtomIcon,
  BadgeCheckIcon,
  BookMarkedIcon,
  Code2Icon,
  FolderGit2Icon,
  GithubIcon,
  PenToolIcon
} from 'lucide-react';
import type { Stack } from '../types';

export const Abilities = () => {
  const translation = useScopedI18n('abilities');

  const data: Array<Stack> = [
    {
      title: translation('frontend-title'),
      icon: BadgeCheckIcon,
      data: [
        { tech: 'Typescript', icon: Code2Icon },
        { tech: 'Javascript', icon: Code2Icon },
        { tech: 'React', icon: Code2Icon },
        { tech: 'Next.JS', icon: Code2Icon },
        { tech: 'SASS & CSS', icon: Code2Icon },
        { tech: 'HTML5', icon: Code2Icon }
      ]
    },
    {
      title: translation('backend-title'),
      icon: BadgeCheckIcon,
      data: [
        { tech: 'Typescript', icon: Code2Icon },
        { tech: 'Javascript', icon: Code2Icon },
        { tech: 'Node.JS', icon: Code2Icon },
        { tech: 'Express.JS', icon: Code2Icon },
        { tech: 'Mongo DB', icon: Code2Icon },
        { tech: 'PostgreSQL', icon: Code2Icon }
      ]
    },
    {
      title: translation('tools-title'),
      icon: BadgeCheckIcon,
      data: [
        { tech: 'Git', icon: FolderGit2Icon },
        { tech: 'Electron.JS', icon: AtomIcon },
        { tech: 'Markdown', icon: BookMarkedIcon },
        { tech: 'Github', icon: GithubIcon }
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
          <section className='grid grid-cols-4 items-center gap-2 max-[650px]:grid-cols-3 max-[495px]:grid-cols-2 max-[330px]:grid-cols-1'>
            {group.data.map((item, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                whileInView={{
                  scale: 1,
                  transition: { duration: 0.5, bounce: 1 }
                }}
                whileHover={{
                  rotate: [0, -20, 0, 20, 0],
                  scale: [1.1, 1, 1.18, 1.09, 1]
                }}
                className='relative flex w-[150px] select-none flex-col gap-1 rounded-xl p-4 pr-5'>
                <item.icon className='absolute right-2 top-2 h-5 w-5 stroke-primary' />
                <h3 className='font-medium'>{item.tech}</h3>
              </motion.div>
            ))}
          </section>
        </section>
      ))}
    </section>
  );
};
