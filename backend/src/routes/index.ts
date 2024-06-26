import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send('Welcome to the API');
});

router.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});

router.get('/courses', (req, res) => {
  const courses = [
    { id: 1, title: 'Course 1', author: 'Author 1', lessons: 1, time: '10', likes: 100 },
    { id: 2, title: 'Course 2', author: 'Author 2', lessons: 2, time: '10', likes: 200 },
  ];
  res.json(courses);
});

export default router;
