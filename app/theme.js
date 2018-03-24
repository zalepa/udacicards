import { StyleSheet } from 'react-native';

const BASE_COLOR = 'tomato';
const BASE_BORDER_COLOR = 'gray';
const WHITE = 'white';

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
});

export default theme;
