import { useQuery } from "react-query";
import { latestApi } from "../../../service/movieApi";

export default function useLatestMovie() {
  return useQuery("latestMovie", latestApi);
}
