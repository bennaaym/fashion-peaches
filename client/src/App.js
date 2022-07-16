import { View, Text } from 'react-native';
import { gql, useQuery } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


import Add from './components/main/Add';
import Save from './components/main/Save';
import Home from './components/Home';
import Social from './components/Social';
import { withNavigation } from 'react-navigation';

const firebaseConfig = {
 

  apiKey: API_KEY,
 authDomain: AUTH_DOMAIN,
//  databaseURL: DATABASE_URL,
 projectId: PROJECT_ID,
 storageBucket: STORAGE_BUCKET,
 messagingSenderId: MESSAGING_SENDER_ID,
 appId: APP_ID,
 measurementId: MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const GET_POSTS = gql`
  query {
    hello
  }
`;
const Stack = createNativeStackNavigator();
export const App = () => {
  const { data, error, loading } = useQuery(GET_POSTS);
  console.log(data, error, loading);
 
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Home" component={Home}  />
    <Stack.Screen name="Add" component={Add}  />
    <Stack.Screen name="Save" component={Save} />
    <Stack.Screen name="Social" component={Social} />
      </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
