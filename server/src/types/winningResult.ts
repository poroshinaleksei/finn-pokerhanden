import { Card } from './card';
import { Count } from './counts';

export interface WinningResult {
  winningHandIndex: number;
  winningHand: Card[];
  result: Count;
}
