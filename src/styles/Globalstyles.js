import { createGlobalStyle } from 'styled-components';
import bg from '../assets/img/bg.jpg';
import { colors } from './colors';

export const GlobalStyles = createGlobalStyle`
::-webkit-scrollbar {
  width: 7px;
  background-color: rgba(${colors.secondary}, .6);
}
::-webkit-scrollbar-thumb {
  background-color: rgba(${colors.primary}, 1);
  border-radius: 5px;
}

body {
  max-width: 100vw;
  font-family: Montserrat;
  color: rgb(${colors.font});
  background:  rgba(${colors.secondary}, .9);
  background-image: url(${bg});
  background-size: cover;
  backdrop-filter: blur(8px);
}
`;
