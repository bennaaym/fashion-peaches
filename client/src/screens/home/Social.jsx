import { StyleSheet, View, Text } from 'react-native';
import { appTheme } from '../../common/styles/theme';
const Social = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        Social: This screen still under development
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

export default Social;
