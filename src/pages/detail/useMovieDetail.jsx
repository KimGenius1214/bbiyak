import { useQuery } from "react-query";
import { detailApi, similarApi } from "../../service/movieApi";

export default function useMovieDetail(id) {
  const queryFn = () => detailApi(id);
  const { isLoading, isError, data } = useQuery(["moveiDetail", id], queryFn);

  return {
    isLoading,
    isError,
    data: data,
  };
}
