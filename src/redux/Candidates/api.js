import axios from "axios";

export const getAllCandidatesAsync = async () => {
  const response = await axios.get(
    `https://6251492bdfa31c1fbd6bcc26.mockapi.io/candidates`
  );
  console.log(response.data, "from api Candidates");
  return response.data;
};
