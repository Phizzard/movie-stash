import useLocalStorage from "hooks/useLocalStorage";

function useLikedMovies() {
  const [likedMovies, setLikedMovies] = useLocalStorage("likedMovies", {});

  return [likedMovies, setLikedMovies];
}

export default useLikedMovies;
