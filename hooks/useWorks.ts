'use client';

import type { Work } from '@/types';
import choconoteyLightImage from '@/../public/assets/notes-demo-light.png';
import palletoneDemoImage from '@/../public/assets/palletone-demo.png';
import { useScopedI18n } from '@/locales/client';

export function useWorks(): readonly Work[] {
  const translation = useScopedI18n('works');

  return [
    {
      title: translation('choconotey.title'),
      description: translation('choconotey.description').split('\n'),
      image: choconoteyLightImage,
      livePreview: {
        label: translation('live_preview_label'),
        url: 'https://choconotey-demo.vercel.app'
      },
      repository: {
        label: translation('repository_label'),
        url: 'https://github.com/KainNhantumbo/notes-client'
      },
      stack: ['node.js', 'react.js', 'express.js', 'typescript'],
      platforms: ['Web', 'PWA Apps']
    },
    {
      title: translation('palletone.title'),
      description: translation('palletone.description').split('\n'),
      image: palletoneDemoImage,
      livePreview: {
        label: translation('live_preview_label'),
        url: 'https://palletone-demo.vercel.app'
      },
      repository: {
        label: translation('repository_label'),
        url: 'https://github.com/KainNhantumbo/palletone-app'
      },
      stack: ['tailwind css', 'react.js', 'electron.js', 'typescript'],
      platforms: ['Web', 'PWA Apps', 'Linux', 'Windows']
    }
  ];
}
