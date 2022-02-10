import { ApolloProvider } from '@apollo/client';
import withApollo from '../lib/withApollo';
import { GlobalStyles } from '../styles/GlobalStyles';
import App from 'next/app';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }: any) {
    let pageProps: any = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
      pageProps.query = ctx.query;
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, apollo }: any = this.props;
    return (
      <ApolloProvider client={apollo}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ApolloProvider>
    );
  }
}
export default withApollo(MyApp);
