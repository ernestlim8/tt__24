import axios from "axios";
const baseUrl = "/api/user/transaction";

const getTransaction = async (transaction) => {
  let data = null
  let error = null

  try {
    const response = await axios.post(baseUrl, transaction);
    data = transaction.data
  } catch (err) {
    error = err.message()
  }

  return { data, error }
};

const postDeleteTransaction = async (transaction) => {

}

const postNewTransaction = async (transaction) => {
  let data = null
  let error = null

  try {
    const response = await axios.post(baseUrl, transaction);
    data = transaction.data
  } catch (err) {
    error = err.message()
  }

  return { data, error }
};

const postDeleteTransaction = async (transaction) => {
  let data = null
  let error = null

  try {
    const response = await axios.post(baseUrl, transaction);
    data = transaction.data
  } catch (err) {
    error = err.message()
  }

  return { data: data, error: error }
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
  getTransaction,
  postNewTransaction,
  postDeleteTransaction
};


// get bank account details


