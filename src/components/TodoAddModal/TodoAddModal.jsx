import { React, useState, useContext } from 'react';
import { TodoContext } from '../../contexts';

import './TodoAddModal.css';

const TodoAddModal = () => {
  const [text, setText] = useState('');
  const { handleAddTodo, toggleModal } = useContext(TodoContext);

  const handleSaveButton = () => {
    if (text.length === 0) return;

    handleAddTodo(text);
    setText('');
    toggleModal();
  };

  const handleCloseButton = () => {
    setText('');
    toggleModal();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setTimeout(() => {
        handleSaveButton();
      }, 100);
    }
  };

  return (
    <dialog id="add-todo-modal">
      <div className="modal-form">
        <textarea
          className="new-todo-input"
          autofocus
          placeholder="Estudiar ReactJS"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e)}
        />

        <div className="action-container">
          <button className="save-todo" onClick={() => handleSaveButton()}>
            Guardar
          </button>
          <button className="close-modal" onClick={() => handleCloseButton()}>
            Cancelar
          </button>
        </div>
      </div>
    </dialog>
  );
};

export { TodoAddModal };
