import { Router } from 'express';

const router = Router();

const userProgress = {
  userId: 1,
  progress: [
    { courseId: 1, completedLessons: 1, totalLessons: 10 },
    { courseId: 2, completedLessons: 2, totalLessons: 8 },
    { courseId: 3, completedLessons: 3, totalLessons: 5 }
  ]
};

router.get('/', (req, res) => {
  res.json(userProgress);
});

export default router;
