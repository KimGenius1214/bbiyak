import { useQuery } from "react-query";
import { searchApi } from "../../service/movieApi";

export default function useMovieSearch(query) {
  const queryFn = () => searchApi(query);
  const { isLoading, isError, data } = useQuery(
    ["searchMovie", query],
    queryFn,
    { enabled: Boolean(query) }
  );

  return {
    isLoading,
    isError,
    data: data,
  };
}
