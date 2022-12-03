import axios from "axios";

const baseUrl = "http://localhost:5001/login"

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

const login = async (username, password) => {
    try {
        const response = await axios.post(`${baseUrl}?username=${username}&password=${password}`);
        return response.data;
    } catch (e) {
        const error = e.message;
        console.log(error)
    }

}

// eslint-disable-next-line
export default { login };
