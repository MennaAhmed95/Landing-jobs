import { combineReducers } from "redux";
import jobReducer from "./Jobs/reducer";
import candidateReducer from "./Candidates/reducer";

export default combineReducers({
  jobReducer,
  candidateReducer,
});
