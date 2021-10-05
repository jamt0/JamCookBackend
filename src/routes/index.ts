import { Router } from "express";
import AuthRoutes from "routes/Auth/AuthRoutes";
import UserRoutes from "routes/Users/UsersRoutes";
import RecipesRoutes from "routes/Recipes/RecipesRoutes";
import IngredientsRoutes from "routes/Ingredients/IngredientsRoutes";
import ServicesRoutes from "routes/Services/ServicesRoutes";

const routes = Router();

routes.use("/api/auth", AuthRoutes);
routes.use("/api/users", UserRoutes);
routes.use("/api/recipes", RecipesRoutes);
routes.use("/api/ingredients", IngredientsRoutes);
routes.use("/api/services", ServicesRoutes);

export default routes;
