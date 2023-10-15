import type { Work } from '@/types';
import { rawTranslation as translation } from '@/locales/init';
import notesAppImage from '@/../public/assets/notes-demo-light.png';

export function getWorks(): Array<Work> {
  return [
    {
      title: translation('works.choconotey.title'),
      description: translation('works.choconotey.description').split('\n'),
      image: notesAppImage,
      livePreview: {
        label: translation('works.live_preview_label'),
        url: 'https://choconotey-demo.vercel.app',
      },
      repository: {
        label: translation('works.repository_label'),
        url: 'https://github.com/KainNhantumbo/notes-app',
      },
      stack: ['node.js', 'react.js', 'express.js', 'typescript'],
      platforms: ['web', '', 'pwa apps'],
    },
  ];
}
