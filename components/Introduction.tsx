import { BiRightArrowCircle } from 'react-icons/bi';
import { HiSparkles } from 'react-icons/hi';
import { motion } from 'framer-motion';
import Image from 'next/image';
import intro_background from '../assets/intro-background.jpg';
import { IntroductionContainer as Container } from '../styles/components/introduction';

export default function Introduction(): JSX.Element {
	return (
		<Container>
			<div className='intro-background'>
				<Image
					src={intro_background}
					style={{ borderRadius: 20 }}
					height={600}
					layout={'fixed'}
					objectFit={'cover'}
					placeholder={'blur'}
				/>
			</div>
			<div className='intro'>
				<motion.h3
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					transition={{ delay: 0.5 }}
					className='placeholder'
				>
					<HiSparkles />
					<span>Welcome to my portifolio :)</span>
				</motion.h3>
				<h1>Hello, I am Kain Nhantumbo!</h1>
				<h3>A MERN Stack web developer.</h3>
				<p>
					To build my projects, I work with Javascript, Typescript and Python as
					main programming languages.
				</p>
				<motion.button
					whileTap={{ scale: 0.9 }}
					whileHover={{ scale: 1.05 }}
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					transition={{ delay: 0.6 }}
					onClick={() => {
						window.scroll({
							top: 620,
							left: 0,
							behavior: 'smooth',
						});
					}}
				>
					<BiRightArrowCircle />
					<span>Explore more</span>
				</motion.button>
			</div>
		</Container>
	);
}
