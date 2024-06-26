import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send('Welcome to the API');
});

router.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});

export default router;
