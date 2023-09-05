import { useNavigate, NavLink } from 'react-router-dom';

function Error() {
  const navigate = useNavigate();

  const back = () => {
    navigate(-1)
  };

  return (
    <section className="error">
        <h2 className="error__title">404</h2>
        <p className="error__name">Страница не найдена</p>
        <NavLink onClick={back} className="error__back">
        Назад
        </NavLink>
    </section>
  );
}

export default Error;