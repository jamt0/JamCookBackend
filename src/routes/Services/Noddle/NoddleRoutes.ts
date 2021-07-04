import { Router } from "express";
import NoddleController from "controllers/Services/Noddle/NoddleController";

const router = Router();

router.get("/", NoddleController.getRecipes);

export default router;
