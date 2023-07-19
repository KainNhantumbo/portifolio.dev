import { FC } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { projects } from '../data/projects-data';
import { HiPlay, HiViewGrid } from 'react-icons/hi';
import { ProjectsContainer as Container } from '../styles/components/projects';

const Projects: FC = (): JSX.Element => (
  <Container id='projects'>
    <h2>
      <HiViewGrid />
      <span>My Projects and Works</span>
    </h2>
    <motion.p
      initial={{ opacity: 0, x: -500 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      whileInView={{ opacity: 1, x: 0 }}>
      <strong>
        (...) and because I understand that showing is sometimes better than
        saying, here are some of my personal projects that I have been working
        on these days. You can see all my personal projects on my{' '}
        <a
          href='https://github.com/KainNhantumbo'
          target={'_blank'}
          rel={'noreferrer noopener'}>
          github profile
        </a>
        .
      </strong>
    </motion.p>
    <section className='cards-container'>
      <section className='cards-wrapper'>
        {projects.map((project, index) => (
          <motion.section className='card' key={index} whileInView={{}}>
            <div className='top'>
              <Image
                src={project.image}
                placeholder={'blur'}
                width={280}
                height={210}
                objectFit={'cover'}
                style={{ borderRadius: 10 }}
                alt={project.name}
              />
              <h4>{project.category}</h4>
            </div>
            <div className='bottom'>
              <div className='details'>
                <h3>{project.name}</h3>
              </div>
              <div className='actions'>
                {project.live_url.length > 5 ? (
                  <motion.a
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.03 }}
                    href={project.live_url}
                    target={'_blank'}
                    rel={'noreferrer noopener'}>
                    <HiPlay />
                    <span>Live Demo</span>
                  </motion.a>
                ) : null}
                <motion.a
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ scale: 1.03 }}
                  href={project.code_url}
                  target={'_blank'}
                  rel={'noreferrer noopener'}>
                  <FaGithub />
                  <span>Github Repository</span>
                </motion.a>
              </div>
            </div>
          </motion.section>
        ))}
      </section>
    </section>
  </Container>
);

export default Projects;
