import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import { registerRootComponent } from 'expo';
import { ApolloProvider } from '@apollo/client';
import { client } from './apollo';
import App from './App';
import { AuthContextProvider } from './contexts';

const Root = () => (
  <ApolloProvider client={client}>
    <StatusBar hidden />
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </ApolloProvider>
);

registerRootComponent(Root);
