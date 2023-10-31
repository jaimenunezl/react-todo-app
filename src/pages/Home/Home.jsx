import {
  TodoButton,
  TodoCounter,
  TodoItem,
  TodoItemWithLoading,
  TodoSearch,
} from '../../components';

import { useTask } from '../../hooks';
import './Home.css';

function HomeUI() {
  const {
    handleCompleteTodo,
    handleRemoveTodo,
    handleSearchValue,
    isLoading,
    searchValue,
    todoList,
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
          <TodoButton />
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
    </div>
  );
}

function Home() {
  return <HomeUI />;
}

export default Home;
