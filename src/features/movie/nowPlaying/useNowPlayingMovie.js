import { useQuery } from "react-query";
import { nowPlayingApi } from "../../../service/movieApi";

export default function useNowPlayingMovie() {
  return useQuery("nowPlaying", nowPlayingApi);
}
