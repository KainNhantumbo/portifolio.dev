'use client';

import { _about as Container } from '@/styles/routes/_about';
import { Code2Icon, ExternalLinkIcon, GithubIcon, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Page() {
  return (
    <Container className='px-2 border-t-font/10  mb-12 w-full max-w-[780px] flex flex-col gap-3 mx-auto mt-10 p-5 z-50 font-sans relative backdrop-blur-sm bg-background/50 after:absolute after:w-[1px] after:h-[1px] after:right-[50%] after:top-0 after:rounded-full after:-z-50 after:bg-primary after:shadow-[0_0_180px_140px_rgba(228,113,49,0.8)]'>
      <article className='mt-10 w-full flex flex-col gap-5 font-sans-body font-medium'>
        <h1 className='font-medium'>About me</h1>
        <section className='description-container'>
          <p>
            Hi, I am Kain. I'm a developer and freelancer who likes to spent
            time building fancy and useful full-stack web applications in the
            part-time, although this blog is just a front-end static generated
            Next.JS application. My main programming languages that I am
            currently learning and using to build my projects are Javascript and
            Typescript, whitch I am currently fluent on them.
          </p>
          <p>
            I built this blog because I think that every programmer has
            something to share, so start blogging is one of many other manners
            to enhance the coding journey and keep myself motivated to continue
            learning. Futhermore, I just realized that there is no such thing
            more satisfying than sharing what I have learned and that keeps me
            on the right pace of my day to day studies.
          </p>

          <p>
            Btw, this blog is an example of work done entirely by me. This site
            was developed with the best technologies for the development of
            modern web applications, in order to guarantee stability,
            performance and security for me and the visitors.
          </p>
          <p>
            I am always open to new opportunities, partnerships and challenges.
            If you liked it and intend to hire me for a service, feel free to
            get in touch one of the ways listed below.
          </p>
        </section>
        <section className='complements-container'>
          <section className='anchors-container'>
            <Link
              href={'mailto:nhantumbok@gmail.com'}
              rel='noopener noreferrer'
              target='_blank'
              className='base-border rounded-md hover:underline hover:underline-offset-8 hover:text-primary hover:decoration-dashed'>
              <Mail className='stroke-primary h-auto w-5' />
              <span className='text-primary'>nhantumbok@gmail.com</span>
            </Link>

            <Link
              href={'https://github.com/KainNhantumbo'}
              rel='noopener noreferrer'
              target='_blank'
              className='base-border rounded-md hover:underline hover:underline-offset-8 hover:text-primary hover:decoration-dashed'>
              <GithubIcon className='stroke-primary h-auto w-5' />
              <span className='text-primary'>
                https://github.com/KainNhantumbo
              </span>
            </Link>

            <Link
              href={'https://codenut-dev.vercel.app'}
              rel='noopener noreferrer'
              target='_blank'
              className='base-border rounded-md hover:underline hover:underline-offset-8 hover:text-primary hover:decoration-dashed'>
              <ExternalLinkIcon className='stroke-primary h-auto w-5' />
              <span className='text-primary'>
                https://codenut-dev.vercel.app
              </span>
            </Link>
          </section>
          <section className='techs-container'>
            <p>
              <strong>Technologies used to build this website:</strong>
            </p>
            <div className='group'>
              <p className='base-border rounded-md'>
                <Code2Icon className='h-auto w-5 stroke-primary' />
                <span>React.JS</span>
              </p>
              <p className='base-border rounded-md'>
                <Code2Icon className='stroke-primary h-auto w-5' />
                <span>Next.JS</span>
              </p>
              <p className='base-border rounded-md'>
                <Code2Icon className='stroke-primary h-auto w-5' />
                <span>React.JS</span>
              </p>
              <p className='base-border rounded-md'>
                <Code2Icon className='stroke-primary h-auto w-5' />
                <span>Markdown</span>
              </p>
              <p className='base-border rounded-md'>
                <Code2Icon className='stroke-primary h-auto w-5' />
                <span>CSS 3</span>
              </p>
              <p className='base-border rounded-md'>
                <Code2Icon className='stroke-primary h-auto w-5' />
                <span>Javascript</span>
              </p>
              <p className='base-border rounded-md'>
                <Code2Icon className='stroke-primary h-auto w-5' />
                <span>Typescript</span>
              </p>
              <p className='base-border rounded-md'>
                <Code2Icon className='stroke-primary h-auto w-5' />
                <span>Node.JS</span>
              </p>
            </div>
          </section>
        </section>
      </article>
    </Container>
  );
}
