import { StyleSheet } from 'react-native';

export const itemStyle = StyleSheet.create({
  container: {
    textAlign: 'left',
    padding: 5,
    marginBottom: 10,
    fontSize: 18,
    backgroundColor: 'grey',
    borderRadius: 10,
    color: 'black',
  },
  pressedItem: {
    opacity: 0.5,
  },
});
