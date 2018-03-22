import React from 'react';
import { View } from 'react-native';
import Decks from './app/screens/Decks';
import MainNavigation from './app/components/MainNavigation';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: "center", paddingTop: 20}}>
        <MainNavigation />
      </View>
    );
  }
}
