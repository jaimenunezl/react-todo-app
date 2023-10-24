import { withLoading } from '../../hocs';
import './TodoList.css';

const TodoList = ({
  children,
  todoList,
  searchValue,
  isLoading,
  onLoading,
}) => {
  return (
    <div className="list-container">
      {isLoading && onLoading()}

      {!isLoading && todoList.length === 0 && (
        <p>
          {searchValue.length > 0
            ? 'No hay resultados'
            : 'Comienza agregando una tarea'}
        </p>
      )}

      {!isLoading && todoList.length > 0 && <ul>{children}</ul>}
    </div>
  );
};

const TodoItemWithLoading = withLoading(TodoList);

export { TodoList, TodoItemWithLoading };
