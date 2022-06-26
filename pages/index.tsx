import type { NextPage } from 'next';
import HeadPage from '../components/Head';
import { HomeContainer as Container } from '../styles/home';
import Header from '../components/Header';
import PageLayout from '../components/PageLayout';
import Footer from '../components/Footer';
import About from '../components/About';
import {
	SiCss3,
	SiExpress,
	SiGit,
	SiGithub,
	SiHtml5,
	SiJavascript,
	SiMarkdown,
	SiMongodb,
	SiNodedotjs,
	SiPostgresql,
	SiReact,
	SiStyledcomponents,
	SiTypescript,
} from 'react-icons/si';
import { HiAcademicCap, HiBadgeCheck } from 'react-icons/hi';
import { FaReact } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface AbilitiesProps {
	technology: string;
	icon: JSX.Element;
	level: string;
}

enum Levels {
	ex = 'Experienced',
	inter = 'Intermediate',
	med = 'Medium',
	bas = 'Basic',
}

const Home: NextPage = () => {
	const frontEnd_abilities: AbilitiesProps[] = [
		{
			technology: 'Typescript',
			icon: <SiTypescript />,
			level: Levels.inter,
		},
		{
			technology: 'Javascript',
			icon: <SiJavascript />,
			level: Levels.ex,
		},
		{
			technology: 'React',
			icon: <FaReact />,
			level: Levels.ex,
		},
		{
			technology: 'React Native',
			icon: <SiReact />,
			level: Levels.inter,
		},
		{
			technology: 'Next.JS',
			icon: <SiReact />,
			level: Levels.inter,
		},

		{
			technology: 'SASS & CSS',
			icon: <SiCss3 />,
			level: Levels.ex,
		},
		{
			technology: 'HTML5',
			icon: <SiHtml5 />,
			level: Levels.ex,
		},
	];

	const backend_abilities: AbilitiesProps[] = [
		{
			technology: 'Typescript',
			icon: <SiTypescript />,
			level: Levels.inter,
		},
		{
			technology: 'Javascript',
			icon: <SiJavascript />,
			level: Levels.ex,
		},
		{
			technology: 'Node.JS',
			icon: <SiNodedotjs />,
			level: Levels.inter,
		},
		{
			technology: 'Express.JS',
			icon: <SiExpress />,
			level: Levels.inter,
		},
		{
			technology: 'Mongo DB',
			icon: <SiMongodb />,
			level: Levels.inter,
		},
		{
			technology: 'PostgreSQL',
			icon: <SiPostgresql />,
			level: Levels.bas,
		},
	];

	const tools: AbilitiesProps[] = [
		{
			technology: 'Git',
			icon: <SiGit />,
			level: Levels.inter,
		},
		{
			technology: 'Markdown',
			icon: <SiMarkdown />,
			level: Levels.inter,
		},
		{
			technology: 'Github',
			icon: <SiGithub />,
			level: Levels.med,
		},
	];

	return (
		<>
			<HeadPage />
			<Header />
			<PageLayout />
			<Container>
				<section className='abilities'>
					<h2>
						<HiAcademicCap />
						<span>My Experience and Skills</span>
					</h2>
					<section className='frontend'>
						<h3 className='sub-title'>
							<HiBadgeCheck />
							<span>Frontend Development</span>
						</h3>
						<section className='list-items'>
							{frontEnd_abilities.map(({ technology, icon, level }, index) => {
								return (
									<div key={index} className='item'>
										{icon}
										<h3>{technology}</h3>
										<span>{level}</span>
									</div>
								);
							})}
						</section>
					</section>
					<section className='backend'>
						<h3 className='sub-title'>
							<HiBadgeCheck />
							<span>Backend Development</span>
						</h3>
						<section className='list-items'>
							{backend_abilities.map(({ technology, icon, level }, index) => {
								return (
									<div key={index} className='item'>
										{icon}
										<h3>{technology}</h3>
										<span>{level}</span>
									</div>
								);
							})}
						</section>
					</section>
					<section className='other'>
						<h3 className='sub-title'>
							<HiBadgeCheck />
							<span>Development Tools</span>
						</h3>
						<section className='list-items'>
							{tools.map(({ technology, icon, level }, index) => {
								return (
									<div key={index} className='item'>
										{icon}
										<h3>{technology}</h3>
										<span>{level}</span>
									</div>
								);
							})}
						</section>
					</section>
				</section>
				<About />
			</Container>
			<Footer />
		</>
	);
};

export default Home;
