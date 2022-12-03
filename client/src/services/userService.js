import axios from "axios";
const baseUrl = "/api/users";

const getAccounts = async (id) => {
  let data = null;
  let error = null;

  try {
    const response = await axios.get(`${baseUrl}/account?id=${id}`);
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
