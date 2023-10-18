import { useContext } from 'react';
import { TodoContext } from '../../contexts';

import './TodoItem.css';

function TodoItem({ id, text, completed }) {
  const { handleCompleteTodo, handleRemoveTodo } = useContext(TodoContext);

  return (
    <li className={completed ? 'completed' : null}>
      <span className="checkbox" onClick={() => handleCompleteTodo(id)}></span>
      <span className="text">{text}</span>
      <span className="close" onClick={() => handleRemoveTodo(id)}>
        X
      </span>
    </li>
  );
}

export { TodoItem };
