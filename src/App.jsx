import { TodoProvider } from './contexts';

import {
  TodoAddModal,
  TodoButton,
  TodoCounter,
  TodoList,
  TodoSearch,
} from './components';

import './App.css';

function AppUI() {
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
        <TodoSearch />

        <TodoCounter />

        <TodoList></TodoList>
      </section>

      <TodoAddModal />
    </div>
  );
}

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
