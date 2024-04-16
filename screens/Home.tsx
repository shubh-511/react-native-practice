import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Button} from 'react-native';

const Home = ({navigation}: any) => {
  const [count, setCount] = useState(0);
  const handlePress = () => {
    setCount(count + 1);
  };
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ColorPalette');
        }}>
        <Text>Hello this is home!!</Text>
      </TouchableOpacity>
      <Button title="click here" onPress={handlePress} />
      <Text>{count}</Text>
    </View>
  );
};

export default Home;
