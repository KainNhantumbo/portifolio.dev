import { TProject } from '../@types';
import server_01 from '../assets/server-01.png';
import server_03 from '../assets/server-03.png';
import blog_shot from '../assets/blog-shot.jpeg';
import nava_notes from '../assets/nava-notes.jpg';
import planner_app from '../assets/planner-app.jpg';
import recipes_website from '../assets/recipes-website.png';
import bug_tracker_app from '../assets/bug-tracker-app.jpeg';
import { rawTranslation } from '../internationalization/init';
import url_shortner_app from '../assets/url-shortner-app.jpeg';
import hagira_ecommerce from '../assets/hagira-ecommerce.jpeg';
import bug_tracker_server from '../assets/bug-tracker-server.png';

const categories = {
  back: 'Back-end',
  front: 'Front-end',
  full: 'Full-stack',
};

export const projects: TProject[] = [
  {
    name: rawTranslation('projects.content.bug-tracker'),
    category: categories.full,
    image: bug_tracker_app,
    code_url: 'https://github.com/KainNhantumbo/bug-tracker',
    live_url: 'https://bug-tracker-kainnhantumbo.vercel.app',
  },
  {
    name: rawTranslation('projects.content.url-shortner'),
    category: categories.full,
    image: url_shortner_app,
    code_url: 'https://github.com/KainNhantumbo/url-shortner-app',
    live_url: 'https://url-shortner-app-six.vercel.app',
  },
  {
    name: rawTranslation('projects.content.programming-blog'),
    category: categories.front,
    image: blog_shot,
    code_url: 'https://github.com/KainNhantumbo/publish-it.programming',
    live_url: 'https://publish-it-programming.vercel.app',
  },
  {
    name: rawTranslation('projects.content.notes-app'),
    category: categories.front,
    image: nava_notes,
    live_url: 'https://nava-notes-app.vercel.app',
    code_url: 'https://github.com/KainNhantumbo/Nava-Notes-App',
  },
  {
    name: rawTranslation('projects.content.tasks-app'),
    category: categories.full,
    image: planner_app,
    live_url: '',
    code_url: 'https://github.com/KainNhantumbo/Planner-App',
  },
  {
    name: rawTranslation('projects.content.recipes-website'),
    category: categories.full,
    image: recipes_website,
    live_url: '',
    code_url: 'https://github.com/KainNhantumbo/food-and-recipes-website',
  },
  {
    name: rawTranslation('projects.content.hagira-store'),
    category: categories.full,
    image: hagira_ecommerce,
    live_url: '',
    code_url: 'https://github.com/KainNhantumbo/Hagira-Brands-Store',
  },
  {
    name: rawTranslation('projects.content.bug-tracker-server'),
    category: categories.back,
    image: bug_tracker_server,
    code_url: 'https://github.com/KainNhantumbo/bug-tracker-api',
    live_url: '',
  },
  {
    name: rawTranslation('projects.content.hagira-store-server'),
    category: categories.back,
    image: server_01,
    live_url: '',
    code_url: 'https://github.com/KainNhantumbo/Hagira-Website-API',
  },
  {
    name: rawTranslation('projects.content.tasks-app-server'),
    category: categories.back,
    image: server_03,
    live_url: '',
    code_url: 'https://github.com/KainNhantumbo/Server-for-planner-app',
  },

];
