import { createStackNavigator } from '@react-navigation/stack';
import {
  Home,
  Welcome,
  Category,
  HomeOptions,
  Connect,
  Social,
} from '../screens';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Category" component={Category} />
      <Stack.Screen name="Options" component={HomeOptions} />
      <Stack.Screen name="Connect" component={Connect} />
      <Stack.Screen name="Social" component={Social} />
    </Stack.Navigator>
  );
};

export default AppStack;
