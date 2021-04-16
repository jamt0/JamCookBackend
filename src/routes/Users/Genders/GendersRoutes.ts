import { Router } from 'express';
import GendersController from 'controllers/Users/Genders/GendersController';

const router = Router();

router.get("/initialize", GendersController.initialize);
router.get("/", GendersController.getGenders);

export default router;