import express from 'express';

import MessageResponse from '../interfaces/MessageResponse';
import hand from './hand';

const router = express.Router();

router.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/hand', hand);

export default router;
