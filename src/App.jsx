import { useState } from 'react';

import {
  TodoAddModal,
  TodoButton,
  TodoCounter,
  TodoItem,
  TodoList,
  TodoSearch,
} from './components';

import './App.css';

function App() {
  const [todoList, setTodoList] = useState([]);

  const [searchValue, setSearchValue] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearchValue = (text) => {
    setSearchValue(text);
  };

  const handleRemoveTodo = (id) => {
    const newList = todoList.filter(({ id: todoId }) => todoId !== id);
    setTodoList(newList);
  };

  const handleCompleteTodo = (id) => {
    const listEdited = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });

    setTodoList(listEdited);
  };

  const handleAddTodo = (text) => {
    if (!text) {
      alert('El campo no puede estar vacío');
      return;
    }

    const newTodo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
    };
    const newList = [newTodo, ...todoList];
    setTodoList(newList);
    handleCloseModal();
  };

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <main>
        <aside>
          <TodoButton handleOpenModal={handleOpenModal} />
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

          <TodoList>
            {todoList
              .filter(({ text }) =>
                text.toLowerCase().includes(searchValue.toLowerCase())
              )
              .sort((a, b) => a.text - b.text)
              .sort((a, b) => a.completed - b.completed)
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
        </section>

        {isModalOpen ? (
          <TodoAddModal
            handleAddTodo={handleAddTodo}
            handleCloseModal={handleCloseModal}
          />
        ) : null}
      </main>
    </>
  );
}

export default App;
