import jobSchema from "../models/job.js";
import userSchema from "../models/user.js";
export const getJobs = async (req, res) => {
  try {
    const jobs = await jobSchema.find({});

    res.status(201).json(jobs);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

export const createJobs = async (req, res) => {
  try {
    const newJobs = new jobSchema({
      ...req.body,
    });
    const savejob = await newJobs.save();
    res.status(201).json(savejob);
  } catch (error) {
    res.status(404).json(error);
  }
};

export const editJobs = async (req, res) => {
  try {
    const editjob = await jobSchema.findOneAndUpdate(
      { _id: req.body._id },
      req.body
    );
    res.status(201).json(editjob);
  } catch (error) {
    res.status(404).json(error);
  }
};
export const applyJobs = async (req, res) => {
  const {user,job} = req.body;
  try {
   const jobDetails = await jobSchema.findOne({_id: job._id})

   const appliedCandidate = {
    userId: user_id,
    appliedDates: moment().format('MM DD YYY')
   }

   jobDetails.appliedCandidates.push(appliedCandidate);
   await jobDetails.save();

   const useDetails = await userSchema.findOne({_id: user._id})
    const appliedjob = {
      jobId: job._id,
      appliedDates: moment().format('MM DD YYY')
    }

    useDetails.appliedJobs.push(appliedjob);
    await useDetails.save();
  } catch (error) {
    res.status(404).json(error);
  }
};
