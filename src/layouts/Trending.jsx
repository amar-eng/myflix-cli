import React from 'react';
import { useGetMoviesQuery } from '../slices/moviesApiSlice';
import { Title } from '../components/Title';
import { CardComponent } from '../components/CardComponent';
import { Carousel } from 'react-bootstrap';

export const Trending = () => {
  const { data: movies, isLoading, isError } = useGetMoviesQuery();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading movies</div>;

  const trendingMovies =
    movies &&
    movies.filter(
      (movie) => movie.isTrending && movie.thumbnail && movie.thumbnail.trending
    );

  const chunkedMovies = [];
  for (let i = 0; i < trendingMovies.length - 2; i += 2) {
    chunkedMovies.push(trendingMovies.slice(i, i + 3));
  }

  return (
    <div>
      <Title text="Trending" />

      <Carousel className="trendingContainer" interval={null}>
        {chunkedMovies.map((movieChunk, index) => (
          <Carousel.Item key={index}>
            <div className="movieChunk">
              {movieChunk.map((movie) => (
                <CardComponent key={movie.id} {...movie} />
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};
