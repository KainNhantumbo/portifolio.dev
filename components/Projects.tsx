import * as React from 'react';
import Image, { StaticImageData } from 'next/image';
import { ProjectsContainer as Container } from '../styles/components/projects';
import { HiBadgeCheck, HiLink, HiPaperAirplane, HiPlay, HiViewGrid } from 'react-icons/hi';

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
}

const projects: ProjectsProps[] = [
	{
		name: 'Notes application',
		category: Categories.front,
		image: nava_notes,
		live_url: 'https://nava-notes-app.vercel.app',
		code_url:
			'https://github.com/KainNhantumbo/Notes-App-made-with-React.js-and-Sass',
	},
];

export default function Projects(): JSX.Element {
	return (
		<Container>
			<h2>
				<HiViewGrid />
				<span>My Projects, Apps and Websites</span>
			</h2>
			<section className='cards-container'>
				<h3 className='sub-title'>
					<HiBadgeCheck />
					<span>Front-end and Full-Stack Projects</span>
				</h3>
				<section className='cards-wrapper'>
					{projects.map((project) => {
						return (
							<section className='card'>
								<div className='top'>
									<Image src={project.image} placeholder={'blur'} />
								</div>
								<div className='bottom'>
									<h3>{project.name}</h3>
									<h4>
										<span>{project.category}</span>
									</h4>
									<div className='actions'>
										<a
											href={project.live_url}
											target={'_blank'}
											rel={'noreferrer noopener'}
										>
                      <HiPlay/>
											<span>Live Demo</span>
										</a>
										<a
											href={project.code_url}
											target={'_blank'}
											rel={'noreferrer noopener'}
										>
                      <FaGithub/>
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
