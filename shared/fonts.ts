import {
  IBM_Plex_Mono,
  Plus_Jakarta_Sans,
  Space_Grotesk,
  Zilla_Slab
} from 'next/font/google';

export const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] });

export const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal']
});

export const zillaSlab = Zilla_Slab({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['italic', 'normal']
});

export const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['italic', 'normal']
});
