import axios from "axios";

const baseUrl = "http://localhost:5001/user"

const register = async (user) => {

    try {
        const response = await axios.post(baseUrl, user);
        return response.data;
    } catch (e) {
        const error = e.message;
        console.log(error)
    }

}

// eslint-disable-next-line
export default { register };
