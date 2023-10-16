import './TodoCounter.css';

function TodoCounter({ total, completed }) {
  return (
    <>
      {completed >= total ? (
        <h3>¡Muy bien hecho! Ahora, disfruta de la tarde libre. 💃</h3>
      ) : (
        <h3>
          Has completado {completed} de {total}{' '}
          {total === 1 ? 'tarea' : 'tareas'}
        </h3>
      )}
    </>
  );
}

export { TodoCounter };
