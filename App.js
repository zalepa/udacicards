import React from 'react';
import { View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'

import { Provider } from 'react-redux';
import reducer from './app/reducers';
import Decks from './app/screens/Decks';
import MainNavigation from './app/components/MainNavigation';

console.ignoredYellowBox = ['Remote debugger'];

export default class App extends React.Component {
  render() {

    const store = createStore(reducer, applyMiddleware(logger));

    // TEMP:
    store.dispatch({
      type: 'CREATE_DECK',
      deck: {
        title: 'It works',
        cards: [
          {question: 'What is 2 + 2?', answer: '4'}
        ]
      }
    })

    return (
      <Provider store={store}>
        <View style={{flex: 1, justifyContent: "center", paddingTop: 20}}>
          <MainNavigation />
        </View>
      </Provider>
    );
  }
}
