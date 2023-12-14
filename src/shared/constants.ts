import Package from '../../package.json';

export const constants = {
  authorName: Package.author.name,
  authorEmail: Package.author.email,
  url: Package.url,
  locale: 'en',
  description: Package.description,
  title: 'Codenut.dev'
};

export const AUTHOR = {
  name: Package.author.name,
  picture: '/assets/author.jpg',
  picturePlaceholder: '/assets/author-placeholder.jpg',
  email: Package.author.email,
  description: 'Web Developer & Designer'
};
