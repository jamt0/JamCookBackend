import { Router } from 'express';
import KitchenLevelsController from 'controllers/Users/Preferences/KitchenLevels/KitchenLevelsController';

const router = Router();

router.get("/initialize", KitchenLevelsController.initialize);

export default router;