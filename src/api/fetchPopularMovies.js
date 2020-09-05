import ky from "ky";

export async function fetchPopularMovies() {
  const res = await ky.get("https://api.themoviedb.org/3/movie/popular", {
    searchParams: {
      api_key: process.env.REACT_APP_MOVIEDB_API_KEY,
    },
  });
  return res.json();
}

export default fetchPopularMovies;
