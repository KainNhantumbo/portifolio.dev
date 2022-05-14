import { FooterContainer } from '../styles/components/footer';
import { FaWhatsapp, FaGithub } from 'react-icons/fa';
import { ImLinkedin2 } from 'react-icons/all';

const Footer = () => {
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
			link: 'https://www.linkedin.com/in/kain-nhantumbo-aa380317a/',
		},
	];
	return (
		<FooterContainer>
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
		</FooterContainer>
	);
};

export default Footer;
