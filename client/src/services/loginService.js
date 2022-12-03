import axios from "axios";

const baseUrl = "/api"

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

// const getToken = () => token;

const login = async (user) => {
    let data = null;
    let error = null;

    try {
        const response = await axios.post(`${baseUrl}/login`, user);
        data = response.data;

    } catch (e) {
        error = e.message;
    }
    return {
        data, error
    }
}

// eslint-disable-next-line
export default { login };
