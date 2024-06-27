import { Card } from '../types/card';
import { Count } from '../types/counts';
import { WinningResult } from '../types/winningResult';
import { getCount } from './getCount';

export const handRankValue = (hand: Count): number => {
  switch (hand) {
    case Count.HighCard:
      return 1;
    case Count.OnePair:
      return 2;
    case Count.TwoPairs:
      return 3;
    case Count.ThreeOfAKind:
      return 4;
    case Count.Straight:
      return 5;
    case Count.Flush:
      return 6;
    case Count.FullHouse:
      return 7;
    case Count.FourOfAKind:
      return 8;
    case Count.StraightFlush:
      return 9;
    default:
      throw new Error(`Unknown hand: ${hand}`);
  }
};

export const getWinningHand = (...hands: Card[][]): WinningResult => {
  let winningHandIndex = 0;
  let winningHand = hands[0];
  let highestValue = handRankValue(getCount(hands[0]));
  let winningResult = getCount(hands[0]);

  for (let i = 1; i < hands.length; i++) {
    const handValue = handRankValue(getCount(hands[i]));
    if (handValue > highestValue) {
      winningHandIndex = i;
      winningHand = hands[i];
      highestValue = handValue;
      winningResult = getCount(hands[i]);
    }
  }

  return {
    winningHandIndex,
    winningHand,
    result: winningResult,
  };
};
