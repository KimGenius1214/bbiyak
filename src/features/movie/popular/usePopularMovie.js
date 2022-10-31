import { useQuery } from "react-query";
import { popularApi } from "../../../service/movieApi";

export default function useLatestMovie() {
  return useQuery("popularMovie", popularApi);
}
