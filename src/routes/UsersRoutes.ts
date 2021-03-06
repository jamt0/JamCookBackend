import express from "express";
import UsersController from '../controllers/Users/UsersController';

const router = express.Router();

router.get("/getUsers", UsersController.getUsers);
router.post("/createUser", UsersController.createUser);
router.get("/readUser", UsersController.readUser);
router.post("/updateUser", UsersController.updateUser);
router.post("/deleteUser", UsersController.deleteUser);

module.exports = router;