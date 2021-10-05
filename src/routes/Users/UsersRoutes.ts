import { Router } from "express";
import UsersController from "controllers/Users/UsersController";
import ImagesUsersRoutes from "routes/Users/ImagesUsers/ImagesUsersRoutes";
import AgesRoutes from "routes/Users/Ages/AgesRoutes";
import GendersRoutes from "routes/Users/Genders/GendersRoutes";
import PreferencesRoutes from "routes/Users/Preferences/PreferencesRoutes";

const router = Router();

router.use("/imagesAvatars", ImagesUsersRoutes);
router.use("/ages", AgesRoutes);
router.use("/genders", GendersRoutes);
router.use("/preferences", PreferencesRoutes);

router.get("/:id", UsersController.getUser);
router.put("/:id", UsersController.putUser);
router.delete("/:id", UsersController.deleteUser);

export default router;
