import { Router } from 'express';
import ObjetivesController from 'controllers/Users/Preferences/Objectives/ObjectivesController';

const router = Router();

router.get("/initialize", ObjetivesController.initialize);
router.get("/", ObjetivesController.getObjectives);
router.get("/:userId", ObjetivesController.getObjectivesUser);

export default router;