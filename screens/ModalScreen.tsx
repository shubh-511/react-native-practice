import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';

const ModalScreen = ({navigation}: any) => {
  const [name, setName] = useState('');
  const handlePress = () => {
    if (!name) {
      Alert.alert('Please enter text');
    } else {
      navigation.goBack();
    }
  };
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} value={name} onChangeText={setName} />
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: '#839496',
    borderWidth: 1,
    height: 40,
  },
  container: {
    padding: 20,
    gap: 20,
  },
  button: {
    backgroundColor: 'grey',
    borderRadius: 2,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ModalScreen;
