import axios from "axios";
const baseUrl = "http://localhost:5002/user";

const getAccounts = async (id) => {
  let data = null;
  let error = null;

  try {
    const response = await axios.get(`${baseUrl}/account/${id}`);
    data = response.data;

  } catch (e) {
    error = e.message;
  }
  return {
    data, error
  }
}

const updateUser = async (id) => {
  let data = null;
  let error = null;
  try {
    const response = await axios.put(`${baseUrl}?id=${id}`);
    data = response.data;

  } catch (e) {
    error = e.message;
  }
  return {
    data, error
  }
}

// eslint-disable-next-line
export default { getAccounts, updateUser };
