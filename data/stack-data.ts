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
import type { TStackSkill } from '../@types';
import { rawTranslation } from '../locales/init';

const levels = {
  ex: rawTranslation('abilities.levels.expert'),
  inter: rawTranslation('abilities.levels.intermediate'),
  med: rawTranslation('abilities.levels.medium'),
  learn: rawTranslation('abilities.levels.learn'),
};

export const frontend_data: TStackSkill[] = [
  { tech: 'Typescript', icon: SiTypescript, level: levels.ex },
  { tech: 'Javascript', icon: SiJavascript, level: levels.ex },
  { tech: 'React', icon: FaReact, level: levels.ex },
  { tech: 'Next.JS', icon: SiReact, level: levels.ex },
  { tech: 'SASS & CSS', icon: SiCss3, level: levels.ex },
  { tech: 'HTML5', icon: SiHtml5, level: levels.ex },
];

export const backend_data: TStackSkill[] = [
  { tech: 'Typescript', icon: SiTypescript, level: levels.ex },
  { tech: 'Javascript', icon: SiJavascript, level: levels.ex },
  { tech: 'Node.JS', icon: SiNodedotjs, level: levels.inter },
  { tech: 'Express.JS', icon: SiExpress, level: levels.ex },
  { tech: 'Mongo DB', icon: SiMongodb, level: levels.inter },
  { tech: 'PostgreSQL', icon: SiPostgresql, level: levels.inter },
];

export const tools_data: TStackSkill[] = [
  { tech: 'Git', icon: SiGit, level: levels.inter },
  { tech: 'Markdown', icon: SiMarkdown, level: levels.ex },
  { tech: 'Github', icon: SiGithub, level: levels.ex },
];
