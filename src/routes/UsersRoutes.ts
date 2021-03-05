import express from "express";
import UsersController from '../controllers/Users/UsersController';

const router = express.Router();

router.post("/getUsers", UsersController.getUsers);

module.exports = router;