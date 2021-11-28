import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  separator: {
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    marginVertical: 5,
  },

  title: {
    fontWeight: 'bold',
  },
  price: {
    color: 'black',
  },
});

export default styles;
