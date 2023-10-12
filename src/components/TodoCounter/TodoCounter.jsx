import './TodoCounter.css';

function TodoCounter({ total, completed }) {
  return (
    <>
      <h3>
        Has completado {completed} de {total} TODOs
      </h3>
    </>
  );
}

export { TodoCounter };
