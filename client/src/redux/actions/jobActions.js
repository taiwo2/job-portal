import axios from "axios";
import { message } from "antd";

export const getallJobs = () => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const response = await axios.get("/jobs");
    dispatch({ type: "GET_ALL_JOBS", payload: response.data });
    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
  }
};

export const createJobs = (values) => async (dispatch) => {
  values.postedBy = JSON.parse(localStorage.getItem("user"))._id;

  dispatch({ type: "LOADING", payload: true });
  try {
    await axios.post("/jobs/createjobs", values);
    message.success("updates successfully");
    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
  }
};

export const editJobs = (values) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    await axios.post("/jobs/editjobs", values);
    message.success("Edited successfully");
    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
  }
};

export const applyJobs = (job) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  const user = JSON.parse(localStorage.getItem("user"));

  try {
    await axios.post("/jobs/applyjobs", { job, user });

    dispatch({ type: "LOADING", payload: false });
    message.success("Apply successfully");
    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
  }
};

export const searchJobs = (searchKey) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const response = await axios.get("/jobs");
    const filterJobs = response.data.filter((job) =>
      job.title.toLowerCase().includes(searchKey.toLowerCase())
    );
    dispatch({ type: "GET_ALL_JOBS", payload: filterJobs });
    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
  }
};

export const sortJobs = (values) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const response = await axios.get("/jobs");
    const jobs = response.data;

    let sortjob = jobs
  
    if (values.experience !== undefined) {
      sortjob = jobs.filter((job) =>job.experience <= values.experience)
    }

    if (values.salary !== undefined) {
      sortjob = jobs.filter((job) =>job.salaryTo >= values.salary)
    }
    dispatch({ type: "GET_ALL_JOBS", payload: sortjob });
    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
  }
};