import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './Badge.style';

const BadgeGroup = ({values, selectedValue, setSelectedValue}) => {
  return (
    <View style={styles.row}>
      {values.map(value => (
        <TouchableOpacity
          key={value.name}
          onPress={() => value.action(value.name)}
          style={[
            styles.button,
            selectedValue === value.name && styles.selected,
          ]}>
          <Text
            style={[
              styles.buttonLabel,
              selectedValue === value.name && styles.selectedLabel,
            ]}>
            {value.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
export default BadgeGroup;
