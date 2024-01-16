import { Project } from '@/types';
import server_01 from '@/public/assets/server-01.png';
import server_03 from '@/public/assets/server-03.png';
import nava_notes from '@/public/assets/nava-notes.jpg';
import planner_app from '@/public/assets/planner-app.jpg';
import bug_tracker_app from '@/public/assets/bug-tracker-app.jpeg';
import url_shortner_app from '@/public/assets/url-shortner-app.jpeg';
import bug_tracker_server from '@/public/assets/bug-tracker-server.png';
import firstRestaurantImage from '@/public/assets/restaurant-demo-first.png';
import barbercutts from '@/public/assets/barbercutts.png';
import maron_themes from '@/public/assets/maron-themes.png';
import { useScopedI18n } from '@/locales/client';

const categories = {
  back: 'Back-end',
  front: 'Front-end',
  full: 'Full-stack'
};

export function useProjects(): Project[] {
  const translation = useScopedI18n('projects');

  return [
    {
      name: translation('content.maron-themes'),
      category: categories.front,
      image: maron_themes,
      code_url: 'https://github.com/KainNhantumbo/maron-themes',
      live_url:
        'https://marketplace.visualstudio.com/items?itemName=KainNhantumbo.maron-themes'
    },
    {
      name: translation('content.bug-tracker'),
      category: categories.full,
      image: bug_tracker_app,
      code_url: 'https://github.com/KainNhantumbo/bug-tracker',
      live_url: 'https://bug-tracker-kainnhantumbo.vercel.app'
    },
    {
      name: translation('content.url-shortner'),
      category: categories.full,
      image: url_shortner_app,
      code_url: 'https://github.com/KainNhantumbo/url-shortner-app',
      live_url: 'https://url-shortner-app-six.vercel.app'
    },
    {
      name: translation('content.notes-app'),
      category: categories.front,
      image: nava_notes,
      live_url: 'https://nava-notes-app.vercel.app',
      code_url: 'https://github.com/KainNhantumbo/Nava-Notes-App'
    },
    {
      name: translation('content.tasks-app'),
      category: categories.full,
      image: planner_app,
      live_url: '',
      code_url: 'https://github.com/KainNhantumbo/Planner-App'
    },
    {
      name: translation('content.barber-shop-website'),
      category: categories.front,
      image: barbercutts,
      live_url: 'https://barbercutts-demo.vercel.app',
      code_url: 'https://github.com/KainNhantumbo/barber-shop-website'
    },
    {
      name: translation('content.restaurant-demo'),
      category: categories.front,
      image: firstRestaurantImage,
      live_url: 'https://imeat-restaurant-demo.vercel.app',
      code_url: 'https://github.com/KainNhantumbo/restaurant-sample-website'
    },
    {
      name: translation('content.bug-tracker-server'),
      category: categories.back,
      image: bug_tracker_server,
      code_url: 'https://github.com/KainNhantumbo/bug-tracker-api',
      live_url: ''
    },
    {
      name: translation('content.hagira-store-server'),
      category: categories.back,
      image: server_01,
      live_url: '',
      code_url: 'https://github.com/KainNhantumbo/Hagira-Website-API'
    },
    {
      name: translation('content.tasks-app-server'),
      category: categories.back,
      image: server_03,
      live_url: '',
      code_url: 'https://github.com/KainNhantumbo/Server-for-planner-app'
    }
  ];
}
