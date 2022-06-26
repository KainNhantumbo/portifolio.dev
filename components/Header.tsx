import { FC, useState, useEffect } from 'react';
import { FaBars, FaCoffee } from 'react-icons/fa';
import { HeaderContainer as Container } from '../styles/components/header';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BiPlanet } from 'react-icons/bi';

const Header: FC = (): JSX.Element => {
	const router = useRouter();
	const [isMenu, setIsMenu] = useState(false);

	const toggleMenu = (): void => {
		setIsMenu(!isMenu);
	};

	const changeWidth = () => {
		if (window.innerWidth > 580) {
			setIsMenu(true);
		} else {
			setIsMenu(false);
		}
	};

	useEffect(() => {
		changeWidth();
		window.addEventListener('resize', changeWidth);
		return () => {
			window.removeEventListener('resize', changeWidth);
		};
	}, []);

	return (
		<Container>
			<h2 className='brand' onClick={() => router.push('#')}>
				<BiPlanet />
				<span>Portifolio</span>
			</h2>
			<motion.button
				whileTap={{ scale: 0.5 }}
				className='menu-btn'
				onClick={toggleMenu}
			>
				<FaBars />
			</motion.button>
			<nav className='navbar'>
				<ul style={{ display: isMenu ? 'flex' : 'none' }}>
					<Link href={'#home'}>
						<motion.li
							whileTap={{ scale: 0.7 }}
							whileHover={{ scale: 1.05, y: 1 }}
						>
							<span>Home</span>
						</motion.li>
					</Link>
					
					<Link href={'#projects'}>
						<motion.li
							whileTap={{ scale: 0.7 }}
							whileHover={{ scale: 1.05, y: 1 }}
						>
							<span>Projects</span>
						</motion.li>
					</Link>

					<Link href={'#contact'}>
						<motion.li
							whileTap={{ scale: 0.7 }}
							whileHover={{ scale: 1.05, y: 1 }}
						>
							<span>Contact</span>
						</motion.li>
					</Link>

					<Link href={'#about'}>
						<motion.li
							whileTap={{ scale: 0.7 }}
							whileHover={{ scale: 1.05, y: 1 }}
						>
							<span>About</span>
						</motion.li>
					</Link>
				</ul>
			</nav>
		</Container>
	);
};

export default Header;
