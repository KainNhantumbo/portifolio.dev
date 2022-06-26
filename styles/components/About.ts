import styled from 'styled-components';

export const AboutContainer = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 auto;
	gap: 10px;
	border-top: 1px solid rgba(${({ theme }) => theme.font}, 0.2);
	padding-top: 20px;

	.experiences {
		text-align: center;
	}

	.cards-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-flow: row wrap;
		gap: 50px;
		margin-top: 20px;

		.card {
			display: grid;
			place-content: center;
			place-items: center;
			gap: 10px;
			width: 180px;
			height: 180px;
			background: rgb(${({ theme }) => theme.background_alter});
			border-radius: 10px;
			padding: 10px;

			H4 {
				font-weight: 500;
			}

			:hover {
				color: rgb(${({ theme }) => theme.secondary});
				svg {
					color: rgb(${({ theme }) => theme.alter});
				}
			}
		}
		svg {
			width: 40px;
			height: 40px;
			color: rgb(${({ theme }) => theme.secondary});
		}
	}
`;
