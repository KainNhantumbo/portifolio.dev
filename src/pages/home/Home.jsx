import { Container } from './index';
import author from '../../assets/img/author.jpg';
import { DiGithubFull } from 'react-icons/di';
import { FaCode } from 'react-icons/fa';

const Home = () => {
	const media_links = [
		{
			name: 'Github',
			icon: <DiGithubFull />,
			link: 'https://github.com/KainNhantumbo',
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
					<p>sdfsdf</p>
				</section>
			</section>

			<Footer />
		</Container>
	);
};

export default Home;
