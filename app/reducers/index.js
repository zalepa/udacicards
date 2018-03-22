import { createStore } from 'react';

import { CREATE_DECK } from '../actions';

function reducer(state = [], action) {
  switch (action.type) {
    case CREATE_DECK:
      action.deck.key = state.length + 1;
      return [...state, action.deck];
    default:
      return state;
  }
}

export default reducer;
