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
import { FaReact } from 'react-icons/fa';
import { TStackSkill } from '../@types';

enum Levels {
  ex = 'Expert',
  inter = 'Intermediate',
  med = 'Medium',
  learn = 'Learning',
}

export const frontend_data: TStackSkill[] = [
  { tech: 'Typescript', icon: SiTypescript, level: Levels.ex },
  { tech: 'Javascript', icon: SiJavascript, level: Levels.ex },
  { tech: 'React', icon: FaReact, level: Levels.ex },
  { tech: 'Next.JS', icon: SiReact, level: Levels.ex },
  { tech: 'SASS & CSS', icon: SiCss3, level: Levels.ex },
  { tech: 'HTML5', icon: SiHtml5, level: Levels.ex },
];

export const backend_data: TStackSkill[] = [
  { tech: 'Typescript', icon: SiTypescript, level: Levels.ex },
  { tech: 'Javascript', icon: SiJavascript, level: Levels.ex },
  { tech: 'Node.JS', icon: SiNodedotjs, level: Levels.inter },
  { tech: 'Express.JS', icon: SiExpress, level: Levels.ex },
  { tech: 'Mongo DB', icon: SiMongodb, level: Levels.inter },
  { tech: 'PostgreSQL', icon: SiPostgresql, level: Levels.inter },
];

export const tools_data: TStackSkill[] = [
  { tech: 'Git', icon: SiGit, level: Levels.inter },
  { tech: 'Markdown', icon: SiMarkdown, level: Levels.ex },
  { tech: 'Github', icon: SiGithub, level: Levels.ex },
];
