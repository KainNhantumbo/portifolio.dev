'use client';

import { useI18n } from '@/locales/client';
import { motion } from '@/providers/framer-provider';
import { ExternalLinkIcon, GithubIcon, SquareStackIcon } from 'lucide-react';
import Image from 'next/image';
import { useProjects } from '../hooks/use-projects';
import { Works } from '@/components/works';

export const Projects = () => {
  const projects = useProjects();
  const translation = useI18n();

  return (
    <section
      id='projects'
      className='w-full max-w-[980px] flex flex-col items-center gap-3 pt-5 mx-auto border-solid border-t-[1px] border-font/10'>
      <h2 className='base-section-title'>
        <SquareStackIcon />
        <span>{translation('projects.title')}</span>
      </h2>
      <p className='font-sans font-sm max-w-lg text-center font-semibold'>
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

      <h3 className='font-semibold font-sans text-xl underline underline-offset-4 decoration-dashed '>
        {translation('works.section_name')}
      </h3>

      <Works />

      <h3 className='font-semibold font-sans-display text-lg underline underline-offset-4 uppercase decoration-dashed'>
        {translation('projects.section_name')}
      </h3>

      <section className='cards-container'>
        <section className='grid grid-cols-3 mt-5 gap-5 max-[910px]:grid-cols-2 max-[605px]:grid-cols-1'>
          {projects.map((project, index) => (
            <motion.section
              className='w-[280px] h-[380px] flex flex-col rounded-xl p-2 select-none base-border bg-foreground font-sans shadow-[0_0_25px_#00000015]'
              key={index}
              whileHover={{ y: -7 }}>
              <div className='w-full h-[210px] relative'>
                <Image
                  src={project.image}
                  placeholder={'blur'}
                  width={280}
                  height={200}
                  className='base-border w-full h-full max-h-[180px]'
                  style={{ borderRadius: 10 }}
                  alt={project.name}
                />
                <h4 className='bg-orange-400/50 text-white backdrop-blur-md rounded-lg absolute left-2 bottom-2 px-2 w-fit font-medium text-sm'>
                  {project.category}
                </h4>
              </div>
              <div className='flex flex-col justify-between h-full'>
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
                      className='group bg-background transition-colors base-border shadow-[0_0_20px_rgba(0,0,0,.06)] flex items-center font-medium py-[5px] px-4 gap-2 rounded-xl'
                      rel={'noreferrer noopener'}>
                      <ExternalLinkIcon className='stroke-primary transition-colors w-auto h-5' />
                      <span className='group-hover:text-primary transition-colors capitalize text-[.9rem]'>
                        {translation('projects.live-demo')}
                      </span>
                    </motion.a>
                  ) : null}
                  <motion.a
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.03 }}
                    href={project.code_url}
                    className='group bg-background transition-colors base-border shadow-[0_0_20px_rgba(0,0,0,.06)] flex items-center font-medium py-[5px] px-4 gap-2 rounded-xl'
                    target={'_blank'}
                    rel={'noreferrer noopener'}>
                    <GithubIcon className='stroke-primary transition-colors w-auto h-5' />
                    <span className='group-hover:text-primary transition-colors capitalize text-[.9rem]'>
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
