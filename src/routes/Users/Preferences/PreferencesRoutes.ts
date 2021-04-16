import { Router } from 'express';
import AllergiesRoutes from 'routes/Users/Preferences/Allergies/AllergiesRoutes';
import ComensalsRoutes from 'routes/Users/Preferences/Comensals/ComensalsRoutes';
import DietsRoutes from 'routes/Users/Preferences/Diets/DietsRoutes';
import DislikeIngredientsRoutes from 'routes/Users/Preferences/DislikeIngredients/DislikeIngredientsRoutes';
import KitchenLevelsRoutes from 'routes/Users/Preferences/KitchenLevels/KitchenLevelsRoutes';
import ObjectivesRoutes from 'routes/Users/Preferences/Objectives/ObjectivesRoutes';

const router = Router();

router.use('/allergies', AllergiesRoutes);
router.use('/comensals', ComensalsRoutes);
router.use('/diets', DietsRoutes);
router.use('/dislikeIngredients', DislikeIngredientsRoutes);
router.use('/kitchenLevels', KitchenLevelsRoutes);
router.use('/objectives', ObjectivesRoutes);

export default router;