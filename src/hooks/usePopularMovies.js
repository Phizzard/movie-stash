import { useQuery } from "react-query";
import fetchPopularMovies from "./../api/fetchPopularMovies";

function usePopularMovies() {
  const { isLoading, data, error } = useQuery(
    "popularMovies",
    fetchPopularMovies
  );
  return { data, isLoading, error };
}

export default usePopularMovies;
