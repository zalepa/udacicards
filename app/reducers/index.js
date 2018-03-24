import { createStore } from 'react';
import { combineReducers } from 'redux';

import { CREATE_DECK, ADD_CARD } from '../actions';

function deckReducer(state = [], action) {
  switch (action.type) {
    case CREATE_DECK:
      action.deck.key = state.length + 1;
      return [...state, action.deck];
    case ADD_CARD:
      console.log(action)
      console.log(state)
      let newState = state.slice(0);
      return newState.map(deck => {
        if (deck.key === action.key) deck.cards.push(action.card)
        return deck;
      });
    default:
      return state;
  }
}

export default combineReducers({ decks: deckReducer });
