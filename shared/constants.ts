import type { Metadata } from 'next';
import Package from '../package.json';

export const cursorClickablesList = [
  'a',
  'input[type="text"]',
  'input[type="email"]',
  'input[type="number"]',
  'input[type="submit"]',
  'input[type="image"]',
  'label[for]',
  'select',
  'textarea',
  'button',
];

export const constants = {
  authorName: Package.author.name,
  authorEmail: Package.author.email,
  url: Package.url,
  locale: 'en',
  description: Package.description,
  title: 'Codenut.dev',
  copyright: `© ${new Date().getFullYear()} Kain Nhantumbo`
};

export const AUTHOR = {
  name: Package.author.name,
  picture: '/assets/author.jpg',
  picturePlaceholder: '/assets/author-placeholder.jpg',
  email: Package.author.email,
  description: 'Web Developer & Designer'
};

export const metadata: Metadata = {
  title: constants.title,
  description: constants.description,
  authors: [{ name: AUTHOR.name, url: AUTHOR.email }],
  category: 'website',
  icons: '/favicon.png'
};

export const locales = ['pt', 'en'];
