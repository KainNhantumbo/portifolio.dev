import styled from 'styled-components';
import { colors } from './colors';

export const ContactsContainer = styled.main`
	width: 100%;
	min-height: 100vh;
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	gap: 20px;
	color: rgb(${colors.font});
	overflow-x: hidden;

	.intro {
		display: flex;
		justify-content: flex-start;
		flex-direction: column;
		padding: 0 20px;
		font-family: 'Bree Serif', serif;
		gap: 5px;

		h2 {
			padding: 2px 5px;
			font-size: 1.2rem;
		}
		p {
			padding: 2px 5px;
			line-height: 1.6rem;
		}
	}

	.form-container {
		width: 100%;
		max-width: 100%;
		display: flex;
		justify-content: space-around;
		align-items: center;
		flex-flow: row wrap;
		gap: 5px;
		padding: 0 5px;

		@media screen and (max-width: 880px) {
			gap: 20px;
		}
		.svgContainer {
			@keyframes identifier {
				0% {
					border: 2px solid rgba(${colors.primary}, 0.8);
					transform: scale(1);
				}
				20% {
					border: 2px solid rgba(${colors.inner}, 0.8);
					transform: scale(0.9);
				}
				40% {
					border: 2px solid rgba(${colors.font}, 0.8);
				}
				80% {
					border: 2px solid rgba(${colors.shadows}, 0.8);
					transform: scale(1);
				}
				100% {
					border: 2px solid rgba(${colors.primary}, 0.8);
					transform: scale(1);
				}
			}
			animation: identifier 4000ms ease-in-out forwards infinite;
			background: rgba(${colors.secondary}, 0.8);
			border-radius: 50%;
			width: 300px;
			height: 300px;
			display: grid;
			place-content: center;
			padding: 10px;
			margin: 0 auto;
			@media screen and (max-width: 880px) {
				width: 240px;
				height: 240px;
			}
			img {
				width: 100%;
			}
		}
	}

	form {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		width: 100%;
		max-width: 450px;
		gap: 20px;
		padding-right: 40px;
		padding-left: 5px;
		margin: 0 auto;

		label,
		button {
			font-weight: 500;
			line-height: 1.4rem;
			position: relative;
		}

		label {
			svg {
				position: absolute;
				width: 16px;
				height: 16px;
				top: 2px;
				left: 0;
			}
			span {
				padding-left: 20px;
			}
		}

		input,
		textarea,
		button {
			border: none;
			border-style: none;
			outline: none;
			padding: 5px 10px;
			width: 100%;
			resize: none;
			border-radius: 5px;
			color: rgb(${colors.font});
			background: rgb(${colors.inner});
			border: 2px solid rgba(${colors.secondary}, 1);

			::placeholder {
				color: rgba(${colors.font}, 0.5);
			}

			:focus {
				box-shadow: 0 0 10px rgba(${colors.primary}, 0.8);
			}
		}

		.upper {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			gap: 5px;
		}

		.common {
			display: flex;
			flex-direction: column;
			gap: 5px;
		}

		button {
			width: fit-content;
			cursor: pointer;

			:hover {
				background: rgba(${colors.primary}, 0.2);
				box-shadow: 0 0 10px rgb(${colors.shadows});
			}

			svg {
				position: absolute;
				width: 20px;
				height: 20px;
				top: 6px;
				left: 5px;
			}
			span {
				padding-left: 20px;
			}
		}
	}
`;
