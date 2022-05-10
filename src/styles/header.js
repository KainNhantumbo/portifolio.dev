import styled from 'styled-components';
import { colors } from './colors';

export const HeaderContainer = styled.header`
	width: 100%;
	height: fit-content;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 8px;
  backdrop-filter: blur(10px);
  background: rgba(${colors.primary}, .5);
	box-shadow: 0 0 10px 1px rgb(${colors.shadows});
	span {
		background: rgb(${colors.backgroundAlt});
		color: rgb(${colors.font});
		padding: 4px 20px;
		border-radius: 20px;
		margin: 5px 0;
		font-weight: 500;
		text-transform: uppercase;
	}
`;
