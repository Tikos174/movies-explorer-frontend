import { useNavigate, Link } from 'react-router-dom';

function Error() {
  const navigate = useNavigate();

  const back = () => {
    navigate(-1)
  };

  return (
    <section className="error">
        <h2 className="error__title">404</h2>
        <p className="error__name">Страница не найдена</p>
        <a onClick={back} className="error__back">
        Назад
        </a>
    </section>
  );
}

export default Error;