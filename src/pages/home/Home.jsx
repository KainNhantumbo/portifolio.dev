import { Container } from './index';
import author from '../../assets/img/author.jpg';
import {
	SiVisualstudiocode,
	SiStyledcomponents,
	ImLinkedin2,
	BiMailSend,
} from 'react-icons/all';
import {
	DiCss3,
	DiGit,
	DiGithub,
	DiHtml5,
	DiJsBadge,
	DiMarkdown,
	DiMongodb,
	DiNodejsSmall,
	DiReact,
	DiSass,
} from 'react-icons/di';
import { FaCode, FaGithub, FaWhatsapp } from 'react-icons/fa';

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
		{
			name: 'LinkedIn',
			icon: <ImLinkedin2 />,
			link: 'https://wa.me/258871002535',
		},
	];

	const Footer = () => (
		<footer>
			<h3>
				<strong>Find me on the web by:</strong>
			</h3>
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
				<strong>Copyright &copy; 2022 Kain Nhantumbo </strong>
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
				<div>
					<p>
						I am very interested in opportunites that push my skills to the end. I like
						programming and I am specially ambitious on the kind of projects that solves problems, so if you have any question don't hesitate to send me an
						e-mail using the button below or the links on the footer.
					</p>
				</div>

				<a
					href='mailto:nhantumbok@gmail.com'
					target={'_blank'}
					rel={'noreferrer noopener'}
				>
					<button>
						<BiMailSend />
						<span>Let's work together!</span>
					</button>
				</a>
			</section>

			<section className='middle-container'>
				<section className='about'>
					<p>
						<strong>
							(...) and because I understand that showing is sometimes better
							than talking, here are some of my personal projects that I have
							been working on these days...
						</strong>
					</p>
				</section>
				<section className='projects'>
					<div>
						<h2>
							<strong>Web E-commerce Rest API</strong>
						</h2>
						<h3>
							<strong>Main tools:</strong>
						</h3>
						<ul>
							<li>Node.js</li>
							<li>Express.js Framework</li>
							<li>Mongo DB</li>
						</ul>
						<a href='#'>See the code</a>
					</div>
					<div>
						<h2>
							<strong>Web E-commerce React App</strong>
						</h2>
						<h3>
							<strong>Main tools:</strong>
						</h3>
						<ul>
							<li>React.js</li>
							<li>Sass</li>
							<li>Styled Components</li>
						</ul>
						<a href='#'>See the code</a>
					</div>
					<div>
						<h2>
							<strong>Notes App</strong>
						</h2>
						<h3>
							<strong>Main tools:</strong>
						</h3>
						<ul>
							<li>React.js</li>
							<li>Sass</li>
							<li>Styled Components</li>
						</ul>
						<a href='#'>See the code</a>
					</div>
					<div>
						<h2>
							<strong>Contacts & Tasks App (Front End)</strong>
						</h2>
						<h3>
							<strong>Main tools:</strong>
						</h3>
						<ul>
							<li>React.js</li>
							<li>Sass</li>
							<li>Styled Components</li>
						</ul>
						<a href='#'>See the code</a>
					</div>
					<div>
						<h2>
							<strong>Contacts & Tasks App (BackEnd Rest API)</strong>
						</h2>
						<h3>
							<strong>Main tools:</strong>
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
						<strong>Technologies that I use everyday</strong>
					</p>
				</section>
				<section className='technologies'>
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
						<SiStyledcomponents />
						<span>Styled Components</span>
					</div>
					<div>
						<DiMarkdown />
						<span>Markdown</span>
					</div>
					<div>
						<SiVisualstudiocode />
						<span>Visual Studio Code</span>
					</div>
				</section>
			</section>

			<Footer />
		</Container>
	);
};

export default Home;
