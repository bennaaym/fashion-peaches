import { StyleSheet, View, Text, Image } from 'react-native';
import { appTheme } from '../../common/styles/theme';
import { PrimaryButton, BackgroundImage } from '../../components';

const AuthUserType = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <BackgroundImage
        image={require('../../assets/images/auth_user_type_illustration.png')}
      />
      <Text style={styles.title}>Who are you?</Text>
      <PrimaryButton
        label="Customer"
        style={{ marginVertical: 20 }}
        onPress={() => navigation.navigate('SignUp', { userType: 'CUSTOMER' })}
      />
      <PrimaryButton
        label="Designer"
        onPress={() => navigation.navigate('SignUp', { userType: 'DESIGNER' })}
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

export default AuthUserType;
