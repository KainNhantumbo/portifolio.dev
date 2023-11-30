import {
  RiCss3Fill,
  RiGithubFill,
  RiJavascriptLine,
  RiMailLine,
  RiMarkdownLine,
  RiPlanetLine,
  RiReactjsLine
} from 'react-icons/ri';
import Layout from '@/components/Layout';
import { _about as Container } from '@/styles/routes/_about';
import { SiNextdotjs, SiNodedotjs, SiTypescript } from 'react-icons/si';
import Link from 'next/link';

export default function About() {
  return (
    <Layout metadata={{ title: 'About' }}>
      <Container>
        <article>
          <h1>About me</h1>
          <section className='description-container'>
            <p>
              Hi, I am Kain. I'm a developer and freelancer who likes to spent
              time building fancy and useful full-stack web applications in the
              part-time, although this blog is just a front-end static generated
              Next.JS application. My main programming languages that I am
              currently learning and using to build my projects are Javascript
              and Typescript, whitch I am currently fluent on them.
            </p>
            <p>
              I built this blog because I think that every programmer has
              something to share, so start blogging is one of many other manners
              to enhance the coding journey and keep myself motivated to
              continue learning. Futhermore, I just realized that there is no
              such thing more satisfying than sharing what I have learned and
              that keeps me on the right pace of my day to day studies.
            </p>

            <p>
              Btw, this blog is an example of work done entirely by me. This
              site was developed with the best technologies for the development
              of modern web applications, in order to guarantee stability,
              performance and security for me and the visitors.
            </p>
            <p>
              I am always open to new opportunities, partnerships and
              challenges. If you liked it and intend to hire me for a service,
              feel free to get in touch one of the ways listed below.
            </p>
          </section>
          <section className='complements-container'>
            <section className='anchors-container'>
              <Link
                href={'mailto:nhantumbok@gmail.com'}
                rel='noopener noreferrer'
                target='_blank'>
                <RiMailLine />
                <span>nhantumbok@gmail.com</span>
              </Link>

              <Link
                href={'https://github.com/KainNhantumbo'}
                rel='noopener noreferrer'
                target='_blank'>
                <RiGithubFill />
                <span>https://github.com/KainNhantumbo</span>
              </Link>

              <Link
                href={'https://codenut-dev.vercel.app'}
                rel='noopener noreferrer'
                target='_blank'>
                <RiPlanetLine />
                <span>https://codenut-dev.vercel.app</span>
              </Link>
            </section>
            <section className='techs-container'>
              <p>
                <strong>Technologies used to build this website:</strong>
              </p>
              <div>
                <p>
                  <RiReactjsLine />
                  <span>React.JS</span>
                </p>
                <p>
                  <SiNextdotjs />
                  <span>Next.JS</span>
                </p>
                <p>
                  <RiReactjsLine />
                  <span>React.JS</span>
                </p>
                <p>
                  <RiMarkdownLine />
                  <span>Markdown</span>
                </p>
                <p>
                  <RiCss3Fill />
                  <span>CSS 3</span>
                </p>
                <p>
                  <RiJavascriptLine />
                  <span>Javascript</span>
                </p>
                <p>
                  <SiTypescript />
                  <span>Typescript</span>
                </p>
                <p>
                  <SiNodedotjs />
                  <span>Node.JS</span>
                </p>
              </div>
            </section>
          </section>
        </article>
      </Container>
    </Layout>
  );
}
