import express from 'express';
import { getFiveRandomCards } from '../utils/getRandomCards';
import { HandResponse } from '../types/handResponse';
import { getCount } from '../utils/getCount';

const router = express.Router();

router.get<{}, HandResponse>('/', (req, res) => {
  const cards = getFiveRandomCards();
  const count = getCount(cards);
  const hand: HandResponse = {
    cards,
    count,
  };

  res.json(hand);
});

export default router;
