import { Router } from 'express';
import AuthRoutes from 'routes/Auth/AuthRoutes';
import UserRoutes from 'routes/Users/UsersRoutes';
import RecipesRoutes from 'routes/Recipes/RecipesRoutes';
import AgesRoutes from 'routes/Ages/AgesRoutes';
import GendersRoutes from 'routes/Genders/GendersRoutes';
import ImagesRoutes from 'routes/Images';

const routes = Router();

routes.use('/api/auth', AuthRoutes);
routes.use('/api/users', UserRoutes);
routes.use('/api/recipes', RecipesRoutes);
routes.use('/api/images', ImagesRoutes);
routes.use('/api/genders', GendersRoutes);
routes.use('/api/ages', AgesRoutes);

export default routes;