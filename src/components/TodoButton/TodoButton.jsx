import { useContext } from 'react';
import { TodoContext } from '../../contexts';

import './TodoButton.css';

const TodoButton = () => {
  const { toggleModal } = useContext(TodoContext);

  return (
    <button className="open-modal-button" onClick={() => toggleModal()}>
      + Agregar
    </button>
  );
};

export { TodoButton };
