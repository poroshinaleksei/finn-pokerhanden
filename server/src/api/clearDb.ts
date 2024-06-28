import express from 'express';
import { hands } from '../models/hands.model';

const router = express.Router();

router.get<{}>('/', async (req, res) => {
  await hands.drop();
  res.status(200).json({ message: 'Database cleared' });
});

export default router;
