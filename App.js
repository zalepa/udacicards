import React from 'react';
import { View } from 'react-native';
import Decks from './app/screens/Decks';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Decks/>
      </View>
    );
  }
}
