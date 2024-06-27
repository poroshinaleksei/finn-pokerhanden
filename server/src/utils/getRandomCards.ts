import { Card } from '../types/card';

const getRandomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomSuit = (): string => {
  const suits = ['s', 'h', 'r', 'k'];
  return suits[getRandomNumber(0, 3)];
};

const getRandomRank = (): string => {
  const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k', 'a'];
  return ranks[getRandomNumber(0, ranks.length - 1)];
};

export const getRandomCards = (): Card[] => {
  return Array.from({ length: 5 }, () => ({
    rank: getRandomRank(),
    suit: getRandomSuit(),
  }));
};
