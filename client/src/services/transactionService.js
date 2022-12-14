import axios from "axios";
const baseUrl = "http://localhost:5003/user/transaction";

const getTransactions = async (id, page) => {
  let data = null
  let error = null

  try {
    const response = await axios.get(`${baseUrl}/${id}/${page}`);
    data = response.data
  } catch (err) {
    error = err.message()
  }

  return { data, error }
};

const postDeleteTransaction = async (transaction, id) => {
  let data = null;
  let error = null;

  try {
    const response = await axios.post(baseUrl, transaction);
    data = response.data;

  } catch (e) {
    error = e.message;
  }
  return { data, error }
}

const postNewTransaction = async (id, transaction) => {
  let data = null
  let error = null

  try {
    const response = await axios.post(baseUrl, transaction);
    data = response.data
  } catch (err) {
    error = err.message()
  }

  return { data, error }
};

// const create = async (newObject) => {
//   const response = await axios.post(baseUrl, newObject);
//   return response.data;
// };
//
// const remove = async (id) => {
//   const response = await axios.delete(`${baseUrl}/${id}`);
//   return response.data;
// };

// eslint-disable-next-line
export default {
  getTransactions,
  postNewTransaction,
  postDeleteTransaction,
};


// get bank account details


