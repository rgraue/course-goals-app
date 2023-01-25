import { StyleSheet } from 'react-native';

export const inputStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: '5%',
    marginRight: '5%',
    marginBottom: '5%',
    marginTop: '15%',
    justifyContent: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  textInput: {
    flex: 1,
    width: '60%',
    borderBottomColor: '#cccccc',
    borderBottomWidth: 1,
    textAlign: 'center',
    marginEnd: '10%',
    color: 'white'
  },
});
