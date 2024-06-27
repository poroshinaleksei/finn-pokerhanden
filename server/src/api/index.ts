import express from 'express';

import MessageResponse from '../interfaces/MessageResponse';
import generateHands from './generateHands';
import getSavedhands from './getSavedhands';
import getWinner from './getWinner';

const router = express.Router();

router.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'API - OK',
  });
});

router.use('/genereteHands', generateHands);
router.use('/getSavedhands', getSavedhands);
router.use('/getWinner', getWinner);

export default router;
