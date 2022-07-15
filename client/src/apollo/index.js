import { ApolloClient, InMemoryCache } from '@apollo/client';
import { REACT_APP_API } from '@env';

export const client = new ApolloClient({
  uri: `${REACT_APP_API}/graphql`,
  cache: new InMemoryCache(),
});
