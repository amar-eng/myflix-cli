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

  return (
    <div>
      <Title text="Recommended for you" />
      <Row className="d-flex align-items-center mx-1">
        {recommendedMovies.map((movie, index) => (
          <Col xs={6} sm={4} lg={3} key={movie.id} className="mb-5">
            <SmallerCard {...movie} />
          </Col>
        ))}
      </Row>
    </div>
  );
};
