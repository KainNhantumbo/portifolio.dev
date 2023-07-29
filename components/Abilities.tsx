import {
  SiCss3,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMarkdown,
  SiMongodb,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTypescript,
} from 'react-icons/si';
import type { FC } from 'react';
import { m as motion } from 'framer-motion';
import { FaReact } from 'react-icons/fa';
import type { TStackSkill } from '../@types';
import { useTranslation } from 'react-i18next';
import { HiAcademicCap, HiBadgeCheck } from 'react-icons/hi';
import { AbilitiesContainer as Container } from '../styles/components/abilities';

const Abilities: FC = (): JSX.Element => {
  const { t: translation } = useTranslation();

  const frontend_data: TStackSkill[] = [
    {
      tech: 'Typescript',
      icon: SiTypescript,
      level: translation('abilities.levels.expert'),
    },
    {
      tech: 'Javascript',
      icon: SiJavascript,
      level: translation('abilities.levels.expert'),
    },
    {
      tech: 'React',
      icon: FaReact,
      level: translation('abilities.levels.expert'),
    },
    {
      tech: 'Next.JS',
      icon: SiReact,
      level: translation('abilities.levels.expert'),
    },
    {
      tech: 'SASS & CSS',
      icon: SiCss3,
      level: translation('abilities.levels.expert'),
    },
    {
      tech: 'HTML5',
      icon: SiHtml5,
      level: translation('abilities.levels.expert'),
    },
  ];

  const backend_data: TStackSkill[] = [
    {
      tech: 'Typescript',
      icon: SiTypescript,
      level: translation('abilities.levels.expert'),
    },
    {
      tech: 'Javascript',
      icon: SiJavascript,
      level: translation('abilities.levels.expert'),
    },
    {
      tech: 'Node.JS',
      icon: SiNodedotjs,
      level: translation('abilities.levels.intermediate'),
    },
    {
      tech: 'Express.JS',
      icon: SiExpress,
      level: translation('abilities.levels.expert'),
    },
    {
      tech: 'Mongo DB',
      icon: SiMongodb,
      level: translation('abilities.levels.intermediate'),
    },
    {
      tech: 'PostgreSQL',
      icon: SiPostgresql,
      level: translation('abilities.levels.intermediate'),
    },
  ];

  const tools_data: TStackSkill[] = [
    {
      tech: 'Git',
      icon: SiGit,
      level: translation('abilities.levels.intermediate'),
    },
    {
      tech: 'Markdown',
      icon: SiMarkdown,
      level: translation('abilities.levels.expert'),
    },
    {
      tech: 'Github',
      icon: SiGithub,
      level: translation('abilities.levels.expert'),
    },
  ];

  return (
    <Container id='skills'>
      <h2>
        <HiAcademicCap />
        <span>{translation('abilities.title')}</span>
      </h2>
      <section className='stack-container'>
        <h3 className='sub-title'>
          <HiBadgeCheck />
          <span>{translation('abilities.frontend-title')}</span>
        </h3>
        <section className='list-items'>
          {frontend_data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              whileInView={{
                scale: 1,
                transition: { duration: 0.5, bounce: 1 },
              }}
              whileHover={{ rotate: 15 }}
              className='item'>
              <item.icon />
              <h3>{item.tech}</h3>
              <span>{item.level}</span>
            </motion.div>
          ))}
        </section>
      </section>
      <section className='stack-container'>
        <h3 className='sub-title'>
          <HiBadgeCheck />
          <span>{translation('abilities.backend-title')}</span>
        </h3>
        <section className='list-items'>
          {backend_data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              whileInView={{
                scale: 1,
                transition: { duration: 0.5, bounce: 1 },
              }}
              whileHover={{ rotate: -15 }}
              className='item'>
              <item.icon />
              <h3>{item.tech}</h3>
              <span>{item.level}</span>
            </motion.div>
          ))}
        </section>
      </section>
      <section className='stack-container'>
        <h3 className='sub-title'>
          <HiBadgeCheck />
          <span>{translation('abilities.tools-title')}</span>
        </h3>
        <section className='list-items'>
          {tools_data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              whileInView={{
                scale: 1,
                transition: { duration: 0.5, bounce: 1 },
              }}
              whileHover={{ rotate: 15 }}
              className='item'>
              <item.icon />
              <h3>{item.tech}</h3>
              <span>{item.level}</span>
            </motion.div>
          ))}
        </section>
      </section>
    </Container>
  );
};
export default Abilities;
