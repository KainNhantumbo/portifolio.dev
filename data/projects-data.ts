import { IProject } from '../@types/interfaces';
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

enum Categories {
  back = 'Back-end',
  front = 'Front-end',
  full = 'Full-stack',
  train = 'Training',
}

export const projects: IProject[] = [
  {
    name: 'Bug Tracker App built with React.JS and Typescript',
    category: Categories.full,
    image: bug_tracker_app,
    code_url: 'https://github.com/KainNhantumbo/bug-tracker',
    live_url: 'https://bug-tracker-kainnhantumbo.vercel.app',
  },
  {
    name: 'Url Shortner App built with React.JS and Typescript',
    category: Categories.full,
    image: url_shortner_app,
    code_url: 'https://github.com/KainNhantumbo/url-shortner-app',
    live_url: 'https://url-shortner-app-six.vercel.app',
  },
  {
    name: 'My Blog built with Next.JS, Typescript and Markdown',
    category: Categories.front,
    image: blog_shot,
    code_url: 'https://github.com/KainNhantumbo/publish-it.programming',
    live_url: 'https://publish-it-programming.vercel.app',
  },
  {
    name: 'Notes App made with React.JS + Styled-Components + Sass',
    category: Categories.front,
    image: nava_notes,
    live_url: 'https://nava-notes-app.vercel.app',
    code_url: 'https://github.com/KainNhantumbo/Nava-Notes-App',
  },
  {
    name: 'Contacts and Tasks Application made with Javascript, React.JS and Node.JS + Express.JS + MongoDB on the Back-end',
    category: Categories.full,
    image: planner_app,
    live_url: '',
    code_url: 'https://github.com/KainNhantumbo/Planner-App',
  },
  {
    name: 'Recipes Website made using Typescript, Next.JS and Node.JS + Express.JS + Mongo DB on the Back-end',
    category: Categories.full,
    image: recipes_website,
    live_url: '',
    code_url: 'https://github.com/KainNhantumbo/food-and-recipes-website',
  },
  {
    name: 'Hagira E-commerce Website made using Javascript, React.JS and Node.JS + Express.JS + Mongo DB on the Back-end',
    category: Categories.full,
    image: hagira_ecommerce,
    live_url: '',
    code_url: 'https://github.com/KainNhantumbo/Hagira-Brands-Store',
  },
  {
    name: 'Bug Tracker Restfull API built with Typescript, Node.JS + Express.JS + MongoDB on the Back-end',
    category: Categories.back,
    image: bug_tracker_server,
    code_url: 'https://github.com/KainNhantumbo/bug-tracker-api',
    live_url: '',
  },
  {
    name: 'Server Restfull API for Hagira E-commerce Website, made with Javascript, Node.JS, Express.JS and Mongo DB',
    category: Categories.back,
    image: server_01,
    live_url: '',
    code_url: 'https://github.com/KainNhantumbo/Hagira-Website-API',
  },
  {
    name: 'Server Restfull API for Contacts and Tasks App, made with Javascript, Node.JS, Express.JS and Mongo DB',
    category: Categories.back,
    image: server_03,
    live_url: '',
    code_url: 'https://github.com/KainNhantumbo/Server-for-planner-app',
  },
  {
    name: 'Anime Blog, Javascript + HTML5 + CSS',
    category: Categories.front,
    image: anime_blog,
    live_url:
      'https://kainnhantumbo.github.io/Static-Anime-Blog--made-with-HTML--CSS-and-Javascript',
    code_url:
      'https://github.com/KainNhantumbo/Static-Anime-Blog--made-with-HTML--CSS-and-Javascript',
  },
  {
    name: 'Multi-functions Calculator, Javascript + HTML5 + SASS',
    category: Categories.front,
    image: the_calculator,
    live_url: 'https://kainnhantumbo.github.io/The-Calculator',
    code_url: 'https://github.com/KainNhantumbo/The-Calculator',
  },
  {
    name: 'Ecommerce Landing Page, HTML5 + CSS + SASS',
    category: Categories.train,
    image: ecommerce_page,
    live_url:
      'https://kainnhantumbo.github.io/Website-Theme-Marketplace-E-Commerse-Landing-Page',
    code_url:
      'https://github.com/KainNhantumbo/Website-Theme-Marketplace-E-Commerse-Landing-Page',
  },
];
