import Image from 'next/image';
import { Project } from '../types';
import { m as motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { HiPlay, HiViewGrid } from 'react-icons/hi';
import server_01 from '../public/assets/server-01.png';
import server_03 from '../public/assets/server-03.png';
import nava_notes from '../public/assets/nava-notes.jpg';
import planner_app from '../public/assets/planner-app.jpg';
import recipes_website from '../public/assets/recipes-website.png';
import bug_tracker_app from '../public/assets/bug-tracker-app.jpeg';
import url_shortner_app from '../public/assets/url-shortner-app.jpeg';
import hagira_ecommerce from '../public/assets/hagira-ecommerce.jpeg';
import bug_tracker_server from '../public/assets/bug-tracker-server.png';
import { _projects as Container } from '../styles/components/projects';

const categories = {
  back: 'Back-end',
  front: 'Front-end',
  full: 'Full-stack'
};

export default function Projects () {
  const { t: translation } = useTranslation();

  const projects: Project[] = [
    {
      name: translation('projects.content.bug-tracker'),
      category: categories.full,
      image: bug_tracker_app,
      code_url: 'https://github.com/KainNhantumbo/bug-tracker',
      live_url: 'https://bug-tracker-kainnhantumbo.vercel.app'
    },
    {
      name: translation('projects.content.url-shortner'),
      category: categories.full,
      image: url_shortner_app,
      code_url: 'https://github.com/KainNhantumbo/url-shortner-app',
      live_url: 'https://url-shortner-app-six.vercel.app'
    },
    {
      name: translation('projects.content.notes-app'),
      category: categories.front,
      image: nava_notes,
      live_url: 'https://nava-notes-app.vercel.app',
      code_url: 'https://github.com/KainNhantumbo/Nava-Notes-App'
    },
    {
      name: translation('projects.content.tasks-app'),
      category: categories.full,
      image: planner_app,
      live_url: '',
      code_url: 'https://github.com/KainNhantumbo/Planner-App'
    },
    {
      name: translation('projects.content.recipes-website'),
      category: categories.full,
      image: recipes_website,
      live_url: '',
      code_url: 'https://github.com/KainNhantumbo/food-and-recipes-website'
    },
    {
      name: translation('projects.content.hagira-store'),
      category: categories.full,
      image: hagira_ecommerce,
      live_url: '',
      code_url: 'https://github.com/KainNhantumbo/Hagira-Brands-Store'
    },
    {
      name: translation('projects.content.bug-tracker-server'),
      category: categories.back,
      image: bug_tracker_server,
      code_url: 'https://github.com/KainNhantumbo/bug-tracker-api',
      live_url: ''
    },
    {
      name: translation('projects.content.hagira-store-server'),
      category: categories.back,
      image: server_01,
      live_url: '',
      code_url: 'https://github.com/KainNhantumbo/Hagira-Website-API'
    },
    {
      name: translation('projects.content.tasks-app-server'),
      category: categories.back,
      image: server_03,
      live_url: '',
      code_url: 'https://github.com/KainNhantumbo/Server-for-planner-app'
    }
  ];

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
                  height={210}
                  objectFit={'cover'}
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
};

