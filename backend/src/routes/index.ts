import { Router } from 'express';
import coursesRouter from './courses';
import userProgressRouter from './userProgress';

const router = Router();

router.get('/', (req, res) => {
  res.send('Welcome to the API');
});

router.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});

router.use('/courses', coursesRouter);
router.use('/user-progress', userProgressRouter);

export default router;
