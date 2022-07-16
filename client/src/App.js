import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import { useCustomFont } from './hooks';
import { AppStack, AuthStack } from './navigation';
import { useAuthContext } from './contexts';

export const App = () => {
  const [fontsLoaded] = useCustomFont();
  const { auth } = useAuthContext();
  if (!fontsLoaded) return <AppLoading />;

  return (
    <NavigationContainer>
      {auth?.tokens ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default App;
