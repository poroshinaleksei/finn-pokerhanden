import express from 'express';

import MessageResponse from '../interfaces/MessageResponse';
import generateHands from './generateHands';
import getSavedhands from './getSavedhands';
import getWinner from './getWinner';
import clearDb from './clearDb';

const router = express.Router();

router.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'API - OK',
  });
});

router.use('/genereteHands', generateHands);
router.use('/getSavedhands', getSavedhands);
router.use('/getWinner', getWinner);
router.use('/clearDb', clearDb);

export default router;
