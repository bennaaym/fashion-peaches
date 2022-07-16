import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { appTheme } from '../../common/styles/theme';

const SecondaryButton = ({ label, onPress }) => {
  return (
    <TouchableOpacity style={[styles.container, styles]} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '80%',
    height: 50,
    backgroundColor: appTheme.colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },

  label: {
    color: appTheme.colors.black,
    ...appTheme.fonts.body1,
    fontFamily: 'Montserrat_600SemiBold',
  },
});

export default SecondaryButton;
