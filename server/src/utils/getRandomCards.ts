import { Card } from '../types/card';

const suits = ['s', 'h', 'r', 'k'];
const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', 't', 'j', 'q', 'k', 'a'];

const getRandomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomSuit = (): string => suits[getRandomNumber(0, suits.length - 1)];

const getRandomRank = (): string => ranks[getRandomNumber(0, ranks.length - 1)];

export const getFiveRandomCards = (): Card[] =>
  Array.from({ length: 5 }, () => ({
    rank: getRandomRank(),
    suit: getRandomSuit(),
  }));
