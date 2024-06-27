import express from 'express';
import { getFiveRandomCards } from '../utils/getRandomCards';
import { HandResponse } from '../types/handResponse';
import { getCount } from '../utils/getCount';
import { hands } from '../models/hands.model';

const router = express.Router();

router.get<{}, HandResponse>('/', async (req, res) => {
  const cards = getFiveRandomCards();
  const count = getCount(cards);
  const hand: HandResponse = {
    cards,
    count,
  };
  await hands.insertOne(hand);
  res.json(hand);
});

export default router;
