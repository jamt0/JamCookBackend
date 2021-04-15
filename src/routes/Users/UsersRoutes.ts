import { Router } from 'express';
import UsersController from 'controllers/Users/UsersController';
import ImagesAvatarsRoutes from 'routes/Users/ImagesAvatars/ImagesAvatarsRoutes';

const router = Router();

router.use('/images', ImagesAvatarsRoutes);

router.get("/getUser/:id", UsersController.getUser);
router.post("/updateUser/:id", UsersController.updateUser);
router.post("/deleteUser", UsersController.deleteUser);

export default router;