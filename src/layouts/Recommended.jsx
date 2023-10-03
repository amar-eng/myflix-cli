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
      <Row xs={1} sm={6} md={2} lg={3} xl={4} className="mb-4 mx-1">
        {recommendedMovies.map((movie, index) => (
          <Col xs={6} sm={4} md={3} key={movie.id} className="mb-4">
            <SmallerCard {...movie} />
          </Col>
        ))}
      </Row>
    </div>
  );
};
