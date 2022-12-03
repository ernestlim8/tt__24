import axios from "axios";
const baseUrl = "/api/login";


const login = async (username, password) => {
  const response = await axios.get(baseUrl, {params: {username, password}});
  return response.data;
};


// eslint-disable-next-line
export default {
  login,
};

