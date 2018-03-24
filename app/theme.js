import { StyleSheet } from 'react-native';

const BASE_COLOR = 'tomato';
const BASE_BORDER_COLOR = 'gray';
const WHITE = 'white';
const ALT_COLOR = '#FFBF47';
const DANGER_COLOR = '#8C1500';

const theme = StyleSheet.create({
  button: {
    backgroundColor: BASE_COLOR,
    margin: 10,
    borderRadius: 10,
    padding: 7,
  },
  buttonText: {
    color: WHITE,
    fontSize: 19,
    padding: 7,
    textAlign: 'center'
  },
  textfield: {
    height: 40,
    borderColor: BASE_BORDER_COLOR,
    borderWidth: 1,
    padding: 10,
    margin: 10,
    fontSize: 15
  },
  altButton: {
    backgroundColor: ALT_COLOR
  },
  dangerButton: {
    backgroundColor: DANGER_COLOR
  }
});

export default theme;
