import { GET_Candidates } from "../actionTypes";

const INITIAL_STATE = {
  allCandidates: {
    name: "Erma Mayer",
    avatar: "https://cdn.fakercloud.com/avatars/shaneIxD_128.jpg",
    title: "Senior Markets Associate",
    id: "1",
  },
};
const candidateReducer = (state = INITIAL_STATE, action) => {
  console.log(action, "IN reducer candidates");
  switch (action.type) {
    case GET_Candidates:
      console.log({ ...action.payload });
      debugger;

      return { ...state, allCandidates: action.payload };

    default:
      return state;
  }
};

export default candidateReducer;
