import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import { useCustomFont } from './hooks';
import { AuthStack } from './navigation';

export const App = () => {
  const [fontsLoaded] = useCustomFont();

  if (!fontsLoaded) return <AppLoading />;

  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};

export default App;
