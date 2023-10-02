import React from 'react';
import { Trending } from '../layouts/Trending';
import { Recommended } from '../layouts/Recommended';

export const HomePage = () => {
  return (
    <div>
      <Trending />
      <Recommended />
    </div>
  );
};
