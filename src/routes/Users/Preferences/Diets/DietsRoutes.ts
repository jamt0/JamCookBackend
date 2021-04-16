import { Router } from 'express';
import DietsController from 'controllers/Users/Preferences/Diets/DietsController';

const router = Router();

router.get("/initialize", DietsController.initialize);
router.get("/", DietsController.getDiets);
router.get("/:userId", DietsController.getDietsUser);

export default router;