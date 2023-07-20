import { TFooterLinks, TNavbarLinks } from '../@types';
import { FaGithub, FaWhatsapp } from 'react-icons/fa';
import { ImBlog, ImLinkedin2 } from 'react-icons/im';
import { rawTranslation } from '../locales/init';

export const social_media: TFooterLinks[] = [
  {
    name: rawTranslation('footer.anchors.github'),
    icon: FaGithub,
    link: 'https://github.com/KainNhantumbo',
  },
  {
    name: rawTranslation('footer.anchors.whatsapp'),
    icon: FaWhatsapp,
    link: 'https://wa.me/258844002535',
  },
  {
    name: rawTranslation('footer.anchors.linkedIn'),
    icon: ImLinkedin2,
    link: 'https://www.linkedin.com/in/kain-nhantumbo/?locale=en_US',
  },
  {
    name: rawTranslation('footer.anchors.blog'),
    icon: ImBlog,
    link: 'https://publish-it-programming.vercel.app',
  },
];

// stores navigation bar ref urls and name
export const headerAnchors: TNavbarLinks[] = [
  { label: rawTranslation('header.anchors.home'), ref: '#home' },
  { label: rawTranslation('header.anchors.about'), ref: '#about' },
  { label: rawTranslation('header.anchors.skills'), ref: '#skills' },
  { label: rawTranslation('header.anchors.projects'), ref: '#projects' },
  { label: rawTranslation('header.anchors.contact'), ref: '#contact' },
];
