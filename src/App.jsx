import { EditTodo, Home, NewTodo } from './pages';
import { HashRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/new" element={<NewTodo />}></Route>
        <Route path="/edit/:id" element={<EditTodo />}></Route>
        <Route path="*" element={<p>No encontrado</p>}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
