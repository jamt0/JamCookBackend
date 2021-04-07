import { Router } from 'express';
import UsersController from 'controllers/Users/UsersController';

const router = Router();

router.get("/getUser/:id", UsersController.getUser);
router.post("/updateUser/:id", UsersController.updateUser);
router.post("/deleteUser", UsersController.deleteUser);

export default router;