import { ConfirmModalContainer as Container } from '../styles/components/confirm-modal';
import { FC } from 'react';
import { FaTimesCircle } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
	prompt_title: string;
	prompt_message: string;
	closeModal: React.Dispatch<React.SetStateAction<boolean>>;
	active: boolean;
}

export const ConfirmDialog: FC<Props> = (props): JSX.Element => {
	return (
		<AnimatePresence>
			{props.active && (
				<Container onClick={(e) => props.closeModal(false)}>
					<motion.section
						className='dialog-modal'
						onClick={(e) => e.stopPropagation()}
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{
							opacity: 0,
							scale: 0,
							transition: { duration: 0.3 },
						}}
					>
						<div className='dialog-prompt'>
							<div className='prompt-info'>
								<span className='prompt-title'>{props.prompt_title}</span>
								<p className='prompt-message'>{props.prompt_message}</p>
							</div>
							<div className='prompt-actions'>
								<motion.button
									whileTap={{ scale: 0.8 }}
									whileHover={{ scale: 1.1 }}
									className='prompt-cancel'
									onClick={(e) => props.closeModal(false)}
								>
									<FaTimesCircle />
									<span>Close</span>
								</motion.button>
							</div>
						</div>
					</motion.section>
				</Container>
			)}
		</AnimatePresence>
	);
};
