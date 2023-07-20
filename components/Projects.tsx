import { FC } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { projects } from '../data/projects-data';
import { HiPlay, HiViewGrid } from 'react-icons/hi';
import { ProjectsContainer as Container } from '../styles/components/projects';
import { useTranslation } from 'react-i18next';

const Projects: FC = (): JSX.Element => {
  const { t: translation } = useTranslation();
  return (
    <Container id='projects'>
      <h2>
        <HiViewGrid />
        <span>{translation('projects.title')}</span>
      </h2>
      <motion.p
        initial={{ opacity: 0, x: -500 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        whileInView={{ opacity: 1, x: 0 }}>
        <strong>{translation('projects.intro-part-1')}{' '}
          <a
            href='https://github.com/KainNhantumbo'
            target={'_blank'}
            rel={'noreferrer noopener'}>
            {translation('projects.intro-part-2')}
          </a>
          .
        </strong>
      </motion.p>
      <section className='cards-container'>
        <section className='cards-wrapper'>
          {projects.map((project, index) => (
            <motion.section className='card' key={index}>
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
                      <span>{translation('projects.live-demo')}</span>
                    </motion.a>
                  ) : null}
                  <motion.a
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.03 }}
                    href={project.code_url}
                    target={'_blank'}
                    rel={'noreferrer noopener'}>
                    <FaGithub />
                    <span>{translation('projects.github')}</span>
                  </motion.a>
                </div>
              </div>
            </motion.section>
          ))}
        </section>
      </section>
    </Container>
  );
};

export default Projects;
