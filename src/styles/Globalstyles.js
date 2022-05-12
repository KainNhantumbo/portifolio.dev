import { createGlobalStyle } from 'styled-components';
import bg from '../assets/img/bg.jpg';
import { colors } from './colors';

export const GlobalStyles = createGlobalStyle`

body {
  max-width: 100vw;
  font-family: Montserrat;
  color: rgb(${colors.font});
  background:  rgba(${colors.background}, .5);
  background-image: url(${bg});
  background-size: cover;
  backdrop-filter: blur(10px);
}
`;
