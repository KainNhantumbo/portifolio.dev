import styled from 'styled-components';

export const HomeContainer = styled.main`
	width: 100%;
	height: 100%;
	margin: 0 auto;
	padding: 70px 10px 0px 10px;
	display: flex;
	flex-direction: column;
	gap: 30px;
	font-family: Inter, 'Open Sans', Montserrat, Poppins, 'PT Sans';
	line-height: 1.6rem;
	margin-bottom: 50px;

	h2 {
		line-height: 2rem;
		font-size: 1.2rem;
		font-weight: 500;
		margin: 0 auto;
		position: relative;
		svg {
			position: absolute;
			width: 20px;
			height: 20px;
			top: calc(50% - 10px);
			left: 0;
			color: rgb(${({ theme }) => theme.alter});
		}
		span {
			padding-left: 25px;
		}
	}

	.sub-title {
		color: rgb(${({ theme }) => theme.alterAlt});
		margin-bottom: 20px;
		position: relative;
		span {
			padding-left: 25px;
		}
		svg {
			position: absolute;
			width: 20px;
			height: 20px;
			top: calc(50% - 10px);
			left: 0;
		}
	}

	.abilities {
		display: flex;
		flex-direction: column;
		max-width: 700px;
		margin: 0 auto;
		border-top: 1px solid rgba(${({ theme }) => theme.font}, 0.2);
		padding-top: 20px;
		line-height: 1.6rem;

		.frontend,
		.backend,
		.other {
			margin-top: 20px;
		}

		.list-items {
			display: grid;
			grid-template-columns: repeat(4, 1fr);
			align-items: center;
			gap: 10px;

			@media screen and (max-width: 650px) {
				grid-template-columns: repeat(3, 1fr);
			}
			@media screen and (max-width: 495px) {
				grid-template-columns: repeat(2, 1fr);
			}
			@media screen and (max-width: 330px) {
				grid-template-columns: 1fr;
				place-items: center;

			}

			.item {
				position: relative;
				display: flex;
				width: 150px;
				flex-direction: column;
				gap: 5px;
				padding: 15px;
				padding-right: 20px;
				background: rgb(${({ theme }) => theme.background_alter});
				border-radius: 10px;

				span {
					font-size: 0.9rem;
					color: rgba(${({ theme }) => theme.font}, 0.8);
				}
				svg {
					position: absolute;
					width: 20px;
					height: 20px;
					top: 8px;
					right: 8px;
					border-radius: 5px;
					color: rgb(${({ theme }) => theme.secondary});
				}
			}
		}
	}

	.contact-container {
		max-width: 700px;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 auto;
		gap: 20px;
		border-top: 1px solid rgba(${({ theme }) => theme.font}, 0.2);
		padding-top: 20px;
		line-height: 1.6rem;
		@media screen and (max-width: 370px) {
		margin: 0;
	}

		label {
			font-weight: 500;
		}

		.options {
			display: flex;
			flex-direction: column;
			gap: 5px;
			justify-content: flex-start;

			.option {
				display: flex;
				gap: 10px;
				flex-direction: row;
				align-items: center;
				svg {
					width: 20px;
					height: 20px;
				}
			}
		}

		.message {
			color: rgb(${({ theme }) => theme.primary});
			font-size: 0.9rem;
			font-weight: 500;
		}

		.messageForm {
			display: flex;
			justify-content: flex-start;
			flex-direction: column;
			gap: 10px;
			padding: 20px;
			border-radius: 10px;
			box-shadow: 0 0 25px rgba(${({ theme }) => theme.shadows}, 0.6);
			background: rgb(${({ theme }) => theme.backgroundAlt});

			h1 {
				svg {
					position: absolute;
					width: 30px;
					height: 30px;
					left: 200px;
					top: -1px;
				}
			}

			.form-control {
				display: flex;
				gap: 10px;
				label {
					padding-bottom: 10px;
				}

				@media screen and (max-width: 568px) {
					flex-flow: row wrap;
				}

				.form-item {
					display: flex;
					flex-direction: column;
					width: 100%;
				}
			}

			form {
				display: flex;
				justify-content: flex-start;
				flex-direction: column;
				gap: 10px;

				span {
					font-size: 0.9rem;
					font-weight: 500;
				}

				button {
					border: none;
					background: none;
					border-radius: 15px;
					position: relative;
					padding: 7px 10px;
					color: rgb(${({ theme }) => theme.text});
					background: rgb(${({ theme }) => theme.secondary});
					width: fit-content;
					cursor: pointer;

					svg {
						width: 18px;
						height: 18px;
						position: absolute;
						top: 7px;
						right: 7px;
						pointer-events: none;
					}
					span {
						padding-right: 20px;
						font-weight: 500;
						pointer-events: none;
					}
				}

				input,
				textarea {
					border: none;
					border-radius: 25px;
					padding: 10px;
					resize: none;
					background: rgb(${({ theme }) => theme.inner});
					outline: none;

					::placeholder {
						font-size: 0.9rem;
						font-weight: 500;
					}
				}
			}
		}
	}
`;
