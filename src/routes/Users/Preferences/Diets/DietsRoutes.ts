import { Router } from 'express';
import DietsController from 'controllers/Users/Preferences/Diets/DietsController';

const router = Router();

router.get("/initialize", DietsController.initialize);

export default router;