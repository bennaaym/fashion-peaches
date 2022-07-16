import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { appTheme } from '../../common/styles/theme';
import { PrimaryButton, SecondaryButton } from '../../components';

const AuthOptions = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>fashion peaches</Text>
        <Text style={styles.subtitle}>connect with your designer</Text>
      </View>
      <Image
        style={styles.img}
        source={require('../../assets/images/auth_options_illustration.png')}
      />
      <View style={styles.vSpace} />
      <PrimaryButton label="Log in" style={{ marginVertical: 10 }} />
      <SecondaryButton label="Create account" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: appTheme.colors.black,
  },
  img: {
    resizeMode: 'contain',
    marginVertical: 40,
  },

  header: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    ...appTheme.fonts.h1,
    fontFamily: 'Montserrat_800ExtraBold',
    textTransform: 'capitalize',
    color: appTheme.colors.white,
  },
  subtitle: {
    ...appTheme.fonts.body1,
    fontFamily: 'Montserrat_600SemiBold',
    color: appTheme.colors.white,
    opacity: 0.6,
  },
});

export default AuthOptions;
