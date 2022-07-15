import { registerRootComponent } from 'expo';
import { ApolloProvider } from '@apollo/client';
import { client } from './apollo';
import App from './App';

const Root = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

registerRootComponent(Root);
