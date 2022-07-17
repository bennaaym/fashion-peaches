import { StyleSheet, View, Text, Image } from 'react-native';
import { appTheme } from '../common/styles/theme';

const BackgroundImage = ({ image, overlayOpacity }) => {
  return (
    <View style={styles.imgContainer}>
      <Image style={styles.img} source={image} />
      <View style={[styles.overlay, { opacity: overlayOpacity || 0.6 }]}></View>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default BackgroundImage;
