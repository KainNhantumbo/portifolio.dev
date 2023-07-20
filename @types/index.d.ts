import { ReactNode } from 'react';
import { IconType } from 'react-icons';
import { StaticImageData } from 'next/image';
import { ChangeEvent, FormEvent } from 'react';

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}

export type TInputEvents =
  | ChangeEvent<HTMLInputElement>
  | ChangeEvent<HTMLTextAreaElement>;

export type TSubmitEvent = FormEvent<HTMLFormElement>;

export type TFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
  from_email: string;
};

export type TFooterLinks = {
  name: string;
  icon: IconType;
  link: string;
};

export type TNavbarLinks = {
  ref: string;
  label: string;
};

export type TProject = {
  name: string;
  category: string;
  image: StaticImageData;
  code_url: string;
  live_url: string;
};

export type TStackSkill = {
  tech: string;
  icon: IconType;
  level: string;
};

export type TLayoutProps = {
  children: ReactNode;
};

export type TModalProps = {
  prompt_title: string;
  prompt_message: string;
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
  active: boolean;
  buttonText: string;
};

export interface ITheme {
  primary: string;
  secondary: string;
  alter: string;
  alterAlt: string;
  font: string;
  inner: string;
  text: string;
  shadows: string;
  hover: string;
  background: string;
  background_alter: string;
  backgroundAlt: string;
}
