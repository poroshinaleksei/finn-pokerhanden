import { Card } from '../types/card';

const isCard = (card: any): card is Card => {
  return card && typeof card.rank === 'string' && typeof card.suit === 'string';
};

export const isArrayOfArrayOfCards = (input: any): input is Card[][] => {
  return Array.isArray(input) && input.every((subArray) => Array.isArray(subArray) && subArray.every(isCard));
};
