import { Router } from 'express';
import { UserService } from '../services/user.service';

const router = Router();
const userService = new UserService();

router.get('/all', async function (req, res) {
    try {
        const users = await userService.getAllUsers();
        res.json(users);
    } catch (error) {
        const err = error as Error;
        res.status(500).json({
            message: err.message
        });
    }
  });

export default router;
