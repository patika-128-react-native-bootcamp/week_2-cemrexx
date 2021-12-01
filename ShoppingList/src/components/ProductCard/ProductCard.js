import React from 'react';
import {View, Text} from 'react-native';
import styles from './ProductCard.style';

const Separator = () => <View style={styles.separator} />;

const ProductCard = ({name, price}) => {
  return (
    <>
      <>
        <View style={styles.item}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.price}>{price} TL</Text>
        </View>
        <Separator />
      </>
    </>
  );
};

export default ProductCard;
