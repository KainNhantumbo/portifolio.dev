import { ReactNode } from 'react';
import { IconType } from 'react-icons';
import { StaticImageData } from 'next/image';
import { ChangeEvent, FormEvent } from 'react';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

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

type Project = {
  name: string;
  category: string;
  image: StaticImageData;
  code_url: string;
  live_url: string;
};

export type Stack = {
  title: string;
  icon: IconType;
  data: Array<{ tech: string; icon: IconType }>;
};

export type Theme = {
  primary: string;
  primary_shade: string;
  secondary: string;
  secondary_shade: string;
  font: string;
  font_dimmed: string;
  white: string;
  black: string;
  error: string;
  background: string;
  background_shade: string;
  foreground: string;
  foreground_shade: string;
};

export type ColorScheme = {
  mode: 'auto' | 'manual';
  scheme: 'dark' | 'light';
};

export type Action = { type: string; payload: State };

export type State = {
  isLanguagesModal: boolean;
};
