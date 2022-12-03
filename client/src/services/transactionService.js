import axios from "axios";
const baseUrl = "/api/user/transaction";


const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const create = async (newObject) => {
  const response = await axios.post(baseUrl, newObject);
  return response.data;
};

const remove = async (id) => {
  const response = await axios.delete(`${baseUrl}/${id}`);
  return response.data;
};

// eslint-disable-next-line
export default {
  getAll,
  create,
  remove,
};

