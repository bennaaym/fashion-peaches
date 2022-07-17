import { StyleSheet, ScrollView, View, Text, FlatList } from 'react-native';
import { CategoryItem } from '../../components';
import { category } from '../../db';
import { appTheme } from '../../common/styles/theme';

const Category = ({ navigation }) => {
  const goToHomeOptions = (category) => {
    navigation.navigate('Options', { category });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>What are you looking for?</Text>
      {category.map((item, index) => {
        if ((index + 1) % 3 === 0) return;
        if ((index + 1) % 3 === 1)
          return (
            <CategoryItem
              key={item.name}
              label={item.name}
              image={item.image}
              onPress={goToHomeOptions}
            />
          );
        if ((index + 1) % 3 === 2)
          return (
            <View style={styles.evenRow} key={item.name}>
              <CategoryItem label={item.name} image={item.image} />
              <View style={styles.hSpace} />
              <CategoryItem
                label={category[index + 1].name}
                image={category[index + 1].image}
                onPress={goToHomeOptions}
              />
            </View>
          );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: appTheme.colors.black,
    textAlign: 'center',
  },
  title: {
    ...appTheme.fonts.h3,
    color: appTheme.colors.white,
    fontFamily: 'Montserrat_800ExtraBold',
    marginVertical: 20,
    textAlign: 'center',
  },
  evenRow: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  hSpace: {
    marginHorizontal: 5,
  },
});

export default Category;
