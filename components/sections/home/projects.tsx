'use client';

import { Works } from '@/components/sections/home/works';
import { useI18n } from '@/locales/client';
import { motion } from '@/providers/framer-provider';
import { ExternalLinkIcon, GithubIcon, SquareStackIcon } from 'lucide-react';
import Image from 'next/image';
import { useProjects } from '../../../hooks/use-projects';

export const Projects = () => {
  const projects = useProjects();
  const translation = useI18n();

  return (
    <section
      id='projects'
      className='mx-auto flex w-full max-w-[980px] flex-col items-center gap-3 border-t-[1px] border-solid border-font/10 pt-5'>
      <h2 className='base-section-title'>
        <SquareStackIcon />
        <span>{translation('projects.title')}</span>
      </h2>
      <p className='font-sm max-w-lg text-center font-sans font-semibold'>
        {translation('projects.intro-part-1')}{' '}
        <a
          href='https://github.com/KainNhantumbo'
          target={'_blank'}
          rel={'noreferrer noopener'}
          className='text-primary'>
          {' '}
          {translation('projects.intro-part-2')}
        </a>
        .
      </p>

      <h3 className='my-3 rounded-lg border-2 border-dashed border-primary-variant p-3 font-sans text-2xl font-semibold uppercase text-primary underline-offset-4'>
        {translation('works.section_name')}
      </h3>

      <Works />

      <h3 className='my-3 rounded-lg border-2 border-dashed border-primary-variant p-3 font-sans text-2xl font-semibold uppercase text-primary underline-offset-4'>
        {translation('projects.section_name')}
      </h3>

      <section className='cards-container'>
        <section className='mt-5 grid grid-cols-3 gap-5 max-[910px]:grid-cols-2 max-[605px]:grid-cols-1'>
          {projects.map((project, index) => (
            <motion.section
              className='base-border flex h-[380px] w-[280px] select-none flex-col rounded-xl bg-foreground p-2 font-sans shadow-[0_0_25px_#00000015]'
              key={index}
              whileHover={{ y: -7 }}>
              <div className='relative h-[210px] w-full'>
                <Image
                  src={project.image}
                  placeholder={'blur'}
                  width={280}
                  height={200}
                  className='base-border h-full max-h-[180px] w-full'
                  style={{ borderRadius: 10 }}
                  alt={project.name}
                />
                <h4 className='absolute bottom-2 left-2 w-fit rounded-lg bg-orange-400/50 px-2 text-sm font-medium text-white backdrop-blur-md'>
                  {project.category}
                </h4>
              </div>
              <div className='flex h-full flex-col justify-between'>
                <div>
                  <h3 className='mt-2 text-[.95rem]'>{project.name}</h3>
                </div>
                <div className='flex flex-col gap-2'>
                  {project.live_url.length > 5 ? (
                    <motion.a
                      whileTap={{ scale: 0.9 }}
                      whileHover={{ scale: 1.03 }}
                      href={project.live_url}
                      target={'_blank'}
                      className='base-border group flex items-center gap-2 rounded-xl bg-background px-4 py-[5px] font-medium shadow-[0_0_20px_rgba(0,0,0,.06)] transition-colors'
                      rel={'noreferrer noopener'}>
                      <ExternalLinkIcon className='h-5 w-auto stroke-primary transition-colors' />
                      <span className='text-[.9rem] capitalize transition-colors group-hover:text-primary'>
                        {translation('projects.live-demo')}
                      </span>
                    </motion.a>
                  ) : null}
                  <motion.a
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.03 }}
                    href={project.code_url}
                    className='base-border group flex items-center gap-2 rounded-xl bg-background px-4 py-[5px] font-medium shadow-[0_0_20px_rgba(0,0,0,.06)] transition-colors'
                    target={'_blank'}
                    rel={'noreferrer noopener'}>
                    <GithubIcon className='h-5 w-auto stroke-primary transition-colors' />
                    <span className='text-[.9rem] capitalize transition-colors group-hover:text-primary'>
                      {translation('projects.github')}
                    </span>
                  </motion.a>
                </div>
              </div>
            </motion.section>
          ))}
        </section>
      </section>
    </section>
  );
};
