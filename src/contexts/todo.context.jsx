import { createContext, useCallback, useRef, useState } from 'react';
import { LIST_V1 } from '../const';
import { useDB } from '../hooks';

export const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { item: todoList, updateItem: updateTodoList } = useDB(LIST_V1, []);

  const isCountingDown = useRef();

  const handleSearchValue = useCallback((text) => {
    setIsLoading(true);

    if (isCountingDown.current) clearTimeout(isCountingDown.current);

    isCountingDown.current = setTimeout(() => {
      setSearchValue(text);
      setIsLoading(false);
      isCountingDown.current = null;
    }, 500);
  }, []);

  const handleRemoveTodo = (id) => {
    const newList = todoList.filter(({ id: todoId }) => todoId !== id);
    updateTodoList(newList);
  };

  const handleCompleteTodo = (id) => {
    const listEdited = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });

    updateTodoList(listEdited);
  };

  const handleAddTodo = (text) => {
    const newTodo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
    };
    const newList = [newTodo, ...todoList];
    updateTodoList(newList);
  };

  const toggleModal = useCallback(() => {
    const modal = document.getElementById('add-todo-modal');
    modal.open ? modal.close() : modal.showModal();
  }, []);

  return (
    <TodoContext.Provider
      value={{
        todoList,
        searchValue,
        isLoading,
        handleSearchValue,
        handleRemoveTodo,
        handleCompleteTodo,
        handleAddTodo,
        toggleModal,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
