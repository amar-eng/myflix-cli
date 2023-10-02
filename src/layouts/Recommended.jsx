import React from 'react';
import { Title } from '../components/Title';
import { SmallerCard } from '../components/SmallerCard';
import { useGetMoviesQuery } from '../slices/moviesApiSlice';
import { Row, Col } from 'react-bootstrap';

export const Recommended = () => {
  const { data: movies, isLoading, isError } = useGetMoviesQuery();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading movies</div>;

  const recommendedMovies =
    movies && movies.filter((movie) => movie.isTrending === false);

  const chunkedMovies = [];
  for (let i = 0; i < recommendedMovies.length; i += 4) {
    chunkedMovies.push(recommendedMovies.slice(i, i + 4));
  }

  return (
    <div>
      <Title text="Recommended for you" />
      {chunkedMovies.map((chunk, index) => (
        <Row
          key={index}
          className="mb-4 d-flex align-items-center justify-content-center mx-4"
        >
          {chunk.map((movie) => (
            <Col md={3} key={movie.id}>
              <SmallerCard {...movie} />
            </Col>
          ))}
        </Row>
      ))}
    </div>
  );
};
