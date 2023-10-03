import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import {
  iconMovie,
  bookmarkEmpty,
  iconTv,
  bookmarkFull,
  play,
} from '../utils/Lists';
import { BASE_URL } from '../constants';
import { useUpdateMovieMutation } from '../slices/moviesApiSlice';
import { notifySuccess } from './notification';

export const SmallerCard = ({
  id,
  title,
  year,
  category,
  rating,
  thumbnail,
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
        ? notifySuccess('Your selection is bookmarked')
        : notifySuccess('Your selection is removed from the bookmarked list');
    } catch (error) {
      notifySuccess('Failed to update bookmark status:', error);
    }
  };

  return (
    <div className="smallerCard">
      <div
        className="smallerCard-img-container"
        style={{
          backgroundImage: `url(${BASE_URL}/${thumbnail.regular.small})`,
        }}
      >
        <div className="smallerCard--play">
          <img src={play} alt="Play" />
          <span>Play</span>
        </div>
        <div
          className="smallerCard--bookmark"
          style={{
            backgroundImage: `url(${
              isMovieBookmarked ? bookmarkFull : bookmarkEmpty
            })`,
          }}
          onClick={handleBookmarkToggle}
        ></div>
      </div>
      <Row className="d-flex align-items-center container-row">
        <Col className="smallerCard__text " md={2}>
          {year}
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
            <div className="smallerCard__text">{category}</div>
          </div>
        </Col>
        <Col md={1}>
          <div className="trendingContainer__point"></div>
        </Col>
        <Col className="smallerCard__text" md={2}>
          {rating}
        </Col>
      </Row>
      <p className="smallerCard-title">{title}</p>
    </div>
  );
};
