import {
  BadgeCheckIcon,
  BookMarkedIcon,
  Code2Icon,
  FolderGit2Icon,
  GithubIcon,
  PenToolIcon
} from 'lucide-react';
import { Stack } from '../types';
import { m as motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { _abilities as Container } from '../styles/modules/_abilities';

export default function Abilities() {
  const { t: translation } = useTranslation();

  const data: Array<Stack> = [
    {
      title: translation('abilities.frontend-title'),
      icon: BadgeCheckIcon,
      data: [
        { tech: 'Typescript', icon: Code2Icon },
        { tech: 'Javascript', icon: Code2Icon },
        { tech: 'React', icon: Code2Icon },
        { tech: 'Next.JS', icon: Code2Icon },
        { tech: 'SASS & CSS', icon: Code2Icon },
        { tech: 'HTML5', icon: Code2Icon }
      ]
    },
    {
      title: translation('abilities.backend-title'),
      icon: BadgeCheckIcon,
      data: [
        { tech: 'Typescript', icon: Code2Icon },
        { tech: 'Javascript', icon: Code2Icon },
        { tech: 'Node.JS', icon: Code2Icon },
        { tech: 'Express.JS', icon: Code2Icon },
        { tech: 'Mongo DB', icon: Code2Icon },
        { tech: 'PostgreSQL', icon: Code2Icon }
      ]
    },
    {
      title: translation('abilities.tools-title'),
      icon: BadgeCheckIcon,
      data: [
        { tech: 'Git', icon: FolderGit2Icon },
        { tech: 'Markdown', icon: BookMarkedIcon },
        { tech: 'Github', icon: GithubIcon }
      ]
    }
  ];

  return (
    <Container id='skills'>
      <h2>
        <PenToolIcon />
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
                whileHover={{
                  rotate: [0, -20, 0, 20, 0],
                  scale: [1.1, 1, 1.18, 1.09, 1]
                }}
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
