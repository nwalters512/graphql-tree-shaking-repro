import { ApolloClient, ApolloProvider, InMemoryCache } from "../graphql/apollo-client";

import { link } from '../graphql/link';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link
});

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
