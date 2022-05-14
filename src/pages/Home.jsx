import { Container } from '../styles/home';
import author from '../assets/img/author.jpg';
import { Link } from 'react-router-dom';
import {
	SiVisualstudiocode,
	SiStyledcomponents,
	BiMailSend,
	SiExpress,
	FaCode,
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
} from 'react-icons/all';
import Footer from '../components/Footer';

const Home = () => {
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
					<h1>Hi, I am Kain Nhantumbo!</h1>
					<h2>
						A <span>javascript</span> MERN Stack web developer.
					</h2>
				</div>
				<div>
					<p>
						I am very interested in opportunites to work with the latest
						technologies on challenging projects that would push my skills to
						the end. I like programming and I am specially ambitious on the kind
						of projects that solves problems, so if you have a request or
						question don't hesitate to send me an e-mail using the button below
						or the links on the footer.
					</p>
				</div>

				<button>
					<BiMailSend />
					<Link to={'/contact'}>
						<span>Let's work together!</span>
					</Link>
				</button>
			</section>

			<section className='middle-container'>
				<section className='about'>
					<p>
						<strong>
							(...) and because I understand that showing is sometimes better
							than talking, here are some of my personal projects that I have
							been working on these days. To see all projects, visit my{' '}
							<a
								href='https://github.com/KainNhantumbo?tab=repositories'
								target={'_blank'}
								rel={'noreferrer noopener'}
							>
								github profile
							</a>
							.
						</strong>
					</p>
				</section>
				<section className='projects'>
					<div className='project'>
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
						</div>
						<div>
							<a
								href='https://github.com/KainNhantumbo/Hagira-Website-API'
								target={'_blank'}
								rel={'noreferrer noopener'}
							>
								See the code
							</a>
						</div>
					</div>
					<div className='project'>
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
						<a
							href='https://github.com/KainNhantumbo/Hagira-Brands-Store'
							target={'_blank'}
							rel={'noreferrer noopener'}
						>
							See the code
						</a>
					</div>
					<div className='project'>
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
						</div>
						<div>
							<a
								href='https://nava-notes-app.vercel.app'
								target={'_blank'}
								rel={'noreferrer noopener'}
							>
								See deployed version
							</a>
							<a
								href='https://github.com/KainNhantumbo/Notes-App-made-with-React.js-and-Sass'
								target={'_blank'}
								rel={'noreferrer noopener'}
							>
								See the code
							</a>
						</div>
					</div>

					<div className='project'>
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
						</div>
						<div>
							<a
								href='https://github.com/KainNhantumbo/Planner-App'
								target={'_blank'}
								rel={'noreferrer noopener'}
							>
								See the code
							</a>
						</div>
					</div>

					<div className='project'>
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
						</div>
						<div>
							<a
								href='https://github.com/KainNhantumbo/Server-for-planner-app'
								target={'_blank'}
								rel={'noreferrer noopener'}
							>
								See the code
							</a>
						</div>
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
						<SiExpress />
						<span>Express.JS</span>
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
						<DiMarkdown />
						<span>Markdown</span>
					</div>
					<div>
						<SiStyledcomponents />
						<span>Styled Components</span>
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
