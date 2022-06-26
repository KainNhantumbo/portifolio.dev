import styled from 'styled-components';

export const AboutContainer = styled.section`
	width: 100vw;
	max-width: 600px;
	height: min-content;
	position: relative;
	font-family: Inter, 'Open Sans', Montserrat, Poppins, 'PT Sans';
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 auto;
	gap: 10px;
	line-height: 1.6rem;

	h2 {
		text-align: center;
		line-height: 2rem;
		font-size: 1.2rem;
		font-weight: 500;
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
