'use client';

import Works from './Works';
import Image from 'next/image';
import { motion } from '@/providers/framer-provider';
import { useProjects } from '../hooks/useProjects';
import { _projects as Container } from '../styles/modules/_projects';
import { ExternalLinkIcon, GithubIcon, SquareStackIcon } from 'lucide-react';
import { useI18n } from '@/locales/client';

export default function Projects() {
  const projects = useProjects();
  const translation = useI18n();

  return (
    <Container
      id='projects'
      className='w-full max-w-[980px] flex flex-col items-center gap-3 pt-5 mx-auto border-solid border-t-[1px] border-font/10'>
      <h2 className='rounded-md after:absolute after:top-[calc(50%_-_30px)] after:left-[calc(50%_-_10px)] after:w-[40px] after:h-[7px] after:rounded-md after:bg-primary font-sans font-semibold'>
        <SquareStackIcon  className='stroke-primary'/>
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

      <h3 className='font-semibold font-sans text-xl underline underline-offset-4 decoration-dashed'>
        {translation('projects.section_name')}
      </h3>

      <section className='cards-container'>
        <section className='cards-wrapper'>
          {projects.map((project, index) => (
            <motion.section
              className='card base-border bg-foreground font-sans shadow-[0_0_25px_#00000015]'
              key={index}
              whileHover={{ y: -7 }}>
              <div className='top'>
                <Image
                  src={project.image}
                  placeholder={'blur'}
                  width={280}
                  height={200}
                  className='base-border shadow-[0_0_25px_rgba(0,0,0,.08)]'
                  style={{ borderRadius: 10 }}
                  alt={project.name}
                />
                <h4 className='bg-orange-400/50 text-white backdrop-blur-md rounded-2xl'>
                  {project.category}
                </h4>
              </div>
              <div className='bottom'>
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
    </Container>
  );
}
