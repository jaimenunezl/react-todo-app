import {
  TodoAddModal,
  TodoButton,
  TodoCounter,
  TodoItemWithLoading,
  TodoSearch,
  TodoItem,
} from './components';

import './App.css';
import { useTask } from './hooks';

function AppUI() {
  const {
    toggleModal,
    handleSearchValue,
    searchValue,
    todoList,
    handleAddTodo,
    handleCompleteTodo,
    isLoading,
    handleRemoveTodo,
  } = useTask();

  const listFiltered = todoList.filter(({ text }) =>
    text.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="container">
      <aside>
        {' '}
        <header>
          <h1>Tareas</h1>
        </header>
        <main>
          <TodoButton toggleModal={toggleModal} />
        </main>
        <footer>
          <a
            href="https://github.com/jaimenunezl"
            target="_blank"
            rel="noreferrer noopener nofollow"
          >
            Made by Jaime Núñez
          </a>
        </footer>
      </aside>

      <section>
        <TodoSearch handleSearchValue={handleSearchValue} />

        <TodoCounter todoList={todoList} />

        <TodoItemWithLoading
          isLoading={isLoading}
          todoList={listFiltered}
          searchValue={searchValue}
        >
          {listFiltered
            .sort((a, b) => a.completed - b.completed)
            .sort((a, b) => a.text - b.text)
            .map(({ id, text, completed }) => (
              <TodoItem
                key={id}
                id={id}
                text={text}
                completed={completed}
                handleCompleteTodo={handleCompleteTodo}
                handleRemoveTodo={handleRemoveTodo}
              />
            ))}
        </TodoItemWithLoading>
      </section>

      <TodoAddModal handleAddTodo={handleAddTodo} toggleModal={toggleModal} />
    </div>
  );
}

function App() {
  return <AppUI />;
}

export default App;
