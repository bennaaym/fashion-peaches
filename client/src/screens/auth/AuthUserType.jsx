import { StyleSheet, View, Text, Image } from 'react-native';
import { appTheme } from '../../common/styles/theme';
import { PrimaryButton } from '../../components/buttons';

const AuthUserType = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          style={styles.img}
          source={require('../../assets/images/auth_user_type_illustration.png')}
        />
        <View style={styles.overlay}></View>
      </View>
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
  imgContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  img: {
    width: '100%',
  },
  overlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 0.6,
    backgroundColor: appTheme.colors.black,
  },
});

export default AuthUserType;
