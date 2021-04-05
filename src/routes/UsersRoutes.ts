import { Router } from 'express';
import UsersController from '../controllers/Users/UsersController';
import { checkJwt} from '../middlewares/jwt';

const router = Router();

router.get("/getUsers", [ checkJwt ], UsersController.getUsers);
router.post("/createUser", UsersController.createUser);
router.get("/getUser/:id", UsersController.getUser);
router.post("/updateUser/:id", UsersController.updateUser);
router.post("/deleteUser", UsersController.deleteUser);
router.post("/updateAvatarUser/:id", UsersController.updateAvatarUser);

export default router;