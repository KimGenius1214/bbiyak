import { useQuery } from "react-query";
import { similarApi } from "../../service/movieApi";

export default function useSimilarMovie(id) {
  const { isLoading, isError, data } = useQuery(["movieSimilar", id], () =>
    similarApi(id)
  );

  return {
    isLoading,
    isError,
    data: data,
  };
}
