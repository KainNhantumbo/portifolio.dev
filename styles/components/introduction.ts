import styled from 'styled-components';

export const IntroductionContainer = styled.section`
	line-height: 1.8rem;
	font-size: 1.2rem;
	min-height: 85vh;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	position: relative;
	color: rgb(${({ theme }) => theme.text});

	.intro-background {
		position: absolute;
		top: 10px;
		left: 0;
		border-radius: 20px;
		height: 50vh;
	}

	.intro {
		z-index: 200;
		display: flex;
		flex-direction: column;
		gap: 10px;
		justify-content: flex-start;
		padding: 20px;

		.placeholder {
			width: fit-content;
			background: linear-gradient(
				130deg,
				rgb(${({ theme }) => theme.secondary}) 10%,
				rgb(${({ theme }) => theme.primary}) 130%,
				rgb(${({ theme }) => theme.alter}) 5%
			);
			color: rgb(${({ theme }) => theme.text});
			padding: 0 12px;
			text-transform: capitalize;
			border-radius: 15px;
			font-size: 0.9rem;
			position: relative;

			svg {
				position: absolute;
				width: 20px;
				height: 20px;
				top: calc(50% - 10px);
				left: 8px;
				color: rgb(${({ theme }) => theme.text});
			}
			span {
				padding-left: 20px;
			}
		}
		h1 {
			font-size: 1.8rem;
			font-weight: 500;
		}

		button {
			width: fit-content;
			border: none;
			margin-top: 20px;
			background: none;
			border-radius: 25px;
			padding: 5px 15px;
			color: rgb(${({ theme }) => theme.text});
			position: relative;
			cursor: pointer;
			border: 2px solid rgb(${({ theme }) => theme.primary});
			:hover {
				color: rgb(${({ theme }) => theme.primary});
				svg {
					color: rgb(${({ theme }) => theme.primary});
				}
			}
			svg {
				position: absolute;
				width: 20px;
				height: 20px;
				top: calc(50% - 10px);
				right: 5px;
				color: rgb(${({ theme }) => theme.text});
			}
			span {
				padding-right: 20px;
			}
		}
	}
`;
