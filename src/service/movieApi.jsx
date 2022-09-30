import axiosInstance from ".";

export const latestApi = () => axiosInstance.get("/movie/latest");

export const upcomingApi = () => axiosInstance.get("/movie/upcoming");
export const nowPlatingApi = () => axiosInstance.get("/movie/now_playing");
export const topRatedApi = () => axiosInstance.get("/movie/top_rated");
export const popularApi = () => axiosInstance.get("/movie/popular");
export const detailApi = (movieId) => axiosInstance.get(`/movie/${movieId}`);
export const similarApi = (movieId) =>
  axiosInstance.get(`/movie/${movieId}/similar`);
export const searchApi = (query) =>
  axiosInstance.get(`/search/movie?query=${query}`);
