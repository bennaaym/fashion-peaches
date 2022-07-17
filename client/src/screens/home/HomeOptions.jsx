import { StyleSheet, View } from 'react-native';
import { PrimaryButton, BackgroundImage, Header } from '../../components';

const HomeOptions = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <BackgroundImage
        image={require('../../assets/images/home_options_illustration.png')}
      />
      <PrimaryButton
        label="Social"
        style={{ marginVertical: 20 }}
        onPress={() => navigation.navigate('Social')}
      />
      <PrimaryButton
        label="Connect"
        onPress={() => navigation.navigate('Connect')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeOptions;
