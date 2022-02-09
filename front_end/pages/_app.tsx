import type { AppProps } from 'next/app';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
html{
  --yellow:#FFE200;
  --red: #FF2D55;
  --orange: #FF8000;
  --blue:#0500FF;
  --black:#333333;
  --gray: #E5E5E5;
}
body{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: var(--gray);
}
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
