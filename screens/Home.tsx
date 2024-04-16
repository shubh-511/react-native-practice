import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const Home = ({navigation}: any) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ColorPalette');
        }}>
        <Text>Hello this is home!!</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
