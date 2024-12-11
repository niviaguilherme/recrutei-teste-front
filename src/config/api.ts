import axios from "axios";
import secureLocalStorage from "react-secure-storage";

const apiURL = process.env.REACT_APP_BACKEND_URL_API;

const api = axios.create({
  baseURL: apiURL,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded, multipart/form-data",
    "Access-Control-Allow-Origin": "*",
  },
});

api.interceptors.request.use((request) => {
  const token = secureLocalStorage.getItem("token");

  if (token) {
    request.headers.Authorization = `Bearer ${token}`;
  }

  return request;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const err = error.response.data;

    return error.response;
  }
);

export default api;
