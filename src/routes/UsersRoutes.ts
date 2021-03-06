import { Router } from 'express';
import UsersController from '../controllers/Users/UsersController';
import { checkJwt} from '../middlewares/jwt';

const router = Router();

router.get("/getUsers", [ checkJwt ], UsersController.getUsers);
router.post("/createUser", UsersController.createUser);
router.get("/readUser", UsersController.readUser);
router.post("/updateUser", UsersController.updateUser);
router.post("/deleteUser", UsersController.deleteUser);

export default router;