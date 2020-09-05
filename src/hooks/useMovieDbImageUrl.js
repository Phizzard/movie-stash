const BASE_URL = "https://image.tmdb.org/t/p/";

function useMovieDbImageUrl(path, size = "original") {
  if (!path) {
    return;
  }
  return `${BASE_URL}${size}${path}`;
}

export default useMovieDbImageUrl;
