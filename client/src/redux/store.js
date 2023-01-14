import RootReducer from "./RootReducer";
import { combineReducers } from "redux";
import {createStore,applyMiddleware } from "redux";
import logger from "redux-logger"
import thunk from 'redux-thunk'
import { jobReducers } from "./reducers/jobReducers";
import { loaderReducer } from "./reducers/LoaderReducer";
import { usersReducer } from "./reducers/usersReducer";
const storeReducers = combineReducers({
  jobLists: jobReducers,
  loader: loaderReducer,
  users: usersReducer
})

export const middleware = [thunk,logger]

const store =  createStore(storeReducers,applyMiddleware(...middleware),
// +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store