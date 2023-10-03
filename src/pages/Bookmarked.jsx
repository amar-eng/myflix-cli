import React, { useState } from 'react';
import { useGetMoviesQuery } from '../slices/moviesApiSlice';
import { SearchBar } from '../components/SearchBar';
import { Title } from '../components/Title';
import { Col, Row } from 'react-bootstrap';
import { SmallerCard } from '../components/SmallerCard';

export const Bookmarked = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const { data: movieList, isLoading, isError } = useGetMoviesQuery();
  // First, filter the movieList to get only items with category 'movie'
  const allMovies =
    movieList?.filter((movie) => movie.isBookmarked === true) || [];

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
      <SearchBar onSearch={handleSearch} text="Search for Movies" />

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
          <Title text="Movies" />
          <Row className="mb-4 mx-4">
            {allMovies.map((movie) => (
              <Col md={3} key={movie.id} className="mb-4 ">
                <SmallerCard {...movie} />
              </Col>
            ))}
          </Row>
        </div>
      )}
    </div>
  );
};
