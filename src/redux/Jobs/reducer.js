import { GET_Jobs } from "../actionTypes";

const INITIAL_STATE = {
  allJobs: {
    createdAt: "2022-04-09T04:49:59.399Z",
    jobtitle: "Principal Assurance Supervisor",
    companyName: "Dietrich - Koss",
    location: "Avon",
    jobType: "Strosinbury",
    id: "1",
  },
};

const jobReducer = (state = INITIAL_STATE, action) => {
  console.log(action, "IN reducer job");
  switch (action.type) {
    case GET_Jobs:
      return { ...state, allJobs: action.payload };
    default:
      return state;
  }
};

export default jobReducer;
