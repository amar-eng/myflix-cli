import React from 'react';
import { useGetMoviesQuery } from '../slices/moviesApiSlice';
import { BASE_URL } from '../constants';
import { Title } from '../components/Title';

export const Trending = () => {
  const { data: movies, isLoading, isError } = useGetMoviesQuery();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading movies</div>;

  const trendingMovies = movies && movies.filter((movie) => movie.isTrending);

  return (
    <div>
      <Title text="Trending" />
      {trendingMovies &&
        trendingMovies.map((movie, index) => (
          <div key={movie.id}>
            <p>{movie.title}</p>
            <img
              src={`${BASE_URL}/${movie.thumbnail.trending.large}`}
              alt={movie.title}
            />
          </div>
        ))}
    </div>
  );
};
