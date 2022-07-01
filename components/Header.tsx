import { FC, useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { HeaderContainer as Container } from '../styles/components/header';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { motion } from 'framer-motion';
import author from '../assets/author.jpg';
import Image from 'next/image';

const Header: FC = (): JSX.Element => {
	const router = useRouter();
	const [isMenu, setIsMenu] = useState(false);

	const toggleMenu = (): void => {
		setIsMenu(!isMenu);
	};

	const changeWidth = () => {
		if (window.innerWidth > 600) {
			setIsMenu(true);
		} else {
			setIsMenu(false);
		}
	};

	// controls the wheel events
	const [deltaY, setDeltaY] = useState(-100);
	const hideMenu = (e: WheelEvent): void => {
		setDeltaY(e.deltaY);
	};

	useEffect(() => {
		changeWidth();
		window.addEventListener('resize', changeWidth);
		window.addEventListener('wheel', hideMenu);

		return () => {
			window.removeEventListener('resize', changeWidth);
			window.removeEventListener('wheel', hideMenu);
		};
	}, []);

	return (
		<Container>
			<motion.div
				className='core'
				animate={{ translateY: deltaY == 100 ? -65 : 0 }}
				transition={{ duration: 0.5 }}
			>
				<motion.h2 className='brand' onClick={() => router.push('#')}>
					<div className='image'>
						<Image
							src={author}
							width={40}
							height={40}
							placeholder={'blur'}
							style={{ borderRadius: 20 }}
						/>
					</div>
					<span>My Workspace</span>
				</motion.h2>
				<motion.button
					whileTap={{ scale: 0.5 }}
					className='menu-btn'
					onClick={toggleMenu}
				>
					<FaBars />
				</motion.button>
				<nav className='navbar'>
					<motion.ul
						animate={{ translateY: isMenu ? 0 : -50 }}
						style={{ display: isMenu ? 'flex' : 'none' }}
					>
						<Link href={'#home'}>
							<motion.li
								whileTap={{ scale: 0.7 }}
								whileHover={{ scale: 1.05, y: 1 }}
							>
								<span>Home</span>
							</motion.li>
						</Link>
						<Link href={'#skills'}>
							<motion.li
								whileTap={{ scale: 0.7 }}
								whileHover={{ scale: 1.05, y: 1 }}
							>
								<span>Skills</span>
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
					</motion.ul>
				</nav>
			</motion.div>
		</Container>
	);
};

export default Header;
