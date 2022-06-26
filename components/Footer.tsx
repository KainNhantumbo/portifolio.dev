import { FooterContainer as Container } from '../styles/components/footer';
import { FC } from 'react';
import { FaGithub, FaWhatsapp } from 'react-icons/fa';
import { ImLinkedin2 } from 'react-icons/im';

interface FooterLinks {
	name: string;
	icon: JSX.Element;
	link: string;
}

const Footer: FC = ({}): JSX.Element => {
	const media_links: FooterLinks[] = [
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
			link: 'https://www.linkedin.com/in/kain-nhantumbo-aa380317a/',
		},
	];

	return (
		<Container>
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
		</Container>
	);
};

export default Footer;
