import { Router } from 'express';
import ComensalsController from 'controllers/Users/Preferences/Comensals/ComensalsController';

const router = Router();

router.get("/:userId", ComensalsController.getComensalsUser);

export default router;