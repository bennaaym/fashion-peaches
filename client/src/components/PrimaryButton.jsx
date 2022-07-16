import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { appTheme } from '../common/styles/theme';

const PrimaryButton = ({ label, style, onPress }) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '80%',
    height: 50,
    backgroundColor: appTheme.colors.pink,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },

  label: {
    color: appTheme.colors.white,
    ...appTheme.fonts.body1,
    fontFamily: 'Montserrat_600SemiBold',
  },
});

export default PrimaryButton;
