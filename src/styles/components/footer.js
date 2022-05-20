import styled from 'styled-components';
import { colors } from '../colors';

export const FooterContainer = styled.footer`
	width: 100%;
	padding-top: 5px;
	margin-top: 20px;
	backdrop-filter: blur(10px);
	background: rgba(${colors.backgroundAlt}, 0.3);
	box-shadow: 0 0 10px rgba(${colors.primary}, 0.5);

	@keyframes text-slider {
		0% {
			color: rgb(${colors.text});
		}
		25% {
			color: rgb(${colors.font});
		}
		50% {
			color: rgb(0,0,0);
		}
		75% {
			color: rgb(${colors.font});
		}
		100% {
			color: rgb(${colors.text});
		}
	}

	h3 {
		text-align: center;
		line-height: 2rem;
		animation: text-slider 5s ease forwards infinite;
	}

	ul {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: row;
		gap: 10px;

		a {
			display: grid;
			place-content: center;
			place-items: center;
			background: rgba(${colors.background}, 0.5);
			border-radius: 5px;
			padding: 10px;

			:hover {
				color: rgb(${colors.secondary});
				transition: all 200ms ease;

				svg {
					color: rgb(${colors.font});
					transition: all 200ms ease;
				}
			}
		}
		svg {
			width: 20px;
			height: 20px;
			color: rgb(${colors.primary});
		}
	}

	p {
		text-align: center;
		padding: 10px;
		line-height: 1.4rem;
		animation: text-slider 5s ease forwards infinite;
	}
`;
