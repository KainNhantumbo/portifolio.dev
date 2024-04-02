'use client';

import type { Work } from '@/types';
import choconoteyImage from '@/../public/assets/notes-demo-light.png';
import palletoneDemoImage from '@/../public/assets/palletone-demo.png';
import rubymartDemoImage from '@/../public/assets/rubymart-demo.png';
import { useScopedI18n } from '@/locales/client';

export const useWorks = (): readonly Work[] => {
  const translation = useScopedI18n('works');

  return [
    {
      title: translation('rubymart.title'),
      description: translation('rubymart.description').split('\n'),
      image: rubymartDemoImage,
      livePreview: {
        label: translation('live_preview_label'),
        url: 'https://sales-app-demo.vercel.app'
      },
      repository: {
        label: translation('repository_label'),
        url: 'https://github.com/KainNhantumbo/sales-app'
      },
      stack: ['node.js', 'next.js', 'styled-components', 'express.js', 'typescript'],
      platforms: ['Web', 'PWA Apps']
    },
    {
      title: translation('choconotey.title'),
      description: translation('choconotey.description').split('\n'),
      image: choconoteyImage,
      livePreview: {
        label: translation('live_preview_label'),
        url: 'https://choconotey-demo.vercel.app'
      },
      repository: {
        label: translation('repository_label'),
        url: 'https://github.com/KainNhantumbo/notes-client'
      },
      stack: ['node.js', 'react.js', 'express.js', 'styled-components', 'typescript'],
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
};
