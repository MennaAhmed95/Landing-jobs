import axios from "axios";

export const getAllJobsAsync = async () => {
  const response = await axios.get(
    `https://6251492bdfa31c1fbd6bcc26.mockapi.io/jobs`
  );
  console.log(response.data, "from api jobs");
  return response.data;
};
