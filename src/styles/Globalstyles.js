import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Bree+Serif&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Patua+One&display=swap');

@font-face {
  font-family: Montserrat;
  src: url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,300;0,400;0,500;1,200;1,300;1,400;1,500&display=swap');
}

body {
  font-family: Montserrat;
}
`;
