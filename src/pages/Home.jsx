import React from "react";

import usePopularMovies from "hooks/usePopularMovies";
import useLikedMovies from "hooks/useLikedMovies";

import MoviePoster from "components/MoviePoster";
import MoviePosterSkeleton from "components/MoviePosterSkeleton";

export function Home() {
  const { data, isLoading } = usePopularMovies();
  const [likedMovies, setIsMovieLiked] = useLikedMovies();

  return (
    <>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            Popular Movies
          </h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-12">
              {isLoading ? (
                <>
                  {[...Array(10).keys()].map((index) => (
                    <MoviePosterSkeleton key={index} />
                  ))}
                </>
              ) : (
                data &&
                data.results.map((movie) => {
                  return (
                    <MoviePoster
                      key={movie.id}
                      id={movie.id}
                      title={movie.title}
                      imageAlt={movie.title}
                      imagePath={movie.poster_path}
                      imageWidth="w400"
                      onHeartClick={setIsMovieLiked}
                      isLiked={likedMovies[movie.id]}
                    />
                  );
                })
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
