import React from "react";

import usePopularMovies from "hooks/usePopularMovies";

import MoviePoster from "components/MoviePoster";

export function Home() {
  const { data } = usePopularMovies();

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
              {data &&
                data.results.map((movie) => {
                  return (
                    <MoviePoster
                      key={movie.id}
                      title={movie.title}
                      imageAlt={movie.title}
                      imagePath={movie.poster_path}
                      imageWidth="w500"
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

export default Home;
