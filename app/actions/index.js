export const CREATE_DECK = 'CREATE_DECK';
export const DELETE_DECK = 'DELETE_DECK';
export const EDIT_DECK = 'EDIT_DECK';
export const ADD_CARD = 'ADD_CARD';

export function createDeck(deck) {
  return { type: CREATE_DECK, deck }
};

export function editDeck(deck) {
  return { type: EDIT_DECK, deck }
};

export function deleteDeck(key) {
  return { type: DELETE_DECK, key }
};

export function addCard(key, card) {
  return { type: ADD_CARD, key, card }
};
