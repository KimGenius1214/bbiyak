import { useQuery } from "react-query";
import { upcomingApi } from "../../../service/movieApi";

export default function useUpcomingMovie() {
  return useQuery("upcoming", upcomingApi);
}
