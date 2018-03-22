import React from 'react';
import { View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './app/reducers';
import Decks from './app/screens/Decks';
import MainNavigation from './app/components/MainNavigation';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1, justifyContent: "center", paddingTop: 20}}>
          <MainNavigation />
        </View>
      </Provider>
    );
  }
}
