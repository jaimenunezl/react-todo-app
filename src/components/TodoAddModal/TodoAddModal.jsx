import { React, useState } from 'react';

import './TodoAddModal.css';

const TodoAddModal = ({ handleAddTodo, handleCloseModal }) => {
  const [text, setText] = useState(null);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAddTodo(text);
    }
  };

  return (
    <>
      <div className="modal-container">
        <div className="modal-form">
          <input
            className="new-todo-input"
            type="text"
            placeholder="Estudiar ReactJS"
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e)}
          />

          <div className="action-container">
            <button className="save-todo" onClick={() => handleAddTodo(text)}>
              Guardar
            </button>
            <button className="close-modal" onClick={() => handleCloseModal()}>
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export { TodoAddModal };
