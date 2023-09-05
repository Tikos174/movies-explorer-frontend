import logo from "../../images/logo_register.svg";
import React from "react";
import { useForm } from "../../utils/useForm";
import { useNavigate, NavLink } from 'react-router-dom';

function Login({ handeLogin, loggedIn }) {
  const navigate = useNavigate();
  const { formValue, handleChange, errors, isValid } = useForm({
    email: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (isValid) {
      handeLogin({ email: formValue.email, password: formValue.password });
    }
  }

  React.useEffect(() => {
    if (loggedIn) {
      navigate('/movies');
    }
  }, [loggedIn, navigate]);

  return (
    <section className="login">
      <div className="register__position">
        <img alt="Логотип сайта" className="login__logo" src={logo} />
        <h2 className="login__title">Рады видеть!</h2>
      </div>
      <form className="register__form" onSubmit={handleSubmit}>
        <p className="register__name">E-mail</p>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formValue.email}
          onChange={handleChange}
          className="register__input-name"
          minLength="9"
          maxLength="40"
          required
        />
        <span className="register__error">{errors.email}</span>
        <p className="register__name">Пароль</p>
        <input
          placeholder="Пароль"
          type="password"
          name="password"
          minLength="3"
          maxLength="20"
          required
          className="register__input-name"
          value={formValue.password || ""}
          onChange={handleChange}
        />
        <span className="register__error">{errors.password}</span>
        <button
          className={`login__fix ${!isValid ? "register__button-disable" : ""}`}
          disabled={!isValid} >
          Войти
        </button>
      </form>
      <div className="register__bottom-box">
        <h2 className="register__text-login">Ещё не зарегистрированы?</h2>
        <NavLink to="/signup" className="register__singin">
          Регистрация
        </NavLink>
      </div>
    </section>
  );
}
export default Login;
