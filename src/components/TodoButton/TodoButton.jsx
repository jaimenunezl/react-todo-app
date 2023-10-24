import './TodoButton.css';

const TodoButton = ({ toggleModal }) => {
  return (
    <button className="open-modal-button" onClick={() => toggleModal()}>
      + Agregar
    </button>
  );
};

export { TodoButton };
