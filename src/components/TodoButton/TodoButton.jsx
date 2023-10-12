import React from 'react';

import './TodoButton.css';

const TodoButton = ({ handleOpenModal }) => {
  return <button onClick={() => handleOpenModal()}>+ Agregar</button>;
};

export { TodoButton };
