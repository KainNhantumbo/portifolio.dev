import Image from 'next/image';
import { Project } from '../types';
import { FaGithub } from 'react-icons/fa';
import { m as motion } from 'framer-motion';
import { getProjects } from '@/data/projects';
import { useTranslation } from 'react-i18next';
import { HiPlay, HiViewGrid } from 'react-icons/hi';
import { _projects as Container } from '../styles/components/projects';

export default function Projects() {
  const projects: Project[] = getProjects();
  const { t: translation } = useTranslation();

  return (
    <Container>
      <h2>
        <HiViewGrid />
        <span>{translation('projects.title')}</span>
      </h2>
      <p>
        <strong>
          {translation('projects.intro-part-1')}{' '}
          <a
            href='https://github.com/KainNhantumbo'
            target={'_blank'}
            rel={'noreferrer noopener'}>
            {' '}
            {translation('projects.intro-part-2')}
          </a>
          .
        </strong>
      </p>
      <section className='cards-container'>
        <section className='cards-wrapper'>
          {projects.map((project, index) => (
            <motion.section className='card' key={index} whileHover={{ y: -7 }}>
              <div className='top'>
                <Image
                  src={project.image}
                  placeholder={'blur'}
                  width={280}
                  height={200}
                  style={{ borderRadius: 10 }}
                  alt={project.name}
                />
                <h4>{project.category}</h4>
              </div>
              <div className='bottom'>
                <div className='details'>
                  <h3>{project.name}</h3>{' '}
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
}