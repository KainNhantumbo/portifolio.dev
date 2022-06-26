import styled from 'styled-components';

export const FooterContainer = styled.footer`
	width: 100vw;
	height: min-content;
	position: relative;
	font-family: Inter, 'Open Sans', Montserrat, Poppins, 'PT Sans';
	display: flex;
	flex-direction: column;
	gap: 10px;
	padding-top: 5px;
	border-radius: 20px 20px 0 0;

	backdrop-filter: blur(10px);
	background: rgba(${({ theme }) => theme.backgroundAlt}, 0.3);
	box-shadow: 0 0 25px rgb(${({ theme }) => theme.shadows}, 0.6);

	h3 {
		text-align: center;
		line-height: 2rem;
	}

	ul {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: row;
		gap: 15px;

		li {
			display: grid;
			place-content: center;
			place-items: center;
			background: rgb(${({ theme }) => theme.background_alter});
			border-radius: 10px;
			padding: 10px;
			width: 40px;
			height: 40px;

			:hover {
				color: rgb(${({ theme }) => theme.secondary});

				svg {
					color: rgb(${({ theme }) => theme.alter});
				}
			}
		}
		svg {
			width: 20px;
			height: 20px;
			color: rgb(${({ theme }) => theme.secondary});
		}
	}

	p {
		text-align: center;
		padding: 10px;
		line-height: 1.4rem;
		font-size: .9rem;
	}
`;
