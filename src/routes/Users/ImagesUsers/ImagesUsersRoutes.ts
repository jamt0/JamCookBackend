import { Router } from "express";
import ImagesUsersController from "controllers/Users/ImagesUsers/ImagesUsersController";

const router = Router();

router.get("/:id", ImagesUsersController.getImageAvatar);
router.put("/:id", ImagesUsersController.putImageAvatar);

export default router;
