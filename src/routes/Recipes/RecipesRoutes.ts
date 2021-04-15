import { Router } from 'express';
import RecipesController from 'controllers/Recipes/RecipesController';
import ImagesRecipesRoutes from 'routes/Recipes/ImagesRecipes/ImagesRecipesRoutes';

const router = Router();

router.use('/images', ImagesRecipesRoutes);

export default router;