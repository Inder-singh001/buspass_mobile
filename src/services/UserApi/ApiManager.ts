import axios from "axios";

const ApiManager = axios.create({
    baseURL: "https://amr.sytes.net",
    responseType: 'json',
    withCredentials: true,
})

export default ApiManager;