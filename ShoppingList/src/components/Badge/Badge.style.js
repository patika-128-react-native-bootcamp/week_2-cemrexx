import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 4,
    backgroundColor: 'white',
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '30%',
    alignItems: 'center',
  },
  selected: {
    backgroundColor: 'gray',
    borderWidth: 1,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: 'black',
  },
  selectedLabel: {
    color: 'white',
  },
});

export default styles;
