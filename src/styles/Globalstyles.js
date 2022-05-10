import { createGlobalStyle } from 'styled-components';
import { colors } from './colors';

export const GlobalStyles = createGlobalStyle`

body {
  max-width: 100vw;
  font-family: Montserrat;
  color: rgb(${colors.font});
  background:  rgb(${colors.background});
}
`;
