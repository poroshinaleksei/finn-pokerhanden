import express from 'express';
import { WinningResult } from '../types/winningResult';
import { getWinningHand } from '../utils/getWinningHand';
import { Card } from '../types/card';
import { isArrayOfArrayOfCards } from '../utils/checkCardType';

const router = express.Router();

router.post<{}, WinningResult | string>('/', (req, res) => {
  if (!isArrayOfArrayOfCards(req.body)) {
    return res.status(400).send('Invalid body type');
  }

  const requestBody = req.body as Card[][];
  console.log(requestBody);
  const winner = getWinningHand(requestBody);

  res.json(winner);
});

export default router;
