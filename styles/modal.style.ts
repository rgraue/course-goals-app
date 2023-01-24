import { StyleSheet } from 'react-native';

export const modalStyle = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D9C3D9',
    height: '12%',
    marginTop: '70%',
    margin: '5%',
    borderRadius: 5,
  },
  textContainer: {
    flexDirection: 'row',
    margin: '3%',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalText: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  buttonView: {
    marginLeft: '5%',
    marginRight: '5%',
  },
});
