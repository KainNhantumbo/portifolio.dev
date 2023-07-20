import { TProject } from '../@types';
import anime_blog from '../assets/anime-blog.jpeg';
import ecommerce_page from '../assets/ecommerce-page.jpeg';
import nava_notes from '../assets/nava-notes.jpg';
import planner_app from '../assets/planner-app.jpg';
import the_calculator from '../assets/the-calculator.png';
import recipes_website from '../assets/recipes-website.png';
import hagira_ecommerce from '../assets/hagira-ecommerce.jpeg';
import server_01 from '../assets/server-01.png';
import server_03 from '../assets/server-03.png';
import bug_tracker_app from '../assets/bug-tracker-app.jpeg';
import blog_shot from '../assets/blog-shot.jpeg';
import bug_tracker_server from '../assets/bug-tracker-server.png';
import url_shortner_app from '../assets/url-shortner-app.jpeg';
import { rawTranslation } from '../internationalization/init';

enum Categories {
  back = 'Back-end',
  front = 'Front-end',
  full = 'Full-stack',
  train = 'Training',
}

export const projects: TProject[] = [
  {
    name: rawTranslation('projects.content.bug-tracker'),
    category: Categories.full,
    image: bug_tracker_app,
    code_url: 'https://github.com/KainNhantumbo/bug-tracker',
    live_url: 'https://bug-tracker-kainnhantumbo.vercel.app',
  },
  {
    name: rawTranslation('projects.content.url-shortner'),
    category: Categories.full,
    image: url_shortner_app,
    code_url: 'https://github.com/KainNhantumbo/url-shortner-app',
    live_url: 'https://url-shortner-app-six.vercel.app',
  },
  {
    name: rawTranslation('projects.content.programming-blog'),
    category: Categories.front,
    image: blog_shot,
    code_url: 'https://github.com/KainNhantumbo/publish-it.programming',
    live_url: 'https://publish-it-programming.vercel.app',
  },
  {
    name: rawTranslation('projects.content.notes-app'),
    category: Categories.front,
    image: nava_notes,
    live_url: 'https://nava-notes-app.vercel.app',
    code_url: 'https://github.com/KainNhantumbo/Nava-Notes-App',
  },
  {
    name: rawTranslation('projects.content.tasks-app'),
    category: Categories.full,
    image: planner_app,
    live_url: '',
    code_url: 'https://github.com/KainNhantumbo/Planner-App',
  },
  {
    name: rawTranslation('projects.content.recipes-website'),
    category: Categories.full,
    image: recipes_website,
    live_url: '',
    code_url: 'https://github.com/KainNhantumbo/food-and-recipes-website',
  },
  {
    name: rawTranslation('projects.content.hagira-store'),
    category: Categories.full,
    image: hagira_ecommerce,
    live_url: '',
    code_url: 'https://github.com/KainNhantumbo/Hagira-Brands-Store',
  },
  {
    name: rawTranslation('projects.content.bug-tracker-server'),
    category: Categories.back,
    image: bug_tracker_server,
    code_url: 'https://github.com/KainNhantumbo/bug-tracker-api',
    live_url: '',
  },
  {
    name: rawTranslation('projects.content.hagira-store-server'),
    category: Categories.back,
    image: server_01,
    live_url: '',
    code_url: 'https://github.com/KainNhantumbo/Hagira-Website-API',
  },
  {
    name: rawTranslation('projects.content.tasks-app-server'),
    category: Categories.back,
    image: server_03,
    live_url: '',
    code_url: 'https://github.com/KainNhantumbo/Server-for-planner-app',
  },
  {
    name: rawTranslation('projects.content.anime-website'),
    category: Categories.front,
    image: anime_blog,
    live_url:
      'https://kainnhantumbo.github.io/Static-Anime-Blog--made-with-HTML--CSS-and-Javascript',
    code_url:
      'https://github.com/KainNhantumbo/Static-Anime-Blog--made-with-HTML--CSS-and-Javascript',
  },
  {
    name: rawTranslation('projects.content.calculator'),
    category: Categories.front,
    image: the_calculator,
    live_url: 'https://kainnhantumbo.github.io/The-Calculator',
    code_url: 'https://github.com/KainNhantumbo/The-Calculator',
  },
  {
    name: rawTranslation('projects.content.ecommerce-page'),
    category: Categories.train,
    image: ecommerce_page,
    live_url:
      'https://kainnhantumbo.github.io/Website-Theme-Marketplace-E-Commerse-Landing-Page',
    code_url:
      'https://github.com/KainNhantumbo/Website-Theme-Marketplace-E-Commerse-Landing-Page',
  },
];
