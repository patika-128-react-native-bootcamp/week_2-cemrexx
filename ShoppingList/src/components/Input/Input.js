import React, {useState} from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';

const Input = ({name, number, setName, setNumber}) => {
  return (
    <View>
      <Text> Name </Text>
      <TextInput
        style={styles.input}
        onChangeText={name => setName(name)}
        value={name}
        placeholder="Enter product name"
      />
      <Text> Price </Text>
      <TextInput
        style={styles.input}
        onChangeText={number => setNumber(number)}
        value={number}
        placeholder="Enter product amount"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 25,
    margin: 10,
    borderWidth: 1,
    paddingLeft: 5,
    backgroundColor: '#ededed',
    borderRadius: 3,
  },
});

export default Input;
