import express from 'express';

import MessageResponse from '../interfaces/MessageResponse';
import genereteHands from './genereteHands';
import getSavedhands from './getSavedhands';

const router = express.Router();

router.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'API - OK',
  });
});

router.use('/genereteHands', genereteHands);
router.use('/getSavedhands', getSavedhands);

export default router;
