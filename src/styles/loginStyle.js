import {View, Text, StyleSheet, Colors} from 'react-native';

const loginStyle = StyleSheet.create({
  formDateTime: {
    // flex: 0,
    // flexDirection: 'row',
    // alignItems: 'center',
    // backgroundColor: '#fff',
    // marginTop: 5,
    // padding: '2%',
  },
  input: {
    color: '#000',
  },
  package: {
    marginTop: '5%',
    marginBottom: '10%',
  },
  datePicker: {
    width: 320,
    height: 260,
    display: 'flex',
    alignItems: 'flex-start',
  },
  pickedDate: {
    color: '#000',
  },
  valid: {
    color: '#ff0000',
    fontSize: 12,
  },
  buttonContainer: {
    marginTop: '10%',
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#4AD482',
    width: '70%',
    padding: '2%',
    alignItems: 'center',
    borderRadius: 5,
  },
  uploadButton: {
    backgroundColor: '#4AD482',
    borderRadius: 10,
    alignItems: 'center',
    padding: '2%',
  },
  formField: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '5%',
  },
  forgotPassword: {
    marginTop: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

export default loginStyle;
