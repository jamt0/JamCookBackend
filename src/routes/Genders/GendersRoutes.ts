import { Router } from 'express';
import GendersController from 'controllers/Genders/GendersController';

const router = Router();

router.get("/initialize", GendersController.initialize);

export default router;