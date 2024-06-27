import express from 'express';
import { HandResponse } from '../types/handResponse';
import { hands } from '../models/hands.model';

const router = express.Router();

router.get<{}, HandResponse[]>('/', async (req, res) => {
  const result = await hands.find().toArray();

  res.json(result);
});

export default router;
