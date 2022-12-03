import axios from "axios";

const baseUrl = "http://localhost:5000/login"

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
    let data = null;
    let error = null;

    try {
        const response = await axios.get(baseUrl, {params: {username, password}});
        return response.data;
    } catch (e) {
        error = e.message;
    }
    return {
        data, error
    }
}

// eslint-disable-next-line
export default { login };
