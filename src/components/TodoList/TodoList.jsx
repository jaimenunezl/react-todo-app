import { useContext } from 'react';
import { TodoContext } from '../../contexts';

import { TodoItem, Spinner } from '../../components';

import './TodoList.css';

const TodoList = () => {
  const { todoList, searchValue, isLoading } = useContext(TodoContext);

  const listFiltered = todoList.filter(({ text }) =>
    text.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="list-container">
      {isLoading ? (
        <Spinner />
      ) : listFiltered.length ? (
        <ul>
          {listFiltered
            .sort((a, b) => a.completed - b.completed)
            .sort((a, b) => a.text - b.text)
            .map(({ id, text, completed }) => (
              <TodoItem key={id} id={id} text={text} completed={completed} />
            ))}
        </ul>
      ) : (
        <p>
          {searchValue.length > 0
            ? 'No hay resultados'
            : 'Comienza agregando una tarea'}
        </p>
      )}
    </div>
  );
};

export { TodoList };
