import { Router } from 'express';
import AgesController from 'controllers/Ages/AgesController';

const router = Router();

router.get("/initialize", AgesController.initialize);

export default router;