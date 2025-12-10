'use client';

import { BackgroundGradient } from '@/components/animations/animate-background';
import Button from '@/components/ui/button';
import { SectionHeader } from '@/components/ui/section-header';
import { useProjects } from '@/hooks/use-projects';
import { useI18n } from '@/locales/client';
import { EyeIcon, GithubIcon } from 'lucide-react';
import Image from 'next/image';
import * as React from 'react';

const Projects = () => {
  const projects = useProjects();
  const translation = useI18n();

  return (
    <section
      id='projects'
      className='relative mx-auto flex min-h-screen w-full max-w-[1280px] flex-col items-center gap-3 pt-5'>
      <SectionHeader
        title={translation('projects.title')}
        description={translation('projects.description')}
      />

      <section className='mt-6 grid grid-cols-1 gap-8 min-[900px]:grid-cols-2'>
        {projects.map((project, index) => (
          <BackgroundGradient
            containerClassName={'p-1'}
            className='flex h-full min-h-[360px] w-full select-none flex-row-reverse rounded-lg bg-foreground/60 font-sans'
            key={index}>
            <div className='relative h-full w-full'>
              <Image
                src={project.image}
                placeholder={'blur'}
                width={620}
                height={620}
                className='h-full w-full rounded-r-lg object-cover'
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
              <div className='flex flex-col gap-3'>
                {project.live_url.length > 5 ? (
                  <Button
                    as='a'
                    variant='secondary'
                    href={project.live_url}
                    target={'_blank'}
                    rel={'noreferrer noopener'}
                    className='w-full'
                    icon={<EyeIcon className='h-5 w-auto' />}>
                    <span className='text-[.9rem] capitalize transition-colors'>
                      {translation('projects.button-actions.go-live')}
                    </span>
                  </Button>
                ) : null}
                <Button
                  as='a'
                  variant='primary'
                  href={project.code_url}
                  target={'_blank'}
                  rel={'noreferrer noopener'}
                  className='w-full'
                  icon={<GithubIcon className='h-5 w-auto' />}>
                  <span className='text-[.9rem] capitalize transition-colors'>
                    {translation('projects.button-actions.view-code')}
                  </span>
                </Button>
              </div>
            </div>
          </BackgroundGradient>
        ))}
      </section>
    </section>
  );
};

export default React.memo(Projects);
