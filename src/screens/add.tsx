import React, { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export const AddScreen = () => {
  const [name, setName] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        value={name}
        onChangeText={(text) => setName(text)}
        style={styles.input}
        placeholder="Your plant name"
      />
      <Button title="Submit" onPress={() => console.log(name)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#333',
    height: 40,
    padding: 12,
  },
});
