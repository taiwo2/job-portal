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
  const user = JSON.parse(localStorage.getItem("user"))

  dispatch({ type: "LOADING", payload: true });
  try {
    await axios.post("/jobs/applyobs", {job, user});
    message.success("Apply successfully");
    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
  }
};