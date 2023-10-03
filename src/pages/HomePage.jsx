import React, { useState } from 'react';
import { Trending } from '../layouts/Trending';
import { Recommended } from '../layouts/Recommended';
import { SearchBar } from '../components/SearchBar';
import { useGetMoviesQuery } from '../slices/moviesApiSlice';
import { Title } from '../components/Title';
import { Col, Row } from 'react-bootstrap';
import { SmallerCard } from '../components/SmallerCard';

export const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch all movies
  const { data: allMovies, isLoading, isError } = useGetMoviesQuery();

  // Filter movies based on search query
  const filteredMovies = searchQuery
    ? allMovies.filter((movie) =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : allMovies;

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <SearchBar
        onSearch={handleSearch}
        text="Search for Movies or TV-series"
      />
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error occurred while fetching movies</div>
      ) : searchQuery ? (
        <div>
          <Title length={filteredMovies.length} searchQuery={searchQuery} />
          <Row className="mb-4 mx-4">
            {filteredMovies.map((movie) => (
              <Col md={3} key={movie.id} className="mb-4 ">
                <SmallerCard {...movie} />
              </Col>
            ))}
          </Row>
        </div>
      ) : (
        <div>
          <Trending />
          <Recommended />
        </div>
      )}
    </div>
  );
};
