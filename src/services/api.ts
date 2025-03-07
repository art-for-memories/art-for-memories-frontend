import axios from "axios";

const apiURL = process.env.BACKEND_SERVER_URL;

const api = axios.create({
  baseURL: `${apiURL}`,
});

export default api;
