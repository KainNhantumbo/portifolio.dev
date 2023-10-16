import type { Work } from '@/types';
import { rawTranslation as translation } from '@/locales/init';

export function getWorks(): Work[] {
  return [
    {
      title: translation('works.choconotey.title'),
      description: translation('works.choconotey.description').split('\n'),
      image: '/assets/notes-demo-light.png',
      livePreview: {
        label: translation('works.live_preview_label'),
        url: 'https://choconotey-demo.vercel.app'
      },
      repository: {
        label: translation('works.repository_label'),
        url: 'https://github.com/KainNhantumbo/notes-app'
      },
      stack: ['node.js', 'react.js', 'express.js', 'typescript'],
      platforms: ['Web', 'PWA Apps']
    }
  ];
}
