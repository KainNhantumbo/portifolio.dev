import { FooterLinks, NavbarLinks } from '../@types/interfaces';
import { FaGithub, FaWhatsapp } from 'react-icons/fa';
import { ImBlog, ImLinkedin2 } from 'react-icons/im';

export const socialMedia: FooterLinks[] = [
  {
    name: 'Find me on Github',
    icon: FaGithub,
    link: 'https://github.com/KainNhantumbo',
  },
  {
    name: 'Find me on Whatsapp',
    icon: FaWhatsapp,
    link: 'https://wa.me/258844002535',
  },
  {
    name: 'Find me on LinkedIn',
    icon: ImLinkedin2,
    link: 'https://www.linkedin.com/in/kain-nhantumbo/?locale=en_US',
  },
  {
    name: 'Visit my blog',
    icon: ImBlog,
    link: 'https://publish-it-programming.vercel.app',
  },
];

// stores navigation bar ref urls and name
export const urls: NavbarLinks[] = [
  { label: 'Home', ref: '#home' },
  { label: 'About', ref: '#about' },
  { label: 'Skills', ref: '#skills' },
  { label: 'Projects', ref: '#projects' },
  { label: 'Contact', ref: '#contact' },
];
