import { Router } from 'express';
import AllergiesController from 'controllers/Users/Preferences/Allergies/AllergiesController';

const router = Router();

router.get("/", AllergiesController.getAllergies);
router.get("/:userId", AllergiesController.getAllergiesUser);

export default router;