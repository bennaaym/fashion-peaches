import { createStackNavigator } from '@react-navigation/stack';
import { AuthOptions } from '../screens';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Auth Options" component={AuthOptions} />
    </Stack.Navigator>
  );
};

export default AuthStack;
