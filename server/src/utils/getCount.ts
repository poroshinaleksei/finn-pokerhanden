import { Card } from '../types/card';
import { Count } from '../types/counts';

const rankMap: { [key: string]: number } = {
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
  t: 10,
  j: 11,
  q: 12,
  k: 13,
  a: 14,
};

const counts = (arr: string[]): { [key: string]: number } => {
  return arr.reduce((acc: { [key: string]: number }, item: string) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});
};

const rankValue = (rank: string): number => {
  if (!rankMap[rank]) throw new Error(`Unknown rank: ${rank}`);
  return rankMap[rank];
};

const isStraightHand = (ranks: string[]): boolean => {
  const rankValues = ranks.map(rankValue).sort((a, b) => a - b);
  for (let i = 0; i < rankValues.length - 1; i++) {
    if (rankValues[i + 1] - rankValues[i] !== 1) {
      return false;
    }
  }
  return true;
};

export const getCount = (hand: Card[]): Count => {
  if (hand.length !== 5) return Count.InvalidHandSize;

  const ranks = hand.map((card) => card.rank);
  const suits = hand.map((card) => card.suit);

  const rankCounts = counts(ranks);
  const suitCounts = counts(suits);

  const isFlush = Object.keys(suitCounts).length === 1;
  const isStraight = isStraightHand(ranks);

  if (isStraight && isFlush) return Count.StraightFlush;
  if (Object.values(rankCounts).includes(4)) return Count.FourOfAKind;
  if (Object.values(rankCounts).includes(3) && Object.values(rankCounts).includes(2)) return Count.FullHouse;
  if (isFlush) return Count.Flush;
  if (isStraight) return Count.Straight;
  if (Object.values(rankCounts).includes(3)) return Count.ThreeOfAKind;
  if (Object.values(rankCounts).filter((count) => count === 2).length === 2) return Count.TwoPairs;
  if (Object.values(rankCounts).includes(2)) return Count.OnePair;

  return Count.HighCard;
};
