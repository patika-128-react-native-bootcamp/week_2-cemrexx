import React from 'react';
import {View, Text, FlatList} from 'react-native';
import ProductCard from '../ProductCard';

const Products = ({data}) => {
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <ProductCard name={item.name} price={item.number} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Products;
