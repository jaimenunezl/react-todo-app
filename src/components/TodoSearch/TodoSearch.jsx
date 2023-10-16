import { React } from 'react';

import './TodoSearch.css';

const TodoSearch = ({ searchValue, handleSearchValue }) => {
  return (
    <input
      className="search"
      type="text"
      placeholder="Ejercicio"
      value={searchValue}
      onChange={(e) => handleSearchValue(e.target.value)}
    />
  );
};

export { TodoSearch };
