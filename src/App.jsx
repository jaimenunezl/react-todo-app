import { useState, useCallback, useRef } from 'react';

import {
  TodoAddModal,
  TodoButton,
  TodoCounter,
  TodoItem,
  TodoList,
  TodoSearch,
} from './components';

import { useDB } from './hooks';

import { TODO_LIST_V1 } from './const';

import './App.css';

function App() {
  const { item: todoList, updateItem: updateTodoList } = useDB(
    TODO_LIST_V1,
    []
  );
  const [searchValue, setSearchValue] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const isCountingDown = useRef();

  const handleSearchValue = useCallback((text) => {
    setIsLoading(true);

    if (isCountingDown.current) clearTimeout(isCountingDown.current);

    isCountingDown.current = setTimeout(() => {
      setSearchValue(text);
      setIsLoading(false);
      isCountingDown.current = null;
    }, 2000);
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
    toggleModal();
  };

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <>
      <main>
        <aside>
          <TodoButton handleOpenModal={toggleModal} />
        </aside>

        <section>
          <header>
            <h1>TODO List</h1>
          </header>

          <TodoSearch handleSearchValue={handleSearchValue} />

          <TodoCounter
            completed={todoList.filter(({ completed }) => completed).length}
            total={todoList.length}
          />

          {isLoading ? (
            <>
              <img className="loading" src="loading.svg" alt="cargando" />
            </>
          ) : (
            <TodoList hasSearch={searchValue.length > 0}>
              {todoList
                .filter(({ text }) =>
                  text.toLowerCase().includes(searchValue.toLowerCase())
                )
                .sort((a, b) => a.completed - b.completed)
                .sort((a, b) => a.text - b.text)
                .map(({ id, text, completed }) => (
                  <TodoItem
                    key={id}
                    id={id}
                    text={text}
                    completed={completed}
                    handleRemoveTodo={handleRemoveTodo}
                    handleCompleteTodo={handleCompleteTodo}
                  />
                ))}
            </TodoList>
          )}
        </section>

        {isModalOpen ? (
          <TodoAddModal
            handleAddTodo={handleAddTodo}
            handleCloseModal={toggleModal}
          />
        ) : null}
      </main>
    </>
  );
}

export default App;
