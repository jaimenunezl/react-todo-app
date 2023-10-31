import { useCallback, useRef, useState } from 'react';

import { useLocalStorage } from '.';
import { LIST_V1 } from '../const';

export function useTask() {
  const [searchValue, setSearchValue] = useState('');
  const {
    item: todoList,
    updateItem: updateTodoList,
    isLoading,
  } = useLocalStorage(LIST_V1, []);

  const isCountingDown = useRef();

  const handleSearchValue = useCallback((text) => {
    if (isCountingDown.current) clearTimeout(isCountingDown.current);

    isCountingDown.current = setTimeout(() => {
      setSearchValue(text);
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

    const newList = [...todoList, newTodo];

    updateTodoList(newList);
  };

  const handleEditTodo = (id, text) => {
    const newList = todoList.map((todo) => {
      if (todo.id !== id) return todo;

      return {
        ...todo,
        text,
      };
    });
    updateTodoList(newList);
  };

  return {
    todoList,
    searchValue,
    isLoading,
    handleSearchValue,
    handleRemoveTodo,
    handleEditTodo,
    handleCompleteTodo,
    handleAddTodo,
  };
}
