import { FC } from 'react';
import { BiSun, BiUpArrowAlt } from 'react-icons/bi';
import { useAppContext } from '../context/AppContext';
import { AppContainer as Container } from '../styles/app';
import { motion } from 'framer-motion';

const PageLayout: FC = (): JSX.Element => {
	const { themeSwitcher, slidePageUp } = useAppContext();
	return (
		<Container>
			<section className='fluent-buttons'>
				<div>
					<motion.button
						whileTap={{ scale: 0.7 }}
						transition={{ type: 'spring', duration: 0.5 }}
						title='Change Theme'
						onClick={themeSwitcher}
					>
						<BiSun />
					</motion.button>
					<motion.button
						title='Go to Top'
						onClick={slidePageUp}
						whileTap={{ scale: 0.7 }}
						transition={{ type: 'spring', duration: 0.5 }}
					>
						<BiUpArrowAlt />
					</motion.button>
				</div>
			</section>
		</Container>
	);
};

export default PageLayout;
