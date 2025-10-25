import { IBM_Plex_Mono, Rethink_Sans } from 'next/font/google';

export const rethink = Rethink_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-rethink-sans'
});

export const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['italic', 'normal'],
  variable: '--font-ibm-plex-mono'
});
