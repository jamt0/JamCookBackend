import { Router } from 'express';
import AuthRoutes from 'routes/AuthRoutes';
import UserRoutes from 'routes/UsersRoutes';
import RecipesRoutes from 'routes/RecipesRoutes';

const routes = Router();

routes.use('/api/auth', AuthRoutes);
routes.use('/api/users', UserRoutes);
routes.use('/api/recipes', RecipesRoutes);

export default routes;
