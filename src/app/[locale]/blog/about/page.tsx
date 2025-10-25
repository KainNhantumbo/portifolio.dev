import { Code2Icon, ExternalLinkIcon, GithubIcon, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Page() {
  return (
    <section className='relative z-50 mx-auto mb-12 mt-10 flex w-full max-w-[780px] flex-col gap-3 border-t-font/10 bg-background/50 p-5 px-4 font-sans backdrop-blur-sm after:absolute after:right-[50%] after:top-0 after:-z-50 after:h-[1px] after:w-[1px] after:rounded-full after:bg-primary after:shadow-[0_0_180px_140px_rgba(228,113,49,0.8)]'>
      <article className='mt-10 flex w-full flex-col gap-5 font-sans font-medium'>
        <h1 className='font-medium'>About me</h1>
        <section className='flex flex-col gap-3 font-normal'>
          <p>
            Hi, I am Kain. I'm a developer and freelancer who likes to spent time building
            fancy and useful full-stack web applications in the part-time, although this
            blog is just a front-end static generated Next.JS application. My main
            programming languages that I am currently learning and using to build my
            projects are Javascript and Typescript, which I am currently fluent on them.
          </p>
          <p>
            I built this blog because I think that every programmer has something to share,
            so start blogging is one of many other manners to enhance the coding journey and
            keep myself motivated to continue learning. Futhermore, I just realized that
            there is no such thing more satisfying than sharing what I have learned and that
            keeps me on the right pace of my day to day studies.
          </p>

          <p>
            Btw, this blog is an example of work done entirely by me. This site was
            developed with the best technologies for the development of modern web
            applications, in order to guarantee stability, performance and security for me
            and the visitors.
          </p>
          <p>
            I am always open to new opportunities, partnerships and challenges. If you liked
            it and intend to hire me for a service, feel free to get in touch one of the
            ways listed below.
          </p>
        </section>
        <section className='flex w-full flex-col gap-3'>
          <section className='mx-auto flex w-full flex-wrap gap-3'>
            <Link
              href={'mailto:nhantumbok@gmail.com'}
              rel='noopener noreferrer'
              target='_blank'
              className='base-border flex flex-nowrap items-center gap-[5px] rounded-md px-2 py-[3px] hover:text-primary hover:underline hover:decoration-dashed hover:underline-offset-8'>
              <Mail className='h-auto w-5 stroke-primary' />
              <span className='text-primary'>nhantumbok@gmail.com</span>
            </Link>

            <Link
              href={'https://github.com/KainNhantumbo'}
              rel='noopener noreferrer'
              target='_blank'
              className='base-border flex flex-nowrap items-center gap-[5px] rounded-md px-2 py-[3px] hover:text-primary hover:underline hover:decoration-dashed hover:underline-offset-8'>
              <GithubIcon className='h-auto w-5 stroke-primary' />
              <span className='text-primary'>https://github.com/KainNhantumbo</span>
            </Link>

            <Link
              href={'https://codenut-dev.vercel.app'}
              rel='noopener noreferrer'
              target='_blank'
              className='base-border flex flex-nowrap items-center gap-[5px] rounded-md px-2 py-[3px] hover:text-primary hover:underline hover:decoration-dashed hover:underline-offset-8'>
              <ExternalLinkIcon className='h-auto w-5 stroke-primary' />
              <span className='text-primary'>https://codenut-dev.vercel.app</span>
            </Link>
          </section>
          <section className='flex flex-col flex-wrap gap-3'>
            <p>
              <strong>Technologies used to build this website:</strong>
            </p>
            <div className='group flex flex-wrap items-center gap-3'>
              <p className='base-border flex flex-nowrap items-center gap-[5px] rounded-md px-2 py-[3px]'>
                <Code2Icon className='h-auto w-5 stroke-primary' />
                <span>React.JS</span>
              </p>
              <p className='base-border flex flex-nowrap items-center gap-[5px] rounded-md px-2 py-[3px]'>
                <Code2Icon className='h-auto w-5 stroke-primary' />
                <span>Next.JS</span>
              </p>
              <p className='base-border flex flex-nowrap items-center gap-[5px] rounded-md px-2 py-[3px]'>
                <Code2Icon className='h-auto w-5 stroke-primary' />
                <span>React.JS</span>
              </p>
              <p className='base-border flex flex-nowrap items-center gap-[5px] rounded-md px-2 py-[3px]'>
                <Code2Icon className='h-auto w-5 stroke-primary' />
                <span>Tailwind CSS</span>
              </p>
              <p className='base-border flex flex-nowrap items-center gap-[5px] rounded-md px-2 py-[3px]'>
                <Code2Icon className='h-auto w-5 stroke-primary' />
                <span>Markdown</span>
              </p>
              <p className='base-border flex flex-nowrap items-center gap-[5px] rounded-md px-2 py-[3px]'>
                <Code2Icon className='h-auto w-5 stroke-primary' />
                <span>CSS 3</span>
              </p>
              <p className='base-border flex flex-nowrap items-center gap-[5px] rounded-md px-2 py-[3px]'>
                <Code2Icon className='h-auto w-5 stroke-primary' />
                <span>Javascript</span>
              </p>
              <p className='base-border flex flex-nowrap items-center gap-[5px] rounded-md px-2 py-[3px]'>
                <Code2Icon className='h-auto w-5 stroke-primary' />
                <span>Typescript</span>
              </p>
              <p className='base-border flex flex-nowrap items-center gap-[5px] rounded-md px-2 py-[3px]'>
                <Code2Icon className='h-auto w-5 stroke-primary' />
                <span>Node.JS</span>
              </p>
            </div>
          </section>
        </section>
      </article>
    </section>
  );
}
