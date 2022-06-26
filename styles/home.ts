import styled from 'styled-components';

export const HomeContainer = styled.main`
	width: 100%;
	max-width: 700px;
	height: 100%;
	margin: 0 auto;
	padding: 70px 10px 50px 10px;
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
		margin: 0 auto;
		border-top: 1px solid rgba(${({ theme }) => theme.font}, .2);
		padding-top: 20px;
		line-height: 1.6rem;

		.frontend, .backend, .other {
			margin-top: 20px;
		}

		.list-items {
			display: flex;
			justify-content: flex-start;
			flex-flow: row wrap;
			gap: 10px;

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
`;
