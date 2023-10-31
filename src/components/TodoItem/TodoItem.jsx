import { useNavigate } from 'react-router-dom';
import './TodoItem.css';

function TodoItem({
  id,
  text,
  completed,
  handleCompleteTodo,
  handleRemoveTodo,
}) {
  const navigate = useNavigate();

  const handleEditTodo = (id) => {
    navigate(`/edit/${id}`);
  };

  return (
    <li className={completed ? 'completed' : null}>
      <span className="checkbox" onClick={() => handleCompleteTodo(id)}></span>
      <span className="text">{text}</span>
      <span className="item-button edit" onClick={() => handleEditTodo(id)}>
        /
      </span>
      <span className="item-button close" onClick={() => handleRemoveTodo(id)}>
        X
      </span>
    </li>
  );
}

export { TodoItem };
