import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useTask } from '../../hooks';

import './NewTodo.css';

function NewTodo() {
  const [text, setText] = useState('');
  const { handleAddTodo } = useTask();
  const navigate = useNavigate();

  const handleSaveButton = () => {
    if (text.length === 0) return;
    handleAddTodo(text);
    navigate('/');
  };

  const handleCloseButton = () => {
    navigate('/');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setTimeout(() => {
        handleSaveButton();
      }, 100);
    }
  };

  return (
    <div className="new-container">
      <header>
        <h1>Crea tu próxima tarea</h1>
      </header>
      <section>
        <div className="modal-form">
          <textarea
            className="new-todo-input"
            autoFocus
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
      </section>
    </div>
  );
}

export { NewTodo };
