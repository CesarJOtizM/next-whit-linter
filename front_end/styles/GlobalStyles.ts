import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
html{
  --yellow:#FFE200;
  --red: #FF2D55;
  --orange: #FF8000;
  --blue:#0500FF;
  --black:#333333;
  --gray: #E5E5E5;
  --lightGray:#DDDDDD;
  --darkGray: #C1C1C1;
  --withe:#FFF;
}
body{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: var(--gray);
}
`;
