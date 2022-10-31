import axios from "axios";
import axiosInstance from "./index";

export const latestApi = () => axiosInstance.get("/movie/latest");
export const latestApi2 = () =>
  axios.get(
    "https://api.themoviedb.org/3/movie/latest?api_key=ccb8fb32b19a9485a9330d2211a8443e"
  );
export const upcomingApi = () => axiosInstance.get("/movie/upcoming");
export const nowPlayingApi = () => axiosInstance.get("/movie/now_playing");
export const topRatedApi = () => axiosInstance.get("/movie/top_rated");
export const popularApi = () => axiosInstance.get("/movie/popular");
export const detailApi = (movieId) => axiosInstance.get(`/movie/${movieId}`);
export const similarApi = (movieId) =>
  axiosInstance.get(`/movie/${movieId}/similar`);
export const searchApi = (query) =>
  axiosInstance.get(`/search/movie?query=${query}`);
