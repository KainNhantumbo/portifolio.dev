import styled from 'styled-components';

export const AboutContainer = styled.section`
	width: 100vw;
	height: min-content;
	position: relative;
	font-family: Inter, 'Open Sans', Montserrat, Poppins, 'PT Sans';
	display: flex;
	flex-direction: column;
	gap: 50px;

	width: 100%;
	padding-top: 5px;
	margin-top: 20px;
	backdrop-filter: blur(10px);
	background: rgba(${({ theme }) => theme.backgroundAlt}, 0.3);

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

		li {
			display: grid;
			place-content: center;
			place-items: center;
			background: rgb(${({ theme }) => theme.background_alter});
			border-radius: 5px;
			padding: 10px;

			:hover {
				color: rgb(${({ theme }) => theme.secondary});
				transition: all 200ms ease;

				svg {
					color: rgb(${({ theme }) => theme.font});
					transition: all 200ms ease;
				}
			}
		}
		svg {
			width: 20px;
			height: 20px;
			color: rgb(${({ theme }) => theme.primary});
		}
	}

	p {
		text-align: center;
		padding: 10px;
		line-height: 1.4rem;
	}
`;
