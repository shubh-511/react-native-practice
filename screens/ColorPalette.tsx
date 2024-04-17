import React from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';
import ColorBox from '../components/ColorBox';

const ColorPalette = ({route}: any) => {
  const {colors, paletteName} = route.params.item;
  // console.warn(colors);
  return (
    <FlatList
      keyExtractor={item => item.colorName}
      style={styles.container}
      data={colors}
      renderItem={({item}) => (
        <ColorBox colorName={item.colorName} hexCode={item.hexCode} />
      )}
      ListHeaderComponent={<Text style={styles.heading}>{paletteName}</Text>}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default ColorPalette;
