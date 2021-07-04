import { Router } from "express";
import RecipesController from "controllers/Recipes/RecipesController";
import ImagesRecipesRoutes from "routes/Recipes/ImagesRecipes/ImagesRecipesRoutes";

const router = Router();

router.use("/images", ImagesRecipesRoutes);

router.get("/search", RecipesController.getRecipesSearch);
router.get("/explore", RecipesController.getRecipesExplore);
router.get("/list/:id", RecipesController.getRecipesList);
router.get("/:id", RecipesController.getRecipe);

export default router;
