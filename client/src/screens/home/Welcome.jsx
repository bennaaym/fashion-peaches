import { StyleSheet, View, Text, Image } from 'react-native';
import { appTheme } from '../../common/styles/theme';
import { PrimaryButton, BackgroundImage, Header } from '../../components';

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <BackgroundImage
        image={require('../../assets/images/home_welcome_illustration.png')}
      />
      <PrimaryButton
        label="Get started"
        onPress={() => navigation.navigate('Category')}
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
  title: {
    ...appTheme.fonts.h1,
    fontFamily: 'Montserrat_800ExtraBold',
    color: appTheme.colors.white,
  },
});

export default Welcome;
