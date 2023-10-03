import React, { useState } from 'react';
import {
  bookmarkEmpty,
  bookmarkFull,
  iconMovie,
  iconTv,
  play,
} from '../utils/Lists';
import { Col, Row } from 'react-bootstrap';
import { BASE_URL } from '../constants';
import { notifySuccess } from './notification';
import { useUpdateMovieMutation } from '../slices/moviesApiSlice';
export const CardComponent = ({
  id,
  year,
  thumbnail,
  rating,
  category,
  title,
  isBookmarked,
}) => {
  const [isMovieBookmarked, setIsMovieBookmarked] = useState(isBookmarked);
  const [updateMovie] = useUpdateMovieMutation();

  const handleBookmarkToggle = async () => {
    const newBookmarkStatus = !isMovieBookmarked;

    try {
      await updateMovie({ id: id, isBookmarked: newBookmarkStatus });

      setIsMovieBookmarked(newBookmarkStatus);

      !isMovieBookmarked
        ? notifySuccess(`${title} is saved for later`)
        : notifySuccess(`${title} is removed from the bookmarked list`);
    } catch (error) {
      notifySuccess('Failed to update bookmark status:', error);
    }
  };
  return (
    <div
      key={id}
      className="trendingContainer__card"
      style={{
        backgroundImage: `url(${BASE_URL}/${thumbnail.trending.large})`,
      }}
    >
      <div
        className="trendingContainer__card--bookmark"
        onClick={handleBookmarkToggle}
      >
        <img
          src={isMovieBookmarked ? bookmarkFull : bookmarkEmpty}
          alt="bookmark"
        />
      </div>
      <div className="trendingContainer__card--info">
        <Row md={6} className="d-flex align-items-center">
          <Col className="trendingContainer__year" md={2}>
            {year}
          </Col>
          <Col md={1}>
            <div className="trendingContainer__point"></div>
          </Col>
          <Col className="trendingContainer__rating" md={2}>
            {rating}
          </Col>
          <Col md={1}>
            <div className="trendingContainer__point"></div>
          </Col>
          <Col md={5}>
            <div className="trendingContainer__content">
              <img
                src={category === 'Movie' ? iconMovie : iconTv}
                alt="movie"
                className="trendingContainer__icon"
              />

              <div className="trendingContainer__text">{category}</div>
            </div>
          </Col>
        </Row>

        <p className="trendingContainer__title">{title}</p>
      </div>

      <div className="trendingContainer__card--play">
        <img src={play} alt="Play" />
        <span>Play</span>
      </div>
    </div>
  );
};
