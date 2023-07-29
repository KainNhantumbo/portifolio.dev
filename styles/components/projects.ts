import styled from 'styled-components';

export const ProjectsContainer = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 auto;
	gap: 10px;
	border-top: 1px solid rgba(${({ theme }) => theme.font}, 0.2);
	padding-top: 20px;

	p {
		max-width: 700px;
		margin-bottom: 10px;
		text-align: center;
		a {
			color: rgb(${({ theme }) => theme.primary});
		}
	}

	.cards-wrapper {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 20px;
		margin-top: 20px;

		@media screen and (max-width: 910px) {
			grid-template-columns: 1fr 1fr;
		}
		@media screen and (max-width: 605px) {
			grid-template-columns: 1fr;
		}

		.card {
			width: 280px;
			height: 360px;
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			background: rgb(${({ theme }) => theme.backgroundAlt});
			box-shadow: 0 0 25px rgba(${({ theme }) => theme.shadows}, 0.6);
			border-radius: 15px;
			padding: 8px;
			user-select: none;

			:hover {
				box-shadow: 0px 10px 35px rgba(${({ theme }) => theme.shadows}, 0.8);
			}

			.top {
				position: relative;
				width: 100%;
				height: 210px;

				img {
					:hover {
						width: 340px;
						height: 250px;
						transition: all 200ms ease;
					}
				}
				H4 {
					position: absolute;
					bottom: 16px;
					left: 8px;
					padding: 0px 8px;
					border-radius: 12px;
					font-size: 0.8rem;
					font-weight: 500;
					backdrop-filter: blur(10px);
					background: rgba(${({ theme }) => theme.secondary}, 0.5);
					width: fit-content;
					color: rgb(${({ theme }) => theme.text});
				}
			}

			.bottom {
				display: flex;
				justify-content: space-between;
				flex-direction: column;
				height: 100%;

				.details {
					h3 {
						font-size: .95rem;
					}
				}

				.actions {
					display: flex;
					flex-direction: column;
					gap: 10px;

					a {
						background: rgb(${({ theme }) => theme.background_alter});
						padding: 5px;
						border-radius: 12px;
						position: relative;
						:hover {
							color: rgb(${({ theme }) => theme.primary});
							svg {
								color: rgb(${({ theme }) => theme.primary});
							}
						}
						span {
							font-size: 0.9rem;
							text-transform: capitalize;
							padding-left: 30px;
						}
						svg {
							position: absolute;
							width: 20px;
							height: 20px;
							top: calc(50% - 10px);
							left: 8px;
							color: rgb(${({ theme }) => theme.secondary});
						}
					}
				}
			}
		}
	}
`;
