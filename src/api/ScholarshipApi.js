import axios from "axios";

export const getSchList = async () => {
  const all_sch = await axios.get("http://localhost:3001/api/scholarships/");
  return all_sch;
};

export const getSingleSch = async (id) => {
  const sch_data = await axios.get(
    `http://localhost:3001/api/scholarships/${id}`
  );
  return sch_data;
};
