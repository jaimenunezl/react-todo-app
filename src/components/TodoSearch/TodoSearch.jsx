import { React, useState, useEffect, useRef } from 'react';

import './TodoSearch.css';

const TodoSearch = ({ handleSearchValue }) => {
  const [searchValue, setSearchValue] = useState('');
  const [hasError, setHasError] = useState(null);
  const isFirstSearch = useRef(true);

  useEffect(() => {
    if (isFirstSearch.current) {
      isFirstSearch.current = false;
      return;
    }

    if (isFirstSearch.current) return;

    if (searchValue.length === 0) {
      handleSearchValue('');
    }

    if (/\d/.test(searchValue)) {
      setHasError('Solo puedes buscar letras');
      return;
    }

    setHasError(null);
    handleSearchValue(searchValue);
  }, [searchValue, handleSearchValue]);

  return (
    <>
      <input
        className="search"
        type="text"
        placeholder="Estudiar React JS"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />

      {hasError && <p style={{ color: 'red' }}>{hasError}</p>}
    </>
  );
};

export { TodoSearch };
