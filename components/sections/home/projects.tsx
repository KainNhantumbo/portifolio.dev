'use client';

import { BackgroundGradient } from '@/components/animations/animate-background';
import { Works } from '@/components/sections/home/works';
import { useProjects } from '@/hooks/use-projects';
import { useI18n } from '@/locales/client';
import { motion } from '@/providers/framer-provider';
import { EyeIcon, GithubIcon, SquareStackIcon } from 'lucide-react';
import Image from 'next/image';

export const Projects = () => {
  const projects = useProjects();
  const translation = useI18n();

  return (
    <section
      id='projects'
      className='mx-auto flex w-full max-w-[1280px] flex-col items-center gap-3 border-t-[1px] border-solid border-font/10 pt-5'>
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
        <section className='mt-6 grid grid-cols-1 gap-8 min-[900px]:grid-cols-2'>
          {projects.map((project, index) => (
            <BackgroundGradient
              containerClassName={'p-1'}
              className='flex h-full min-h-[320px] w-full select-none flex-row-reverse rounded-xl bg-foreground/60 font-sans'
              key={index}>
              <div className='relative h-full w-full'>
                <Image
                  src={project.image}
                  placeholder={'blur'}
                  width={620}
                  height={620}
                  className='h-full w-full rounded-r-xl object-cover'
                  alt={project.name}
                />
                <div className='absolute inset-0 bg-gradient-to-r from-foreground/20 from-0% to-transparent to-20%'></div>
              </div>

              <div className='flex h-full w-full max-w-[200px] flex-col justify-between p-4'>
                <div>
                  <span className='inline-block w-fit rounded-md bg-background/50 px-3 py-1 text-xs font-medium uppercase tracking-wide'>
                    {project.category}
                  </span>

                  <h3 className='mt-2 text-[.95rem]'>{project.name}</h3>
                </div>
                <div className='flex flex-col gap-2'>
                  {project.live_url.length > 5 ? (
                    <motion.a
                      whileTap={{ scale: 0.9 }}
                      whileHover={{ scale: 1.03 }}
                      href={project.live_url}
                      target={'_blank'}
                      className='flex items-center gap-2 rounded-xl bg-background/50 px-4 py-[5px] font-medium shadow-[0_0_20px_rgba(0,0,0,.06)] transition-colors'
                      rel={'noreferrer noopener'}>
                      <EyeIcon className='h-5 w-auto stroke-primary transition-colors' />
                      <span className='text-[.9rem] capitalize transition-colors'>
                        {translation('projects.live-demo')}
                      </span>
                    </motion.a>
                  ) : null}
                  <motion.a
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.03 }}
                    href={project.code_url}
                    className='flex items-center gap-2 rounded-xl bg-background/50 px-4 py-[5px] font-medium shadow-[0_0_20px_rgba(0,0,0,.06)] transition-colors'
                    target={'_blank'}
                    rel={'noreferrer noopener'}>
                    <GithubIcon className='h-5 w-auto stroke-primary transition-colors' />
                    <span className='text-[.9rem] capitalize transition-colors'>
                      {translation('projects.github')}
                    </span>
                  </motion.a>
                </div>
              </div>
            </BackgroundGradient>
          ))}
        </section>
      </section>
    </section>
  );
};
