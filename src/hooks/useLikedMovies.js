import { useCallback } from "react";
import useLocalStorage from "hooks/useLocalStorage";

function useLikedMovies() {
  const [likedMovies, setLikedMovies] = useLocalStorage("likedMovies", {});

  const setIsMovieLiked = useCallback(
    (currentMovie) => {
      let newLikedMovies = {};

      if (!currentMovie.isLiked) {
        newLikedMovies = {
          ...likedMovies,
          [currentMovie.id]: { ...currentMovie, isLiked: true },
        };
      } else {
        const { [currentMovie.id]: otherMovie, ...rest } = likedMovies;
        newLikedMovies = rest;
      }
      setLikedMovies(newLikedMovies);
    },
    [likedMovies, setLikedMovies]
  );

  return [likedMovies, setIsMovieLiked];
}

export default useLikedMovies;
