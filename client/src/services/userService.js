import axios from "axios";
const baseUrl = "/api/users";

let token = null;

// const setUser = (user) => {
//   window.localStorage.setItem("loggedAppUser", JSON.stringify(user));
//   token = user.token;
// };

// const getUser = () => {
//   const loggedUserJSON = window.localStorage.getItem("loggedAppUser");
//   if (loggedUserJSON) {
//     const user = JSON.parse(loggedUserJSON);
//     token = user.token;
//     return user;
//   }
//   return null;
// };

// const clearUser = () => {
//   localStorage.clear();
//   token = null;
// };

const getToken = () => token;

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const editAddress = async (id, user) => {
    const response = await axios.get(`${baseUrl}/${id}`, user);
    return response.data
}

const editEmail = async (id, user) => {
    const response = await axios.get(`${baseUrl}/${id}`, user);
    return response.data
}

// eslint-disable-next-line
export default { setUser, getUser, clearUser, getToken, getAll, editAddress, editEmail };
