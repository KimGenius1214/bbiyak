import { useQuery } from "react-query";
import { topRatedApi } from "../../../service/movieApi";

export default function useTopRateMovie() {
  return useQuery("topRate", topRatedApi);
}
