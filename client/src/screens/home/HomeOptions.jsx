import { StyleSheet, View, Text, Image } from 'react-native';
import { appTheme } from '../../common/styles/theme';
import { PrimaryButton, BackgroundImage } from '../../components';

const HomeOptions = ({ navigation }) => {
  return (
    <View style={styles.container}>
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
