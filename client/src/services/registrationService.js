import axios from "axios";

const baseUrl = "/api/user"

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
