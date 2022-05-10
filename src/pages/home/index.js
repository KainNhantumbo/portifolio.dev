import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Container = styled.main`
	width: 100%;
	min-height: 100%;
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	gap: 20px;
	position: relative;

	.social-media {
		@keyframes slide {
			from {
				transform: translateY(60px);
			}
			to {
				transform: translateY(0);
			}
		}

		position: absolute;
		bottom: 20px;
		right: 10px;
		width: fit-content;
		height: fit-content;
		padding: 5px 2px;
		backdrop-filter: blur(10px);
		border-radius: 10px;
		background: rgba(${colors.backgroundAlt}, 0.2);
		box-shadow: 0 0 5px rgba(${colors.font}, 1);
		animation: slide ease-out 500ms forwards;

		ul {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			gap: 5px;

			li {
				background: rgba(${colors.background}, 0.2);
				border-radius: 50%;
				width: 32px;
				height: 32px;
				display: grid;
				margin: 2px;
				place-content: center;
				place-items: center;

				:hover {
					color: rgb(${colors.font});
					transition: all 200ms ease;
				}

				svg {
					width: 30px;
					height: 30px;
				}
			}
		}
	}

	.upper-container {
		font-family: 'Bree Serif', serif;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-flow: row wrap-reverse;
		gap: 20px;
		padding-top: 10px;

		.intro {
			text-align: center;

			h1 {
				line-height: 2rem;
        color: rgb(${colors.primary});
				span {
					border-bottom: 4px solid rgb(${colors.secondary});
				}
			}

			h2 {
				font-weight: normal;
				font-size: 1.2rem;
				letter-spacing: 0.03rem;

				span {
					color: rgb(255, 235, 59);
				}
			}
		}

		.image {
			img {
				width: 300px;
			}
		}
	}

	.middle-container {
		figure {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			gap: 10px;

			img {
				border-radius: 50%;
				width: 200px;
				position: relative;
				border: 5px solid rgb(${colors.secondary});
			}

			figcaption {
				color: rgb(${colors.text});
				svg {
					width: 30px;
					height: 30px;
				}
			}
		}

		.about {
			padding-top: 10px;
			p {
				background: rgba(${colors.backgroundAlt}, 0.2);
				color: rgb(${colors.text});
				text-align: center;
				padding: 20px 0;
				line-height: 1.6rem;
			}
		}
	}
`;
