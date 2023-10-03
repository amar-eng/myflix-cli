import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { logo, navHome, navMovies, navTv, navBookmark } from '../utils/Lists';
import { LinkContainer } from 'react-router-bootstrap';

const navItems = [
  {
    to: '/',
    src: navHome,
    alt: 'home',
  },
  {
    to: '/movies',
    src: navMovies,
    alt: 'movies',
  },
  {
    to: '/tv-series',
    src: navTv,
    alt: 'tv-series',
  },
  {
    to: '/bookmarked',
    src: navBookmark,
    alt: 'bookmarked',
  },
];

export const Navbar = () => {
  return (
    <Row className="navbar d-flex align-items-center justify-content-space-between">
      <Col xs={1}>
        <img src={logo} alt="logo" />
      </Col>
      <Col xs={3} className="navbar__img-container">
        {navItems.map((item) => (
          <LinkContainer
            key={item.to}
            to={item.to}
            style={{ cursor: 'pointer' }}
          >
            <img src={item.src} alt={item.alt} className="nabar__img" />
          </LinkContainer>
        ))}
      </Col>
      <Col xs={1} className=" d-flex align-items-center justify-content-center">
        <div className="navbar__icon">AM</div>
      </Col>
    </Row>
  );
};
