import express  from "express";
import { getJobs, createJobs,editJobs } from "../controller/job.js";

const router = express.Router();

router.get('/',getJobs) // get jobs
router.post('/createjobs', createJobs)
router.post('/editjobs', editJobs)

export default router