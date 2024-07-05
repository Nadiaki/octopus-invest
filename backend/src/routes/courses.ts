import { Router } from 'express';
import { Coursecontroller } from '../controllers/CourseController';

const router = Router();
const courseController = new Coursecontroller();

router.get('/all', courseController.getAllCourses);

export default router;
