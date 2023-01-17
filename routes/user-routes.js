import express from 'express'
import { getAllUser, login, signup } from '../controllers/user-controller';

const router = express.Router();

//Get Users
router.get("/", getAllUser);

//create user
router.post("/signup", signup);

//login user
router.post("/login", login);
export default router;