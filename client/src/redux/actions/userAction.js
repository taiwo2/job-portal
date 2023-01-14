import { message } from "antd";
import axios from "axios";

export const registerUser = (values) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    await axios.post("/users/register", values);
    message.success("Register Successfully");
    setTimeout(() => {
      window.location.href = "/login";
    }, 1000);
    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    message.error("something went Wrong try again");
    dispatch({ type: "LOADING", payload: false });
  }
};
export const loginUser = (values) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const user = await axios.post("/users/register", values);
    message.success("Login Successfully");
    localStorage.setItem("user", JSON.stringify(user.data))
    
    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    message.error("Invalid Username or Password");
    dispatch({ type: "LOADING", payload: false });
  }
};

export const updateUser = (values) => async (dispatch) => {
  const userId = JSON.parse(localStorage.getItem("user"))._id
  values._id = userId
  dispatch({ type: "LOADING", payload: true });
  try {
    const user = await axios.post("/users/updates", values);
    message.success("Update Successfully");
    localStorage.setItem("user", JSON.stringify(user.data))
    setTimeout(() => {
      window.location.reload();
    }, 1000);
    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    message.error("something wrong Try a agan");
    dispatch({ type: "LOADING", payload: false });
  }
};

export const getallUsers = () => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const response = await axios.get("/users");
    dispatch({ type: "GET_ALL_USERS", payload: response.data });
    console.log('taia',response.data)
    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
  }
};