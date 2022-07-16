import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { appTheme } from '../../common/styles/theme';

const SocialMediaButton = ({ label, icon, style, labelStyle, onPress }) => {
  return (
    <TouchableOpacity style={[styles.container, style]}>
      {icon}
      <Text style={[styles.text, labelStyle]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    alignContent: 'center',
    backgroundColor: appTheme.colors.blue,
    borderRadius: 10,
    height: 50,
  },

  text: {
    ...appTheme.fonts.body3,
    fontFamily: 'Montserrat_500Medium',
    marginLeft: 10,
  },
});

export default SocialMediaButton;
