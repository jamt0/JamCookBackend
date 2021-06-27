import { Router } from "express";
import IngredientsController from "controllers/Ingredients/IngredientsController";

const router = Router();

router.get("/", IngredientsController.getIngredients);

export default router;
