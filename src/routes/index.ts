import { Router } from 'express';
import AuthRoutes from 'routes/Auth/AuthRoutes';
import UserRoutes from 'routes/Users/UsersRoutes';
import RecipesRoutes from 'routes/Recipes/RecipesRoutes';
import AgesRoutes from 'routes/Users/Ages/AgesRoutes';
import GendersRoutes from 'routes/Users/Genders/GendersRoutes';

const routes = Router();

routes.use('/api/auth', AuthRoutes);
routes.use('/api/users', UserRoutes);
routes.use('/api/recipes', RecipesRoutes);
routes.use('/api/genders', GendersRoutes);
routes.use('/api/ages', AgesRoutes);

export default routes;