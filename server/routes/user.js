import express from "express";
import { getAllUsers, login, register, updateUser } from "../controller/user.js";

const router = express.Router();

router.get("/",getAllUsers)
router.post("/register", register);
router.post("/", login);
router.post("/updates", updateUser);

export default router;
