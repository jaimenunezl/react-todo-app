import './Spinner.css';

function Spinner() {
  return (
    <img
      src={process.env.PUBLIC_URL + '/loading.svg'}
      alt="Loading"
      className="spinner"
    />
  );
}

export { Spinner };
