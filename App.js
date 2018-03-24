import React from 'react';
import { View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';
import reducer from './app/reducers';
import Decks from './app/screens/Decks';
import MainNavigation from './app/components/MainNavigation';

console.ignoredYellowBox = ['Remote debugger'];

const persistConfig = {
  key: 'udacimeals:root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer, applyMiddleware(logger));
const persistor = persistStore(store)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <View style={{flex: 1, justifyContent: "center", paddingTop: 20}}>
            <MainNavigation />
          </View>
        </PersistGate>
      </Provider>
    );
  }
}
