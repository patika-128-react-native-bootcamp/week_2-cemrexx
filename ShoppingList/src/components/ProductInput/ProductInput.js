import React, {useState} from 'react';
import {View, TouchableOpacity, Text, Button} from 'react-native';
import Input from '../Input';
import styles from './ProductInput.style';

const Separator = () => <View style={styles.separator} />;

const ProductInput = ({addHandler}) => {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  return (
    <View>
      <Separator />
      <Input
        name={name}
        number={number}
        setName={setName}
        setNumber={setNumber}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => addHandler(name, number)}>
        <Text style={styles.text}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductInput;
