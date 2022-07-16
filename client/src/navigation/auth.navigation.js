import { createStackNavigator } from '@react-navigation/stack';
import { AuthOptions, AuthUserType, SignIn, SignUp } from '../screens';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Options"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Options" component={AuthOptions} />
      <Stack.Screen name="UserType" component={AuthUserType} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};

export default AuthStack;
