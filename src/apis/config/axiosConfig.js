import axios from "axios";
import { BASE_URL } from "../../utils/apiConstants";
// import { API_PATH } from "../../constants/apiConstant";

export const api = axios.create({
  withCredentials: false,
  baseURL: BASE_URL,
});

const errorHandler = (error) => {
  const statusCode = error.response?.status;

  if (statusCode && statusCode !== 401) {
    console.error(error);
  }

  return Promise.reject(error);
}

api.interceptors.response.use(undefined, (error) => {
  return errorHandler(error);
});