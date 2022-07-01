import * as React from 'react';
import Image, { StaticImageData } from 'next/image';
import { ProjectsContainer as Container } from '../styles/components/projects';
import { HiBadgeCheck, HiPlay, HiViewGrid } from 'react-icons/hi';

// image assets
import anime_blog from '../assets/anime-blog.jpeg';
import ecommerce_page from '../assets/ecommerce-page.jpeg';
import nava_notes from '../assets/nava-notes.jpg';
import planner_app from '../assets/planner-app.jpg';
import python_repo from '../assets/python-repo.png';
import the_calculator from '../assets/the-calculator.png';
import recipes_website from '../assets/recipes-website.png';
import server_01 from '../assets/server-01.png';
import server_02 from '../assets/server-02.png';
import server_03 from '../assets/server-03.png';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

interface ProjectsProps {
	name: string;
	category: string;
	image: StaticImageData;
	code_url: string;
	live_url: string;
}

enum Categories {
	back = 'Back-end',
	front = 'Front-end',
	full = 'Full-stack',
	train = 'Training',
}

const projects: ProjectsProps[] = [
	{
		name: 'Notes Application made with React.JS',
		category: Categories.front,
		image: nava_notes,
		live_url: 'https://nava-notes-app.vercel.app',
		code_url:
			'https://github.com/KainNhantumbo/Notes-App-made-with-React.js-and-Sass',
	},
	{
		name: 'Contacts and Tasks Application made with Javascript, React.JS and Node.JS + Express.JS + Mongo DB on the Back-end',
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
		code_url: '',
	},
	{
		name: 'Hagira E-commerce Website made using Javascript, React.JS and Node.JS + Express.JS + Mongo DB on the Back-end',
		category: Categories.full,
		image: server_01,
		live_url: '',
		code_url: 'https://github.com/KainNhantumbo/Hagira-Brands-Store',
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
		code_url: '',
	},
	{
		name: 'Repository with Python training projects, exercises and mini-games',
		category: Categories.train,
		image: python_repo,
		live_url: '',
		code_url: '',
	},
	{
		name: 'Multi-functions Calculator, Javascript + HTML5 + SASS',
		category: Categories.front,
		image: the_calculator,
		live_url: 'https://kainnhantumbo.github.io/The-Calculator',
		code_url: '',
	},
	{
		name: 'Ecommerce Landing Page, HTML5 + CSS + SASS',
		category: Categories.train,
		image: ecommerce_page,
		live_url:
			'https://kainnhantumbo.github.io/Website-Theme-Marketplace-E-Commerse-Landing-Page',
		code_url: '',
	},
];

export default function Projects(): JSX.Element {
	return (
		<Container>
			<h2>
				<HiViewGrid />
				<span>My Projects and Works</span>
			</h2>
			<section className='cards-container'>
				<h3 className='sub-title'>
					<HiBadgeCheck />
					<span>Front-end and Full-Stack Projects</span>
				</h3>
				<section className='cards-wrapper'>
					{projects.map((project, index) => {
						return (
							<section className='card' key={index}>
								<div className='top'>
									<Image
										src={project.image}
										placeholder={'blur'}
										width={280}
										height={210}
										objectFit={'cover'}
										style={{ borderRadius: 10 }}
									/>
									<h4>{project.category}</h4>
								</div>
								<div className='bottom'>
									<div className='details'>
										<h3>{project.name}</h3>
									</div>
									<div className='actions'>
										{project.live_url.length > 5 ? (
											<a
												href={project.live_url}
												target={'_blank'}
												rel={'noreferrer noopener'}
											>
												<HiPlay />
												<span>Live Demo</span>
											</a>
										) : null}
										<a
											href={project.code_url}
											target={'_blank'}
											rel={'noreferrer noopener'}
										>
											<FaGithub />
											<span>Github Repository</span>
										</a>
									</div>
								</div>
							</section>
						);
					})}
				</section>
			</section>
		</Container>
	);
}
