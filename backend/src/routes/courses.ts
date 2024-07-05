import { Router } from 'express';
import { Coursecontroller } from '../controllers/CourseController';

const router = Router();
const courseController = new Coursecontroller();

router.get('/details/:userId', async function (req, res) {
    try {
        const userCourseDetails = await courseController.getUserCourseDetails(parseInt(req.params.userId))
        res.json(userCourseDetails);
    } catch (error) {
        const err = error as Error;
        res.status(500).json({
            message: err.message
        });
    }
  });

export default router;
