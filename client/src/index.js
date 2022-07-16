import { registerRootComponent } from 'expo';
import { ApolloProvider } from '@apollo/client';
import { client } from './apollo';
import App from './App';
import ChatApp from './components/ChatApp';

const Root = () => (
  <ApolloProvider client={client}>
    <App />
    <ChatApp />
  </ApolloProvider>
);

registerRootComponent(Root);
