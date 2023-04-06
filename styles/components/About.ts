import styled from 'styled-components';

export const AboutContainer = styled.section`
	max-width: 700px;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 auto;
	gap: 10px;
	border-top: 1px solid rgba(${({ theme }) => theme.font}, 0.2);
	padding-top: 20px;

	.experiences {
		text-align: center;

		.op {
			margin-bottom: 10px;
			font-weight: 500;
		}
	}

	.cards-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		justify-content: center;
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
			user-select: none;
			H4 {
				font-weight: 500;
			}
			span {
				font-size: .9rem;
				text-transform: capitalize;
				text-align: center;
			}
			:hover {
				svg {
					color: rgb(${({ theme }) => theme.primary});
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
