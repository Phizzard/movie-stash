import React from "react";

import useLikedMovies from "hooks/useLikedMovies";

import MoviePoster from "components/MoviePoster";

export function Liked() {
  const [movies, setLikedMovies] = useLikedMovies();

  function handleOnHeartClick(movieData) {
    let newLikedMovies = {};

    if (!movieData.isLiked) {
      newLikedMovies = {
        ...movies,
        [movieData.id]: { ...movieData, isLiked: true },
      };
    } else {
      const { [movieData.id]: otherMovie, ...rest } = movies;
      newLikedMovies = rest;
    }
    setLikedMovies(newLikedMovies);
  }

  return (
    <>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            Movies You Liked
          </h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-12">
              {Object.values(movies).map((movie) => {
                return (
                  <MoviePoster
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    imageAlt={movie.title}
                    imagePath={movie.imagePath}
                    imageWidth="w500"
                    onHeartClick={handleOnHeartClick}
                    isLiked={movies[movie.id]}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Liked;
