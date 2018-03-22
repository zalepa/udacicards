import { createStore } from 'react';

import { CREATE_DECK } from '../actions';

function deckReducer(state = [], action) {
  switch (action.type) {
    case CREATE_DECK:
      return [...state, action.deck];
    default:
      return state;
  }
}

export default deckReducer;
