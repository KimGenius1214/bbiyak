import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: `${process.env.REACT_APP_API_HOST}`,
  baseURL: `https://api.themoviedb.org/3`,
  params: {
    api_key: "ccb8fb32b19a9485a9330d2211a8443e",
    language: "ko-KR;",
  },
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
