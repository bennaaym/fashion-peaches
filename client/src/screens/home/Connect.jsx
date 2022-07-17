import { StyleSheet, View, Text } from 'react-native';
import { appTheme } from '../../common/styles/theme';
import { Header } from '../../components';
const Connect = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <Text style={styles.label}>
        Connect: This screen still under development
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: appTheme.colors.black,
  },
  label: {
    ...appTheme.fonts.body1,
    color: appTheme.colors.white,
    fontFamily: 'Montserrat_500Medium',
  },
});

export default Connect;
