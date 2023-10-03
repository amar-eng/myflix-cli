import React, { useState } from 'react';
import { searchIcon } from '../utils/Lists';

export const SearchBar = ({ onSearch, text }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    const value = event.target.value;
    setQuery(value);
    onSearch(value); // Inform the parent about the search query
  };

  return (
    <div className="search-container">
      <img
        src={searchIcon}
        className="search-container-icon"
        alt="search-icon"
      />
      <input
        type="text"
        placeholder={text}
        className="search-container-input"
        value={query}
        onChange={handleInputChange}
      />
    </div>
  );
};
