import React from 'react';

import './TodoItem.css';

const TodoItem = ({
  id,
  text,
  completed,
  handleRemoveTodo,
  handleCompleteTodo,
}) => {
  return (
    <li className={completed ? 'completed' : null}>
      <span className="checkbox" onClick={() => handleCompleteTodo(id)}></span>
      <span className="text">{text}</span>
      <span className="close" onClick={() => handleRemoveTodo(id)}>
        X
      </span>
    </li>
  );
};

export { TodoItem };
