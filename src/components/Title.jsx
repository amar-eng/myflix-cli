import React from 'react';

export const Title = ({ text, length = 0, searchQuery = '' }) => {
  const displayText = text
    ? text
    : `Found ${length} results for ${searchQuery}`;

  return <div className="title">{displayText}</div>;
};
