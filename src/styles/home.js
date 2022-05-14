import styled from 'styled-components';
import { colors } from './colors';

export const Container = styled.main`
	width: 100%;
	min-height: 100vh;
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	gap: 20px;
	position: relative;

	@keyframes slide {
		from {
			transform: translateY(60px);
			opacity: 0;
		}
		to {
			transform: translateY(0);
			opacity: 1;
		}
	}

	button {
		animation: slide ease 500ms forwards;
		border: none;
		border-style: none;
		outline: none;
		font-size: 1.2rem;
		background: none;
		border: 2px solid rgb(${colors.primary});
		color: rgb(${colors.font});
		border-radius: 5px;
		padding: 5px 10px;
		box-shadow: 0 0 2px rgb(${colors.primary});
		position: relative;

		:hover {
			box-shadow: 0 0 10px rgb(${colors.shadows});
			color: rgb(${colors.text});
			background: rgb(${colors.primary});
			transition: all 200ms ease;
		}

		svg {
			position: absolute;
			top: 7px;
			left: 3px;
			width: 20px;
			height: 20px;
		}

		span {
			padding-left: 20px;
		}
	}

	.upper-container {
		font-family: 'Bree Serif', serif;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-flow: column nowrap;
		gap: 10px;
		line-height: 1.4rem;
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
				border: 5px solid rgba(${colors.font}, 0.5);
			}

			figcaption {
				color: rgb(${colors.font});
				svg {
					width: 30px;
					height: 30px;
				}
			}
		}

		p {
			color: rgb(${colors.font});
			text-align: center;
			padding: 20px 10px;
			line-height: 1.6rem;
			font-family: Montserrat, sans-serif;
			font-weight: 500;
			max-width: 700px;
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

				text-transform: uppercase;
				span {
					color: rgb(${colors.primary});
				}
			}
		}
	}

	.middle-container {
		.about {
			padding-top: 10px;

			a {
				color: rgb(${colors.primary});
			}

			p {
				background: rgba(${colors.backgroundAlt}, 0.2);
				color: rgb(${colors.font});
				text-align: center;
				padding: 20px 10px;
				line-height: 1.6rem;
			}
		}

		.projects {
			display: grid;
			grid-template-columns: repeat(4, 1fr);
			justify-items: center;
			gap: 20px;
			padding: 20px;

			@media screen and (max-width: 1200px) {
				grid-template-columns: repeat(3, 1fr);
			}
			@media screen and (max-width: 900px) {
				grid-template-columns: repeat(2, 1fr);
			}
			@media screen and (max-width: 615px) {
				grid-template-columns: 1fr;
			}

			.project {
				display: flex;
				justify-content: space-between;
				padding: 12px;
				border-radius: 8px;
				border: 2px solid rgb(${colors.secondary});
				background: rgb(${colors.background});
				flex-direction: column;
				gap: 10px;
				width: 100%;
				max-width: 250px;
				user-select: none;

				:hover {
					box-shadow: 0 0 12px rgba(${colors.primary}, 0.5);
					transition: all 200ms ease-in-out;
				}

				div {
					width: 100%;
					display: flex;
					justify-content: flex-start;
					display: flex;
					justify-content: space-between;
					background: rgb(${colors.background});
					flex-direction: column;
					gap: 10px;
					width: 100%;
					max-width: 250px;
					user-select: none;
				}

				h2 {
					padding-bottom: 2px;
					border-bottom: 2px solid rgb(${colors.secondary});
					line-height: 1.4rem;
				}

				li {
					padding: 5px 0;
				}

				a {
					padding: 10px;
					background: rgb(${colors.primary});
					color: rgb(${colors.text});
					border-radius: 5px;
					text-align: center;
					text-transform: uppercase;
					font-weight: 500;
					font-size: 0.9rem;
				}
			}
		}

		.technologies {
			display: flex;
			justify-content: center;
			gap: 30px;
			flex-flow: row wrap;
			padding: 20px;

			div {
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
				gap: 10px;
				background: rgba(${colors.background}, 0.2);
				padding: 10px;
				border-radius: 5px;
				user-select: none;
				min-width: 100px;

				svg {
					width: 35px;
					height: 35px;
				}

				span {
					font-weight: 500;
				}
			}
		}
	}

	footer {
		width: 100%;
		padding-top: 5px;
		margin-top: 20px;
		backdrop-filter: blur(10px);
		background: rgba(${colors.backgroundAlt}, 0.2);
		box-shadow: 0 0 10px rgba(${colors.primary}, 0.5);

		h3 {
			text-align: center;
			line-height: 2rem;
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
		}
	}
`;
