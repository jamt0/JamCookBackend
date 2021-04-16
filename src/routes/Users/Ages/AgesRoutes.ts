import { Router } from 'express';
import AgesController from 'controllers/Users/Ages/AgesController';

const router = Router();

router.get("/initialize", AgesController.initialize);
router.get("/", AgesController.getAges);

export default router;