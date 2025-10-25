import Package from '../../package.json';

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

export const locales = ['pt', 'en'];

export const EMAIL_SERVICE_ID = 'service_7hdoqih';
export const EMAIL_TEMPLATE_ID = 'template_eso630j';
export const EMAIL_PUBLIC_KEY = 'z3FUpU83GBFJyGXVF';
