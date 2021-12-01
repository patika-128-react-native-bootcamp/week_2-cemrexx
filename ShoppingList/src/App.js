import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, useColorScheme, View} from 'react-native';
import BadgeGroup from './components/Badge';
import ProductInput from './components/ProductInput';
import Products from './components/Products';

export default function () {
  const badgeValues = [
    {
      name: 'Artan',
      action: sortAsc,
    },
    {
      name: 'Azalan',
      action: sortDesc,
    },
    {
      name: 'Tarih',
      action: sortDate,
    },
  ];

  function sortAsc(val) {
    setSelectedValue(val);
    const newData = [...data];
    const ascending = newData.sort(({number: a}, {number: b}) => a - b);
    setData(ascending);
  }
  function sortDesc(val) {
    setSelectedValue(val);
    const newData = [...data];
    const desc = newData.sort(({number: a}, {number: b}) => b - a);
    setData(desc);
  }
  function sortDate(val) {
    setSelectedValue(val);
    const newData = [...data];
    const dateSort = newData.sort(function (a, b) {
      return new Date(a.date) - new Date(b.date);
    });
    setData(dateSort);
  }
  const [selectedValue, setSelectedValue] = useState();

  const [data, setData] = useState([]);

  function addHandler(name, number) {
    if (name && number) {
      const newData = [...data];
      let values = {};
      values.name = name;
      values.number = number;
      values.date = new Date();
      newData.push(values);
      setData(newData);
    }
  }

  return (
    <SafeAreaView style={[styles.container]}>
      <View>
        <BadgeGroup
          values={badgeValues}
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
        />
      </View>
      <View style={{flex: 5, backgroundColor: 'white'}}>
        <Products data={data} />
      </View>
      <View style={{flex: 2, backgroundColor: 'white'}}>
        <ProductInput addHandler={addHandler} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    flexDirection: 'column',
  },
});
