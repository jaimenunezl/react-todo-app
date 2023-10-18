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
        <TodoButton />
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
