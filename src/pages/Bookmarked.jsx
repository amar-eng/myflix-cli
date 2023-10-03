import React, { useState } from 'react';
import { useGetMoviesQuery } from '../slices/moviesApiSlice';
import { SearchBar } from '../components/SearchBar';
import { Title } from '../components/Title';
import { Col, Row } from 'react-bootstrap';
import { SmallerCard } from '../components/SmallerCard';

export const Bookmarked = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const { data: movieList, isLoading, isError } = useGetMoviesQuery();

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
      <SearchBar onSearch={handleSearch} text="Search within your Bookmark" />

      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error occurred while fetching movies</div>
      ) : searchQuery ? (
        <div>
          <Title length={filteredMovies.length} searchQuery={searchQuery} />
          <Row xs={1} sm={6} md={2} lg={3} xl={4} className="mb-4 mx-1">
            {filteredMovies.map((movie) => (
              <Col xs={6} sm={4} md={3} key={movie.id} className="mb-4">
                <SmallerCard {...movie} />
              </Col>
            ))}
          </Row>
        </div>
      ) : (
        <>
          <div>
            <Title text="Bookmarked Movies" />
            <Row xs={1} sm={6} md={2} lg={3} xl={4} className="mb-4 mx-1">
              {allMovies
                .filter((movie) => movie.category === 'Movie')
                .map((movie) => (
                  <Col xs={6} sm={4} md={3} key={movie.id} className="mb-4">
                    <SmallerCard {...movie} />
                  </Col>
                ))}
            </Row>
          </div>

          <div>
            <Title text="Bookmarked TV-Series" />
            <Row xs={1} sm={6} md={2} lg={3} xl={4} className="mb-4 mx-1">
              {allMovies
                .filter((movie) => movie.category !== 'Movie')
                .map((movie) => (
                  <Col xs={6} sm={4} md={3} key={movie.id} className="mb-4">
                    <SmallerCard {...movie} />
                  </Col>
                ))}
            </Row>
          </div>
        </>
      )}
    </div>
  );
};
