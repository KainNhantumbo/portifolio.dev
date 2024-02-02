import { LucideIcon } from 'lucide-react';
import { StaticImageData } from 'next/image';
import { ChangeEvent, FormEvent } from 'react';
export type InputEvents =
  | ChangeEvent<HTMLInputElement>
  | ChangeEvent<HTMLTextAreaElement>;

export type SubmitEvent = FormEvent<HTMLFormElement>;

export type Theme = {
  error: string;
  font: string;
  font_dimmed: string;
  black: string;
  white: string;
  primary: string;
  secondary: string;
  background: string;
  foreground: string;
  primary_shade: string;
  secondary_shade: string;
  background_shade: string;
  foreground_shade: string;
};

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

export type PageParams = { params: { locale: string } };

export type UrlList = Array<{ ref: string; label: string; url?: string }>;

export type FooterAnchors = { name: string; icon: LucideIcon; link: string };