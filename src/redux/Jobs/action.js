import { GET_Jobs } from "../actionTypes";
import { getAllJobsAsync } from "./api";

export const getJobs = () => {
  return async (dispatch) => {
    const result = await getAllJobsAsync();
    console.log(result, "action");
    dispatch({ type: GET_Jobs, payload: result });
  };
};
