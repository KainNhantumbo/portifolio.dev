import { AboutContainer as Container } from '../styles/components/About';
import * as React from 'react';
import { BiBadge } from 'react-icons/bi';
import { HiCheckCircle, HiCode } from 'react-icons/hi';

const About: React.FC = (): JSX.Element => {
	return (
		<Container>
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
				<div className='card'>
					<HiCheckCircle />
					<h4>Experience</h4>
					<h3>
						<span>1+ year of coding</span>
					</h3>
				</div>

				<div className='card'>
					<HiCode />
					<h4>Projects</h4>
					<h3>
						<span>20+ github open projects</span>
					</h3>
				</div>
			</section>
		</Container>
	);
};

export default About;
