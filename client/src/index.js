import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import { registerRootComponent } from 'expo';
import { ApolloProvider } from '@apollo/client';
import { client } from './apollo';
import App from './App';

const Root = () => (
  <ApolloProvider client={client}>
    <StatusBar hidden />
    <App />
  </ApolloProvider>
);

registerRootComponent(Root);
