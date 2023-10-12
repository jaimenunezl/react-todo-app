import React from 'react';

import './TodoList.css';

const TodoList = ({ children }) => {
  return (
    <div className="list-container">
      {children.length ? (
        <ul style={{ listStyle: 'none', padding: 0, margin: '10px  0px' }}>
          {children}
        </ul>
      ) : (
        <p>Comienza agregando un TODO</p>
      )}
    </div>
  );
};

export { TodoList };
