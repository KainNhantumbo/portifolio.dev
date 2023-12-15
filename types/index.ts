import { LucideIcon } from 'lucide-react';
import { StaticImageData } from 'next/image';
import { ChangeEvent, FormEvent } from 'react';

export type InputEvents =
  | ChangeEvent<HTMLInputElement>
  | ChangeEvent<HTMLTextAreaElement>;

export type SubmitEvent = FormEvent<HTMLFormElement>;

export type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
  from_email: string;
};

export type Project = {
  name: string;
  category: string;
  image: StaticImageData;
  code_url: string;
  live_url: string;
};

export type Work = {
  title: string;
  image: StaticImageData;
  repository: { label: string; url: string };
  livePreview: { label: string; url: string };
  description: string[];
  stack: string[];
  platforms: string[];
};

export type Stack = {
  title: string;
  icon: LucideIcon;
  data: Array<{ tech: string; icon: LucideIcon }>;
};

export type ColorScheme = {
  mode: 'auto' | 'manual';
  scheme: 'dark' | 'light';
};

export type Action = { type: string; payload: State };

export type State = {
  isLanguagesModal: boolean;
};

export type Frontmatter = {
  title: string;
  excerpt: string;
  createdAt: string;
  updatedAt?: string;
  topic: string;
};

export interface Post extends Frontmatter {
  slug: string;
  content: string;
}
