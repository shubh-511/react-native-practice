import React from 'react';
import {SafeAreaView, FlatList, StyleSheet} from 'react-native';
import ColorBox from '../components/ColorBox';

const COLORS = [
  {colorName: 'Red', hexCode: '#FF0000'},
  {colorName: 'Orange', hexCode: '#FF7F00'},
  {colorName: 'Yellow', hexCode: '#FFFF00'},
  {colorName: 'Green', hexCode: '#00FF00'},
  {colorName: 'Violet', hexCode: '#8B00FF'},
];

const ColorPalette = () => {
  return (
    <SafeAreaView>
      <FlatList
        keyExtractor={item => item.colorName}
        style={styles.container}
        data={COLORS}
        renderItem={({item}) => (
          <ColorBox hexCode={item.hexCode} colorName={item.colorName} />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 40,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default ColorPalette;
