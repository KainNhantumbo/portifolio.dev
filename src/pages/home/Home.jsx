import { Container } from './index';
import author from '../../assets/img/author.jpg';
import { BsWhatsapp } from 'react-icons/bs';
import {
	DiCodeBadge,
	DiCss3,
	DiCss3Full,
	DiGit,
	DiGithub,
	DiGithubAlt,
	DiGithubBadge,
	DiGithubFull,
	DiHtml5,
	DiJavascript,
	DiJavascript1,
	DiJsBadge,
	DiMarkdown,
	DiMongodb,
	DiNodejsSmall,
	DiReact,
	DiSass,
	DiVisualstudio,
} from 'react-icons/di';
import {
	FaCode,
	FaGithub,
	FaLinkedin,
	FaLinkedinIn,
	FaWhatsapp,
} from 'react-icons/fa';

const Home = () => {
	const media_links = [
		{
			name: 'Github',
			icon: <FaGithub />,
			link: 'https://github.com/KainNhantumbo',
		},
		{
			name: 'Whatsapp',
			icon: <FaWhatsapp />,
			link: 'https://wa.me/258871002535',
		},
	];

	const Footer = () => (
		<footer>
			<ul>
				{media_links.map((link, index) => {
					return (
						<li key={index}>
							<a href={link.link} target={'_blank'} rel={'noreferrer noopener'}>
								{link.icon}
							</a>
						</li>
					);
				})}
			</ul>
			<p>
				<strong>Copyrght &copy; 2022 Kain Nhantumbo </strong>
			</p>
		</footer>
	);

	return (
		<Container>
			<section className='upper-container'>
				<figure>
					<img src={author} alt='author' />
					<figcaption>
						<FaCode />
					</figcaption>
				</figure>

				<div className='intro'>
					<h1>
						<span>Hi</span> , I am Kain Nhantumbo!{' '}
					</h1>
					<h2>
						A <span>javascript</span> MERN Stack web developer.
					</h2>
				</div>

				<a
					href='mailto:nhantumbok@gmail.com'
					target={'_blank'}
					rel={'noreferrer noopener'}
				>
					<button>Let's work togheter!</button>
				</a>
			</section>

			<section className='middle-container'>
				<section className='about'>
					<p>
						<strong>
							Here are some of my personal projects that I have been working on
							these days...
						</strong>
					</p>
				</section>
				<section className='projects'>
					<div>
						<h2>
							<strong>Web Ecommerce Rest API</strong>
						</h2>
						<h3>
							<strong>Tools:</strong>
						</h3>
						<ul>
							<li>Node.js</li>
							<li>Express.js Framework</li>
							<li>Mongo DB</li>
						</ul>
						<a href='#'>See the code</a>
					</div>
				</section>
				<section className='about'>
					<p>
						<strong>Tecnologies that I use everyday</strong>
					</p>
				</section>
				<section className='tecnologies'>
					<div>
						<DiJsBadge />
						<span>Javascript</span>
					</div>
					<div>
						<DiReact />
						<span>React.JS</span>
					</div>
					<div>
						<DiNodejsSmall />
						<span>Node.JS</span>
					</div>
					<div>
						<DiMongodb />
						<span>Mongo DB</span>
					</div>
					<div>
						<DiGit />
						<span>Git</span>
					</div>
					<div>
						<DiGithub />
						<span>Github</span>
					</div>
					<div>
						<DiSass />
						<span>Sass</span>
					</div>
					<div>
						<DiCss3 />
						<span>CSS 3</span>
					</div>
					<div>
						<DiHtml5 />
						<span>HTML5</span>
					</div>
					<div>
						<DiCodeBadge />
						<span>Styled Components</span>
					</div>
					<div>
						<DiMarkdown />
						<span>Markdown</span>
					</div>
					<div>
						<DiVisualstudio />
						<span>Visual Studio Code</span>
					</div>
				</section>
			</section>

			<Footer />
		</Container>
	);
};

export default Home;
