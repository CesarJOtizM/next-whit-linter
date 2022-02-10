import { ApolloProvider } from '@apollo/client';
import withApollo from '../lib/withApollo';
import { GlobalStyles } from '../styles/GlobalStyles';

function MyApp({ Component, pageProps, apollo }: any) {
  return (
    <ApolloProvider client={apollo}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

MyApp.getInitialProps = async function ({ Component, ctx }: any) {
  let pageProps: any = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  pageProps.query = ctx.query;

  return { pageProps };
};

export default withApollo(MyApp);
