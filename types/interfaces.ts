import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';
import { IconType } from 'react-icons';

export interface IFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  from_email: string;
}

export interface FooterLinks {
  name: string;
  icon: IconType;
  link: string;
}

export interface NavbarLinks {
  ref: string;
  label: string;
}

export interface IProject {
  name: string;
  category: string;
  image: StaticImageData;
  code_url: string;
  live_url: string;
}

export interface IStackSkill {
  tech: string;
  icon: IconType;
  level: string;
}

export interface ILayoutProps {
  children: ReactNode;
}

export interface IModalProps {
  prompt_title: string;
  prompt_message: string;
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
  active: boolean;
}
