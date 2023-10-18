import { React, useState, useEffect, useRef, useContext } from 'react';

import { TodoContext } from '../../contexts';

import './TodoSearch.css';

const TodoSearch = () => {
  const [searchValue, setSearchValue] = useState('');
  const [hasError, setHasError] = useState(null);
  const isFirstSearch = useRef(true);

  const { handleSearchValue } = useContext(TodoContext);

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
