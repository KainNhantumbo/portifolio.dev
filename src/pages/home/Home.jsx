import { Container } from './index';
import computercoffee from '../../assets/img/computer-coffee.png';
import author from '../../assets/img/author.jpg';
import { DiGithubBadge } from 'react-icons/di';
import { FaCode } from 'react-icons/fa';

const Home = () => {
	const media_links = [
		{
			name: 'Github',
			icon: <DiGithubBadge />,
			link: 'https://github.com/KainNhantumbo',
		},
		{
			name: 'Github',
			icon: <DiGithubBadge />,
			link: 'https://github.com/KainNhantumbo',
		},
	];

	return (
		<Container>
			

			<section className='upper-container'>
				<div className='intro'>
					<h1>
						<span>Hi</span> , I am Kain Nhantumbo!{' '}
					</h1>
					<h2>
						A <span>javascript</span> MERN Stack web developer.
					</h2>
				</div>
				<div className='image'>
					<img src={computercoffee} alt='computer-coffee__static' />
				</div>
			</section>
			<section className='middle-container'>
				<figure>
					<img src={author} alt='author' />
					<figcaption>
						<FaCode />
					</figcaption>
				</figure>
				<section className='about'>
					<p>sdfsdf</p>
				</section>
			</section>
			<footer className='social-media'>
				<ul>
					{media_links.map((link, index) => {
						return (
							<li key={index}>
								<a
									href={link.link}
									target={'_blank'}
									rel={'noreferrer noopener'}
								>
									{link.icon}
								</a>
							</li>
						);
					})}
				</ul>
			</footer>
		</Container>
	);
};

export default Home;
