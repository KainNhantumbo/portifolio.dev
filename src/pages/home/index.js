import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Container = styled.main`
	width: 100%;
	min-height: 100vh;
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	gap: 20px;
	position: relative;

	button {
		@keyframes slide {
			from {
				transform: translateY(-60px);
				opacity: 0;
			}
			to {
				transform: translateY(0);
				opacity: 1;
			}
		}
		animation: slide ease 500ms forwards;
		border: none;
		border-style: none;
		outline: none;
		font-size: 1.2rem;
		background: rgb(${colors.primary});
		color: rgb(${colors.text});
		border-radius: 5px;
		padding: 5px 10px;
		box-shadow: 0 0 2px rgb(${colors.primary});

		:hover {
			box-shadow: 0 0 10px rgb(${colors.primary});
			transition: all 200ms ease;
		}
	}

	.upper-container {
		font-family: 'Bree Serif', serif;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-flow: column nowrap;
		gap: 20px;
		padding-top: 20px;

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
				color: rgb(${colors.font});
				svg {
					width: 30px;
					height: 30px;
				}
			}
		}

		.intro {
			text-align: center;

			h1 {
				line-height: 2rem;
				color: rgb(${colors.primary});
			}

			h2 {
				font-weight: normal;
				font-size: 1.2rem;
				letter-spacing: 0.03rem;

				span {
					color: rgb(${colors.primary});
				}
			}
		}
	}

	.middle-container {
		.about {
			padding-top: 10px;
			p {
				background: rgba(${colors.backgroundAlt}, 0.2);
				color: rgb(${colors.font});
				text-align: center;
				padding: 20px 0;
				line-height: 1.6rem;
			}
		}
	}

	footer {
		@keyframes slide {
			from {
				transform: translateY(60px);
			}
			to {
				transform: translateY(0);
			}
		}

		padding: 5px 2px;
		backdrop-filter: blur(10px);
		background: rgba(${colors.backgroundAlt}, 0.2);
		box-shadow: 0 0 5px rgba(${colors.font}, 1);
		animation: slide ease-out 500ms forwards;

		ul {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: row;
			gap: 5px;

			li {
				display: grid;
				place-content: center;
				place-items: center;

				:hover {
					color: rgb(${colors.secondary});
					transition: all 200ms ease;
				}

				svg {
					width: 50px;
					height: 50px;
					color: rgb(${colors.primary});
					:hover {
						color: rgb(${colors.font});
						transition: all 200ms ease;
					}
				}
			}
		}
	}
`;
