import express  from "express";
import { login, register, updateUser } from "../controller/user.js";

const router = express.Router();

router.post('/register',register) // get jobs
router.post('/', login)
router.post('/updates', updateUser)

export default router