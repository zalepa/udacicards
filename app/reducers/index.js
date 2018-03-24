import { createStore } from 'react';
import { combineReducers } from 'redux';

import { CREATE_DECK, ADD_CARD, EDIT_DECK, DELETE_DECK } from '../actions';

function deckReducer(state = [], action) {
  switch (action.type) {
    case CREATE_DECK:
      action.deck.key = state.length + 1;
      return [...state, action.deck];
    case ADD_CARD:
      return state.map(deck => {
        if (deck.key === action.key) deck.cards.push(action.card)
        return deck;
      });
    case EDIT_DECK:
      return state.map(deck => {
        if (deck.key === action.deck.key) {
          deck.title = action.deck.title
        }
        return deck;
      });
    case DELETE_DECK:
      return state.filter(d => {
        if (d.key !== action.key) return d;
      });
    default:
      return state;
  }
}

export default combineReducers({ decks: deckReducer });
