import { Router } from 'express';
import DislikeIngredientsController from 'controllers/Users/Preferences/DislikeIngredients/DislikeIngredientsController';

const router = Router();

router.get("/", DislikeIngredientsController.getDislikeIngredients);
router.get("/:userId", DislikeIngredientsController.getDislikeIngredientsUser);

export default router;