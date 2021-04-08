import { Router } from 'express';
import ImagesAvatarsRoutes from 'routes/Images/Avatars/ImagesAvatarsRoutes';
import ImagesRecipesRoutes from 'routes/Images/Recipes/ImagesRecipesRoutes';

const routes = Router();

routes.use('/avatars', ImagesAvatarsRoutes);
routes.use('/recipes', ImagesRecipesRoutes);

export default routes;