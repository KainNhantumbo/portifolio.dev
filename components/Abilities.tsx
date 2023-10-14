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
  SiTypescript
} from 'react-icons/si';
import { m as motion } from 'framer-motion';
import { FaReact } from 'react-icons/fa';
import { Stack } from '../types';
import { useTranslation } from 'react-i18next';
import { HiAcademicCap, HiBadgeCheck } from 'react-icons/hi';
import { _abilities as Container } from '../styles/components/abilities';

export default function Abilities() {
  const { t: translation } = useTranslation();

  const data: Array<Stack> = [
    {
      title: translation('abilities.frontend-title'),
      icon: HiBadgeCheck,
      data: [
        { tech: 'Typescript', icon: SiTypescript },
        { tech: 'Javascript', icon: SiJavascript },
        { tech: 'React', icon: FaReact },
        { tech: 'Next.JS', icon: SiReact },
        { tech: 'SASS & CSS', icon: SiCss3 },
        { tech: 'HTML5', icon: SiHtml5 }
      ]
    },
    {
      title: translation('abilities.backend-title'),
      icon: HiBadgeCheck,
      data: [
        { tech: 'Typescript', icon: SiTypescript },
        { tech: 'Javascript', icon: SiJavascript },
        { tech: 'Node.JS', icon: SiNodedotjs },
        { tech: 'Express.JS', icon: SiExpress },
        { tech: 'Mongo DB', icon: SiMongodb },
        { tech: 'PostgreSQL', icon: SiPostgresql }
      ]
    },
    {
      title: translation('abilities.tools-title'),
      icon: HiBadgeCheck,
      data: [
        { tech: 'Git', icon: SiGit },
        { tech: 'Markdown', icon: SiMarkdown },
        { tech: 'Github', icon: SiGithub }
      ]
    }
  ];

  return (
    <Container id='skills'>
      <h2>
        <HiAcademicCap />
        <span>{translation('abilities.title')}</span>
      </h2>

      {data.map((group, index) => (
        <section key={index} className='stack-container'>
          <h3 className='sub-title'>
            <group.icon />
            <span>{group.title}</span>
          </h3>
          <section className='list-items'>
            {group.data.map((item, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                whileInView={{
                  scale: 1,
                  transition: { duration: 0.5, bounce: 1 }
                }}
                whileHover={{ rotate: 360 }}
                className='item'>
                <item.icon />
                <h3>{item.tech}</h3>
              </motion.div>
            ))}
          </section>
        </section>
      ))}
    </Container>
  );
}
