import { AboutContainer as Container } from '../styles/components/About';
import * as React from 'react';
import { HiCode, HiViewGrid } from 'react-icons/hi';
import { SiAboutdotme } from 'react-icons/si';
import { motion } from 'framer-motion';

const About: React.FC = (): JSX.Element => {
	return (
		<Container>
			<h2>
				<SiAboutdotme />
				<span>About</span>
			</h2>
			<section className='experiences'>
				<p>
					I am very interested in opportunities to work with the latest
					technologies on challenging projects that would push my skills to the
					end. I like programming and I am specially ambitious on the kind of
					projects that solves problems, so if you have a request or question
					don't hesitate to send me an e-mail using the button below or the
					links on the footer.
				</p>
			</section>

			<section className='cards-container'>
				<motion.div className='card' whileHover={{ scale: 1.1 }}>
					<HiCode />
					<h4>Experience</h4>
					<span>1+ year of coding</span>
				</motion.div>

				<motion.div className='card' whileHover={{ scale: 1.1 }}>
					<HiViewGrid />
					<h4>Projects</h4>
					<span>20+ Github Projects</span>
				</motion.div>
			</section>
		</Container>
	);
};

export default About;
