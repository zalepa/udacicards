export const CREATE_DECK = 'CREATE_DECK';
export const ADD_CARD = 'ADD_CARD';

export function createDeck(deck) {
  return { type: CREATE_DECK, deck }
};

export function addCard(key, card) {
  return { type: ADD_CARD, key, card }
};
