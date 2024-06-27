import express from 'express';
import { Count } from '../types/counts';
import { getRandomCards } from '../utils/getRandomCards';
import { HandResponse } from '../types/handResponse';

const router = express.Router();

router.get<{}, HandResponse>('/', (req, res) => {
  const hand: HandResponse = {
    cards: getRandomCards(),
    count: Count.Straight,
  };
  res.json(hand);
});

export default router;
