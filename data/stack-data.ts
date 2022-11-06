import { FaReact } from 'react-icons/fa';
import { IStackSkill } from '../types/interfaces';
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

enum Levels {
  ex = 'Experienced',
  inter = 'Intermediate',
  med = 'Medium',
  learn = 'Learning',
}

export const frontend_data: IStackSkill[] = [
  { tech: 'Typescript', icon: SiTypescript, level: Levels.inter },
  { tech: 'Javascript', icon: SiJavascript, level: Levels.ex },
  { tech: 'React', icon: FaReact, level: Levels.ex },
  { tech: 'Next.JS', icon: SiReact, level: Levels.ex },
  { tech: 'SASS & CSS', icon: SiCss3, level: Levels.ex },
  { tech: 'HTML5', icon: SiHtml5, level: Levels.ex },
];

export const backend_data: IStackSkill[] = [
  { tech: 'Typescript', icon: SiTypescript, level: Levels.inter },
  { tech: 'Javascript', icon: SiJavascript, level: Levels.ex },
  { tech: 'Node.JS', icon: SiNodedotjs, level: Levels.inter },
  { tech: 'Express.JS', icon: SiExpress, level: Levels.inter },
  { tech: 'Mongo DB', icon: SiMongodb, level: Levels.inter },
  { tech: 'PostgreSQL', icon: SiPostgresql, level: Levels.inter },
];

export const tools_data: IStackSkill[] = [
  { tech: 'Git', icon: SiGit, level: Levels.inter },
  { tech: 'Markdown', icon: SiMarkdown, level: Levels.ex },
  { tech: 'Github', icon: SiGithub, level: Levels.inter },
];
