import mongoose from 'mongoose';

const JobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  salaryFrom: {
    type: String,
    required: true,
  },
  salaryTo: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  smallDescription: {
    type: String,
    required: true,
  },
  fullDescription: {
    type: String,
    required: true,
  },
  minimumQualification: {
    type: String,
    required: true
  },
  skillsRequired: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  companyDescription: {
    type: String,
    required: true
  },
  appliedCandidates: {
    type: [],
    required: true
  },
  postedBy: {
    type: String,
    required: true
  }
},{timestamps: true})

const jobSchema = mongoose.model('job', JobSchema)

export default jobSchema