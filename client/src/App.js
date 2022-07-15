import { View, Text } from 'react-native';
import { gql, useQuery } from '@apollo/client';

const GET_POSTS = gql`
  query {
    hello
  }
`;

export const App = () => {
  const { data, error, loading } = useQuery(GET_POSTS);
  console.log(data, error, loading);
  return (
    <View>
      <Text>Hello World!</Text>
    </View>
  );
};

export default App;
