import { GET_Candidates } from "../actionTypes";
import { getAllCandidatesAsync } from "./api";

export const getCandidates = () => {
  return async (dispatch) => {
    const result = await getAllCandidatesAsync();
    console.log(result, "action");
    dispatch({ type: GET_Candidates, payload: result });
  };
};
