import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { iconMovie, iconTv } from '../utils/Lists';
import { BASE_URL } from '../constants';

export const SmallerCard = ({ title, year, category, rating, thumbnail }) => {
  return (
    <div className="smallerCard">
      <div
        className="smallerCard-img-container"
        style={{
          backgroundImage: `url(${BASE_URL}/${thumbnail.regular.small})`,
        }}
      ></div>
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
