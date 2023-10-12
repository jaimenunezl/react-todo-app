import React from 'react';

import './TodoSearch.css';

const TodoSearch = ({ handleSearchValue }) => {
  return (
    <input
      className="search"
      type="text"
      placeholder="Ejercicio"
      onChange={(e) => handleSearchValue(e.target.value)}
    />
  );
};

export { TodoSearch };
