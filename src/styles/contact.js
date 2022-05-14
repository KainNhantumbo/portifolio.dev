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

		h2 {
			font-size: 1.2rem;
		}
		p {
			line-height: 1.6rem;
		}
	}

	.form-container {
		width: 100%;
		max-width: 100%;
	}

	form {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		width: 100%;
		max-width: 450px;
		gap: 20px;
		padding: 0 20px;

		@media screen and (max-width: 520px) {
			padding: 0 20px;
		}

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
			border: 2px solid rgba(${colors.font}, 0.5);

			@media screen and (max-width: 520px) {
				width: 80%;
			}

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
