import axios from "axios";

const request = axios.create({
    baseURL: "http://codercba.com:9002",
    timeout: 30000,
})

export default request;