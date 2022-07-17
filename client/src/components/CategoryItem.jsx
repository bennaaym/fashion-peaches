import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import { appTheme } from '../common/styles/theme';

const CategoryItem = ({ label, image, style, onPress }) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Image style={styles.img} source={image} />
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 20,
    overflow: 'hidden',
  },
  img: {
    position: 'absolute',
    width: '100%',
    height: 150,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  label: {
    ...appTheme.fonts.h3,
    color: appTheme.colors.white,
    fontFamily: 'Montserrat_800ExtraBold',
  },
});

export default CategoryItem;
