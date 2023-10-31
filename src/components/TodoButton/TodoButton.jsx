import { useNavigate } from 'react-router-dom';
import './TodoButton.css';

const TodoButton = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('new');
  };

  return (
    <button className="open-modal-button" onClick={handleNavigate}>
      + Agregar
    </button>
  );
};

export { TodoButton };
