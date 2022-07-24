import axios from "axios";

const client = axios.create({
    withCredentials: true,
});

export { client };
