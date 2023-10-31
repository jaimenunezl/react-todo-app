import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useTask } from '../../hooks';

import './EditTodo.css';

function EditTodo() {
  const [text, setText] = useState('');
  const { todoList, isLoading, handleEditTodo } = useTask();
  const { id } = useParams();
  const navigate = useNavigate();

  const todo = todoList.find((todo) => todo.id === id);

  const handleSaveButton = (id) => {
    if (text.length === 0) return;

    handleEditTodo(id, text);
    navigate('/');
  };

  const handleCloseButton = () => {
    navigate('/');
  };

  const handleKeyDown = (e) => {
    if (e.key !== 'Enter') return;

    setTimeout(() => {
      handleSaveButton();
    }, 100);
  };

  useEffect(() => {
    setText(todo?.text || '');
  }, [isLoading, todo?.text]);

  return (
    <div className="edit-container">
      <header>
        <h1>Escribe tus cambios</h1>
      </header>

      {isLoading && <p>Cargando...</p>}

      {!isLoading && todo && (
        <section>
          <div className="modal-form">
            <textarea
              className="new-todo-input"
              autoFocus
              placeholder="Estudiar ReactJS"
              defaultValue={todo.text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={(e) => handleKeyDown(e)}
            />

            <div className="action-container">
              <button
                className="save-todo"
                onClick={() => handleSaveButton(todo.id)}
              >
                Guardar
              </button>
              <button
                className="close-modal"
                onClick={() => handleCloseButton()}
              >
                Cancelar
              </button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export { EditTodo };
