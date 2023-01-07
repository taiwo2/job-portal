import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      default: "",
    },
    password: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      default: "",
    },
    email: { type: String, default: "" },
    phoneNumber: {
      type: String,
      default: "",
    },
    portfolio: {
      type: String,
      default: "",
    },
    about: {
      type: String,
      default: "",
    },
    address: {
      type: String,
      default: "",
    },
    project: {
      type: [],
      default: [""],
    },
    education: {
      type: [],
      default: [""],
    },
    experience: {
      type: [],
      default: [""],
    },
    skills: {
      type: [],
      default: [""],
    },
    appliedJobs: [],
  },
  { timestamps: true }
);

const userSchema = mongoose.model("userjob", UserSchema);

export default userSchema;
