import { Router } from 'express';
import AuthRoutes from './AuthRoutes';
import UserRoutes from './UsersRoutes';
import RecipesRoutes from './RecipesRoutes';

const routes = Router();

routes.use('/api/auth', AuthRoutes);
routes.use('/api/users', UserRoutes);
routes.use('/api/recipes', RecipesRoutes);

export default routes;
