import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import { useCustomFont } from './hooks';
import { AuthStack } from './navigation';
import { AuthContextProvider } from './contexts';

export const App = () => {
  const [fontsLoaded] = useCustomFont();

  if (!fontsLoaded) return <AppLoading />;

  return (
    <NavigationContainer>
      <AuthContextProvider>
        <AuthStack />
      </AuthContextProvider>
    </NavigationContainer>
  );
};

export default App;
