import React, { useState } from 'react';
import { useGetMoviesQuery } from '../slices/moviesApiSlice';
import { SearchBar } from '../components/SearchBar';
import { Title } from '../components/Title';
import { Col, Row } from 'react-bootstrap';
import { SmallerCard } from '../components/SmallerCard';

export const ShowsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const { data: movieList, isLoading, isError } = useGetMoviesQuery();
  // First, filter the movieList to get only items with category 'movie'
  const allShows =
    movieList?.filter((movie) => movie.category !== 'Movie') || [];

  // Then, if there's a searchQuery, filter the allMovies list based on the title
  const filteredMovies = searchQuery
    ? allShows.filter((movie) =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : allShows;

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  console.log(filteredMovies);
  return (
    <div>
      <SearchBar onSearch={handleSearch} text="Search for TV-Series" />

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
          <Title text="TV-Series" />
          <Row className="mb-4 mx-4">
            {allShows.map((movie) => (
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
