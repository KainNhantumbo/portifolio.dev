import { Project } from '@/types';
import { rawTranslation as translation } from '@/locales/init';
import server_01 from '../../public/assets/server-01.png';
import server_03 from '../../public/assets/server-03.png';
import nava_notes from '../../public/assets/nava-notes.jpg';
import planner_app from '../../public/assets/planner-app.jpg';
import recipes_website from '../../public/assets/recipes-website.png';
import bug_tracker_app from '../../public/assets/bug-tracker-app.jpeg';
import url_shortner_app from '../../public/assets/url-shortner-app.jpeg';
import hagira_ecommerce from '../../public/assets/hagira-ecommerce.jpeg';
import bug_tracker_server from '../../public/assets/bug-tracker-server.png';
import firstRestaurantImage from '../../public/assets/restaurant-demo-first.png';

export function getProjects(): Project[] {
  const categories = {
    back: 'Back-end',
    front: 'Front-end',
    full: 'Full-stack',
  };

  return [
    {
      name: translation('projects.content.bug-tracker'),
      category: categories.full,
      image: bug_tracker_app,
      code_url: 'https://github.com/KainNhantumbo/bug-tracker',
      live_url: 'https://bug-tracker-kainnhantumbo.vercel.app',
    },
    {
      name: translation('projects.content.url-shortner'),
      category: categories.full,
      image: url_shortner_app,
      code_url: 'https://github.com/KainNhantumbo/url-shortner-app',
      live_url: 'https://url-shortner-app-six.vercel.app',
    },
    {
      name: translation('projects.content.notes-app'),
      category: categories.front,
      image: nava_notes,
      live_url: 'https://nava-notes-app.vercel.app',
      code_url: 'https://github.com/KainNhantumbo/Nava-Notes-App',
    },
    {
      name: translation('projects.content.tasks-app'),
      category: categories.full,
      image: planner_app,
      live_url: '',
      code_url: 'https://github.com/KainNhantumbo/Planner-App',
    },
    {
      name: translation('projects.content.recipes-website'),
      category: categories.full,
      image: recipes_website,
      live_url: '',
      code_url: 'https://github.com/KainNhantumbo/food-and-recipes-website',
    },
    {
      name: translation('projects.content.hagira-store'),
      category: categories.full,
      image: hagira_ecommerce,
      live_url: '',
      code_url: 'https://github.com/KainNhantumbo/Hagira-Brands-Store',
    },
    {
      name: translation('projects.content.bug-tracker-server'),
      category: categories.back,
      image: bug_tracker_server,
      code_url: 'https://github.com/KainNhantumbo/bug-tracker-api',
      live_url: '',
    },
    {
      name: translation('projects.content.hagira-store-server'),
      category: categories.back,
      image: server_01,
      live_url: '',
      code_url: 'https://github.com/KainNhantumbo/Hagira-Website-API',
    },
    {
      name: translation('projects.content.tasks-app-server'),
      category: categories.back,
      image: server_03,
      live_url: '',
      code_url: 'https://github.com/KainNhantumbo/Server-for-planner-app',
    },
  ];
}
