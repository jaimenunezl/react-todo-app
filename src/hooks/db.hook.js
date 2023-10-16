import { useState } from 'react';

export function useDB(key, initialValue) {
  const updateItem = (value) => {
    localStorage.setItem(key, JSON.stringify(value));
    setItem(value);
  };

  const getItem = (key) => {
    const value = localStorage.getItem(key);

    if (!value) return initialValue;

    try {
      return JSON.parse(value);
    } catch {
      return value;
    }
  };

  const [item, setItem] = useState(getItem(key));

  return { item, updateItem };
}
