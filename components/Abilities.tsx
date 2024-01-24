'use client';

import {
  AtomIcon,
  BadgeCheckIcon,
  BookMarkedIcon,
  Code2Icon,
  FolderGit2Icon,
  GithubIcon,
  PenToolIcon
} from 'lucide-react';
import { Stack } from '../types';
import { motion } from '@/providers/framer-provider';
import { _abilities as Container } from '../styles/modules/_abilities';
import { useScopedI18n } from '@/locales/client';

export default function Abilities() {
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
    <Container
      id='skills'
      className='w-full max-w-[700px] flex flex-col items-center gap-3 pt-5 mx-auto border-solid border-t-[1px] border-font/10'>
      <h2 className='rounded-md after:absolute after:top-[calc(50%_-_30px)] after:left-[calc(50%_-_10px)] after:w-[40px] after:h-[7px] after:rounded-md after:bg-primary font-sans font-semibold'>
        <PenToolIcon className='stroke-primary' />
        <span>{translation('title')}</span>
      </h2>

      {data.map((group, index) => (
        <section key={index} className='stack-container base-border font-sans'>
          <h3 className='sub-title'>
            <group.icon className='stroke-secondary' />
            <span className='text-primary'>{group.title}</span>
          </h3>
          <section className='list-items'>
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
                className='item'>
                <item.icon className='stroke-primary' />
                <h3>{item.tech}</h3>
              </motion.div>
            ))}
          </section>
        </section>
      ))}
    </Container>
  );
}
