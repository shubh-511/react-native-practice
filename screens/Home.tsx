import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const COLORS = [
  {colorName: 'Base03', hexCode: '#002b36'},
  {colorName: 'Base02', hexCode: '#073642'},
  {colorName: 'Base01', hexCode: '#586e75'},
  {colorName: 'Base00', hexCode: '#657b83'},
  {colorName: 'Base0', hexCode: '#839496'},
  {colorName: 'Base1', hexCode: '#93a1a1'},
  {colorName: 'Base2', hexCode: '#eee8d5'},
  {colorName: 'Base3', hexCode: '#fdf6e3'},
  {colorName: 'Yellow', hexCode: '#b58900'},
  {colorName: 'Orange', hexCode: '#cb4b16'},
  {colorName: 'Red', hexCode: '#dc322f'},
  {colorName: 'Magenta', hexCode: '#d33682'},
  {colorName: 'Violet', hexCode: '#6c71c4'},
  {colorName: 'Blue', hexCode: '#268bd2'},
  {colorName: 'Cyan', hexCode: '#2aa198'},
  {colorName: 'Green', hexCode: '#859900'},
];

const RAINBOW = [
  {colorName: 'Red', hexCode: '#FF0000'},
  {colorName: 'Orange', hexCode: '#FF7F00'},
  {colorName: 'Yellow', hexCode: '#FFFF00'},
  {colorName: 'Green', hexCode: '#00FF00'},
  {colorName: 'Violet', hexCode: '#8B00FF'},
];

const FRONTEND_MASTERS = [
  {colorName: 'Red', hexCode: '#c02d28'},
  {colorName: 'Black', hexCode: '#3e3e3e'},
  {colorName: 'Grey', hexCode: '#8a8a8a'},
  {colorName: 'White', hexCode: '#ffffff'},
  {colorName: 'Orange', hexCode: '#e66225'},
];

const COLOR_PALETTES = [
  {paletteName: 'Solarized', colors: COLORS},
  {paletteName: 'Frontend Masters', colors: FRONTEND_MASTERS},
  {paletteName: 'Rainbow', colors: RAINBOW},
];
const Home = ({navigation}: any) => {
  return (
    <FlatList
      data={COLOR_PALETTES}
      keyExtractor={item => item.paletteName}
      renderItem={({item}) => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ColorPalette', {item});
          }}>
          <Text>{item.paletteName}</Text>
          <FlatList
            horizontal={true}
            data={item.colors.slice(0, 5)}
            renderItem={item => (
              <View style={[style.box, {backgroundColor: item.item.hexCode}]} />
            )}
          />
        </TouchableOpacity>
      )}
      ListHeaderComponent={
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ModalScreen');
          }}>
          <Text>i am modal</Text>
        </TouchableOpacity>
      }
    />
  );
};

const style = StyleSheet.create({
  box: {
    marginTop: 10,
    marginBottom: 10,
    marginRight: 10,
    height: 30,
    width: 30,
  },
});
export default Home;
