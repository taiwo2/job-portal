import express  from "express";
import { getJobs, createJobs,editJobs, applyJobs } from "../controller/job.js";

const router = express.Router();

router.get('/',getJobs) // get jobs
router.post('/createjobs', createJobs)
router.post('/editjobs', editJobs)
router.post('/applyjobs', applyJobs)

export default router