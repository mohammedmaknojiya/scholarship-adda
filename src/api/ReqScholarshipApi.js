import axios from "axios";

export const ReqSch = async (data) => {
  const added_sch = await axios.post(
    "http://localhost:3001/api/scholarships/req",
    data
  );
  return added_sch;
};
