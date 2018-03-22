export const CREATE_DECK = 'CREATE_DECK';

export function createDeck(deck) {
  return { type: CREATE_DECK, deck }
};
